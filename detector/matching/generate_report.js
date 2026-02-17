/**
 * Genera informe completo: ejecuta el análisis sobre `casos/*.md`,
 * guarda `reports/report-latest.json` y `reports/report-latest.md`.
 * Incluye sección "condiciones no modeladas por frecuencia (priorización)" (todas).
 */

const fs = require('fs');
const path = require('path');
const run = require('./run_analysis');
const format = require('./format_results');

function readAllCasos() {
    const casosDir = path.join(__dirname, '..', '..', 'casos');
    const files = fs.readdirSync(casosDir).filter(f => f.endsWith('.md'));
    let contenido = '';
    files.forEach(f => {
        const c = fs.readFileSync(path.join(casosDir, f), 'utf8');
        contenido += '\n' + c + '\n';
    });
    return contenido;
}

function aggregateNoModeladas(casos) {
    const freq = {}; // key -> { nombre, tabla, count }
    casos.forEach(c => {
        (c.condicionesNoModeladas || []).forEach(cond => {
            const key = cond.nombre || JSON.stringify(cond);
            if (!freq[key]) freq[key] = { nombre: cond.nombre || key, tabla: cond.tabla || null, count: 0 };
            freq[key].count += 1;
        });
    });
    // Convert to array sorted by frequency desc
    return Object.values(freq).sort((a,b) => b.count - a.count);
}

function generate() {
    const contenido = readAllCasos();
    const result = run.ejecutarAnalisis(contenido);
    const casos = result.casos;
    const stats = result.stats;

    const noModeladasFreq = aggregateNoModeladas(casos);

    // Ensure reports dir
    const reportsDir = path.join(__dirname, '..', '..', 'reports');
    if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir);

    const outJson = { generatedAt: new Date().toISOString(), stats, casos, noModeladasFreq };
    fs.writeFileSync(path.join(reportsDir, 'report-latest.json'), JSON.stringify(outJson, null, 2), 'utf8');

    // Markdown report
    let md = `# Informe: Análisis de Casos\n\n`;
    md += `**Generado:** ${new Date().toISOString()}\n\n`;
    md += `## Estadísticas\n\n`;
    md += `- Total casos: ${stats.total}\n`;
    md += `- Con datos: ${stats.conDatos}\n`;
    md += `- Sin datos: ${stats.sinDatos}\n`;
    md += `- Cobertura promedio: ${stats.coberturaProm}%\n`;
    md += `- Modeladas: ${stats.modeladas}\n`;
    md += `- Parciales: ${stats.parciales}\n`;
    md += `- No modeladas: ${stats.noModeladas}\n\n`;

    md += `## Condiciones no modeladas por frecuencia (priorización)\n\n`;
    if (noModeladasFreq.length === 0) {
        md += '_No se detectaron condiciones no modeladas._\n\n';
    } else {
        noModeladasFreq.forEach(item => {
            md += `- **${item.nombre}** (tabla: ${item.tabla || 'N/A'}) — ${item.count} apariciones\n`;
        });
        md += '\n';
    }

    md += `## Casos (detallado)\n\n`;
    casos.forEach(c => {
        md += format.formatearCaso(c);
    });

    fs.writeFileSync(path.join(reportsDir, 'report-latest.md'), md, 'utf8');

    return outJson;
}

if (require.main === module) {
    const r = generate();
    console.log('Report generated:', Object.keys(r).length ? 'ok' : 'empty');
}

module.exports = { generate };
