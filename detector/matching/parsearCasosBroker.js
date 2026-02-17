/**
 * ═══════════════════════════════════════════════════════════════════════════
 * MOTOR DE MATCHING - Parser de Casos
 * PARSEO DE CASOS (Paso 1)
 * Archivo: detector/matching/parsearCasosBroker.js
 *
 * Esta función extrae bloques de casos desde un Markdown con separadores
 * estilo `--- CASO N` y devuelve un array con el número de caso y acciones
 * encontradas. Está pensada como referencia para el motor de matching.
 *
 */

function parsearCasosBroker(contenidoMD) {
    const casos = [];
    // Separador: --- CASO <n>
    const bloquesCasos = contenidoMD.split(/---\s*CASO\s+(\d+)/);
    
    for (let i = 1; i < bloquesCasos.length; i += 2) {
        const numeroCaso = parseInt(bloquesCasos[i], 10);
        const contenido = bloquesCasos[i + 1] || '';
        
        // Extraer acciones bajo el encabezado "ACCIONES EN ICARIA:"
        const accionesMatch = contenido.match(/ACCIONES EN ICARIA:([\s\S]*?)(?=---|\n\nCASO|$)/);
        let acciones = [];
        
        if (accionesMatch) {
            const textoAcciones = accionesMatch[1];
            
            // Detectar ausencia explícita de acciones
            if (textoAcciones.includes('[Sin acciones especificadas]') || 
                textoAcciones.includes('No existe usuario')) {
                acciones = null;
            } else {
                // Extraer líneas numeradas 1. Acción
                const lineasAcciones = textoAcciones.match(/^\s*\d+\.\s+(.+?)$/gm);
                if (lineasAcciones) {
                    acciones = lineasAcciones.map(linea => 
                        linea.replace(/^\s*\d+\.\s+/, '').trim()
                    );
                }
            }
        } else {
            // No existe la sección, marcar como no especificado
            acciones = null;
        }
        
        casos.push({
            numero: numeroCaso,
            acciones: acciones,
            condicionesModeladas: [],
            condicionesNoModeladas: [],
            cobertura: 0,
            estado: ''
        });
    }
    
    return casos;
}

// Exportar para uso desde Node.js o bundlers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { parsearCasosBroker };
}
