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
    
    // asegurar arrays destino
    caso.condicionesModeladas = caso.condicionesModeladas || [];
    caso.condicionesNoModeladas = caso.condicionesNoModeladas || [];

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

    // 2b. HEURÍSTICOS NO MODELADOS / TESTS RÁPIDOS
    // Añadimos detecciones provenientes de los scripts Python suministrados
    try {
        if (detectTestCapacidadFinanciera(textoCompleto)) {
            totalCondiciones++;
            caso.condicionesNoModeladas.push({ nombre: 'VALORES.TEST_CAPACIDAD_FINANCIERA', tabla: 'MF1301' });
        }
        if (detectTestConveniencia(textoCompleto)) {
            totalCondiciones++;
            caso.condicionesNoModeladas.push({ nombre: 'TEST_DE_CONVENIENCIA', tabla: 'MF1301' });
        }
        if (detectUnSoloTitular(textoCompleto)) {
            totalCondiciones++;
            caso.condicionesNoModeladas.push({ nombre: 'CUENTA_UN_SOLO_TITULAR', tabla: 'CUENTAS' });
        }
        if (detectSaldoMayorQue(textoCompleto, 1000)) {
            totalCondiciones++;
            // Consideramos este detector como relacionado a DV01/KC11
            caso.condicionesNoModeladas.push({ nombre: 'CUENTAS.SALDO_MAYOR_1000', tabla: 'DV01' });
        }
    } catch (e) {
        // no bloquear en caso de error en heurísticos
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

// --- Heurísticos adicionales (portados desde detector_core.py, versión JS)
function detectTestCapacidadFinanciera(text) {
    const s = text.toLowerCase();
    const patterns = [
        /test de capacidad/, /capacidad financiera/, /test de capacidad financiera/, /\bcf\b/, /test cf\b/, /test:\s*cf/,
    ];
    return patterns.some(rx => rx.test(s));
}

function detectTestConveniencia(text) {
    const s = text.toLowerCase();
    const patterns = [
        /test de conveniencia/, /conveniencia/, /test de conveniencia:/, /\btc\b/, /test tc/, /no conveniente/, /conveniente/
    ];
    return patterns.some(rx => rx.test(s));
}

function detectUnSoloTitular(text) {
    const s = text.toLowerCase();
    const patterns = [
        /unico titular/, /titular unico/, /solo titular/, /único titular/, /titular:\s*único/, /titular\s+único/, /titular:\s*1\b/
    ];
    if (patterns.some(rx => rx.test(s))) return true;
    const m = s.match(/titulares?:([\s\S]{0,200})/);
    if (m) {
        const seg = m[1];
        const parts = seg.split(/[\n,;]+/).map(p => p.trim()).filter(Boolean);
        if (parts.length > 0 && parts.length <= 1) return true;
    }
    return false;
}

function detectSaldoMayorQue(text, amount = 1000) {
    const s = text.toLowerCase();
    // patrones directos: saldo > 1000, saldo mayor que 1000, >1000
    const direct1 = new RegExp(`saldo\\s*[>≥>=]\\s*${amount}`);
    const direct2 = new RegExp(`saldo\\s*(mayor|superior)\\s*(que|a)\\s*${amount}`);
    const direct3 = new RegExp(`>\\s*${amount}\\b`);
    if (direct1.test(s) || direct2.test(s) || direct3.test(s)) return true;

    // buscar número cerca de la palabra 'saldo'
    const m = text.match(/saldo[\\s:\-]{0,6}([0-9\\.,€ ]{1,20})/i);
    if (m) {
        const n = m[1].replace(/[^0-9]/g, '');
        const num = parseInt(n || '0', 10);
        if (!isNaN(num) && num >= amount) return true;
    }
    return false;
}

// Exportar
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { analizarCaso };
}
