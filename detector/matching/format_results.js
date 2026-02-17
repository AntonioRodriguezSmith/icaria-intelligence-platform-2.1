/**
 * PASO 4: FORMATEO DE RESULTADOS
 * Genera el formato de salida estándar para un caso
 */

function formatearCaso(caso) {
    let resultado = `**Caso ${caso.numero}:**\n\n`;
    
    // Condiciones modeladas
    if ((caso.condicionesModeladas || []).length > 0) {
        caso.condicionesModeladas.forEach(cond => {
            const param = cond.parametro ? ` = ${cond.parametro}` : '';
            resultado += `✅ ${cond.nombre}${param} - \`${cond.codigo}\`\n`;
        });
    }
    
    // Condiciones no modeladas
    if ((caso.condicionesNoModeladas || []).length > 0) {
        caso.condicionesNoModeladas.forEach(cond => {
            resultado += `❌ ${cond.nombre}\n`;
        });
    }
    
    // Métricas
    const total = (caso.condicionesModeladas || []).length + (caso.condicionesNoModeladas || []).length;
    resultado += `\n**Cobertura: ${caso.cobertura}% (${(caso.condicionesModeladas||[]).length}/${total} condiciones modeladas)**\n`;
    resultado += `**Estado: ${caso.estado}**\n\n`;
    resultado += `---\n\n`;
    
    return resultado;
}

// Exportar
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { formatearCaso };
}
