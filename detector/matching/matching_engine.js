/**
 * PASO 3: MATCHING INTELIGENTE
 * Motor de matching que detecta condiciones modeladas y no modeladas
 */

// Importar catálogo de condiciones (Node.js)
let CONDICIONES_ICARIA = {};
let CONDICIONES_NO_MODELADAS = {};
try {
    const catalog = require('./condiciones_icaria');
    CONDICIONES_ICARIA = catalog.CONDICIONES_ICARIA || {};
    CONDICIONES_NO_MODELADAS = catalog.CONDICIONES_NO_MODELADAS || {};
} catch (e) {
    // En entornos browser estos require no existirán; asumimos variables globales
    if (typeof globalThis !== 'undefined') {
        CONDICIONES_ICARIA = globalThis.CONDICIONES_ICARIA || CONDICIONES_ICARIA;
        CONDICIONES_NO_MODELADAS = globalThis.CONDICIONES_NO_MODELADAS || CONDICIONES_NO_MODELADAS;
    }
}

function analizarCaso(caso) {
    if (!caso.acciones || caso.acciones === null) {
        caso.cobertura = 0;
        caso.estado = '❌ SIN DATOS';
        return caso;
    }
    
    const textoCompleto = caso.acciones.join(' ').toLowerCase();
    let totalCondiciones = 0;
    let condicionesDetectadas = 0;
    
    // 1. DETECTAR CONDICIONES MODELADAS
    for (const [key, condicion] of Object.entries(CONDICIONES_ICARIA)) {
        const encontrada = (condicion.keywords || []).some(keyword => 
            textoCompleto.includes(String(keyword).toLowerCase())
        );
        
        if (encontrada) {
            totalCondiciones++;
            condicionesDetectadas++;
            
            // Detectar parámetro específico si es parametrizable
            let parametro = null;
            if (condicion.parametrizable && condicion.codigo === 'VALORES_TIPO_CLASIFICACION_MIFID') {
                if (textoCompleto.includes('minorista')) parametro = 'M';
                else if (textoCompleto.includes('profesional')) parametro = 'P';
                else if (textoCompleto.includes('contraparte')) parametro = 'C';
            }
            
            if (condicion.parametrizable && condicion.codigo === 'TIENE_CUENTA_VALOR') {
                if (textoCompleto.includes('no tengan ninguna cuenta')) parametro = 0;
                else if (textoCompleto.includes('2 cuentas de valores')) parametro = 2;
                else if (textoCompleto.includes('3 o más cuentas')) parametro = '>=3';
                else parametro = 1;
            }
            
            caso.condicionesModeladas.push({
                codigo: condicion.codigo,
                nombre: condicion.nombre,
                parametro: parametro
            });
        }
    }
    
    // 2. DETECTAR CONDICIONES NO MODELADAS (GAPS)
    for (const [key, condicion] of Object.entries(CONDICIONES_NO_MODELADAS)) {
        const encontrada = (condicion.keywords || []).some(keyword => 
            textoCompleto.includes(String(keyword).toLowerCase())
        );
        
        if (encontrada) {
            totalCondiciones++;
            caso.condicionesNoModeladas.push({
                nombre: condicion.nombre,
                tabla: condicion.tabla
            });
        }
    }
    
    // 3. CALCULAR COBERTURA
    if (totalCondiciones > 0) {
        caso.cobertura = Math.round((condicionesDetectadas / totalCondiciones) * 100);
    } else {
        caso.cobertura = 0;
    }
    
    // 4. DETERMINAR ESTADO
    if (caso.cobertura >= 80) {
        caso.estado = '✅ MODELADA';
    } else if (caso.cobertura >= 40) {
        caso.estado = '⚠️ PARCIAL';
    } else {
        caso.estado = '❌ NO MODELADA';
    }
    
    return caso;
}

// Exportar
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { analizarCaso };
}
