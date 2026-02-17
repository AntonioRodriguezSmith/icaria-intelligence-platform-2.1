/**
 * PASO 5: EJECUCIÓN COMPLETA
 * Runner que orquesta parseo, matching y cálculo de estadísticas
 */

let parsearCasosBroker = null;
let analizarCaso = null;
let formatearCaso = null;

try {
    const p = require('./parsearCasosBroker');
    parsearCasosBroker = p.parsearCasosBroker || p.default || p;
} catch (e) {
    parsearCasosBroker = (globalThis && globalThis.parsearCasosBroker) || null;
}

try {
    const m = require('./matching_engine');
    analizarCaso = m.analizarCaso || m.default || m;
} catch (e) {
    analizarCaso = (globalThis && globalThis.analizarCaso) || null;
}

try {
    const f = require('./format_results');
    formatearCaso = f.formatearCaso || f.default || f;
} catch (e) {
    formatearCaso = (globalThis && globalThis.formatearCaso) || null;
}

function ejecutarAnalisis(contenidoCasos) {
    if (!parsearCasosBroker) throw new Error('parsearCasosBroker no disponible');
    if (!analizarCaso) throw new Error('analizarCaso no disponible');

    // 1. Parsear casos
    const casos = parsearCasosBroker(contenidoCasos);

    // 2. Analizar cada caso
    casos.forEach(caso => analizarCaso(caso));

    // 3. Calcular estadísticas globales
    const total = casos.length;
    const conDatosArr = casos.filter(c => c.acciones !== null);
    const conDatos = conDatosArr.length;
    const sinDatos = casos.filter(c => c.acciones === null).length;
    const coberturaProm = conDatos > 0 ? Math.round(
        conDatosArr.reduce((sum, c) => sum + (c.cobertura || 0), 0) / conDatos
    ) : 0;

    const stats = {
        total: total,
        conDatos: conDatos,
        sinDatos: sinDatos,
        coberturaProm: coberturaProm,
        modeladas: casos.filter(c => c.estado === '✅ MODELADA').length,
        parciales: casos.filter(c => c.estado === '⚠️ PARCIAL').length,
        noModeladas: casos.filter(c => c.estado === '❌ NO MODELADA').length
    };

    return { casos, stats };
}

// Exportar
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ejecutarAnalisis };
}
