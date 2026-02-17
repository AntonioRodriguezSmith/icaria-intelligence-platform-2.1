/**
 * Estimador de horas para cierre de gaps
 * - Base: 8h por condición
 * - Descuentos por batching: 1->0%, 2-3->10%, 4-6->15%, >=7->20%
 * - Multiplicador por fase (cubre integración/QA/documentación):
 *   - critical/high/medium -> x3
 *   - low -> x2
 *
 * Genera salida en JSON y actualiza `docs/roadmap_gaps.md` y `detector/matching/memory/estimator_report.json`
 */

const fs = require('fs');
const path = require('path');

const BASE_HOURS_PER_CONDITION = 8;

function batchingDiscount(n) {
    if (n <= 1) return 0.0;
    if (n <= 3) return 0.10;
    if (n <= 6) return 0.15;
    return 0.20;
}

function phaseMultiplier(phaseKey) {
    // keys: critical, high, medium, low
    if (phaseKey === 'low') return 2;
    return 3; // critical, high, medium
}

// ROADMAP definition (names must match condiciones no modeladas si se desea conectar)
const ROADMAP = [
    {
        key: 'critical',
        title: 'FASE 1: CRÍTICA (Semanas 1-4)',
        conditions: [
            'Test CF',
            'Test TC',
            'Saldo DV01 > X€'
        ]
    },
    {
        key: 'high',
        title: 'FASE 2: ALTA PRIORIDAD (Semanas 5-8)',
        conditions: [
            'Autorizado Banca a Distancia',
            'Perfil de usuario',
            'Cantidad de titulares'
        ]
    },
    {
        key: 'medium',
        title: 'FASE 3: MEDIA PRIORIDAD (Semanas 9-12)',
        conditions: [
            'Tipo de cuenta valores',
            'Múltiples cuentas efectivo',
            'Posiciones ISIN',
            'Posiciones DCHOS'
        ]
    },
    {
        key: 'low',
        title: 'FASE 4+: BAJA PRIORIDAD (Semanas 13+)',
        conditions: [
            'RIC',
            'BSO',
            'Firma indistinta',
            'Otros gaps menores'
        ]
    }
];

function calcPhase(phase) {
    const n = phase.conditions.length;
    const core = n * BASE_HOURS_PER_CONDITION;
    const discount = batchingDiscount(n);
    const discounted = Math.ceil(core * (1 - discount));
    const multiplier = phaseMultiplier(phase.key);
    const total = Math.ceil(discounted * multiplier);
    return { key: phase.key, title: phase.title, conditions: phase.conditions, count: n, core_hours: core, discount_pct: discount, discounted_hours: discounted, multiplier, total_hours: total };
}

function generate() {
    const phases = ROADMAP.map(calcPhase);
    const totals = phases.reduce((acc, p) => {
        acc.count += p.count;
        acc.core_hours += p.core_hours;
        acc.discounted_hours += p.discounted_hours;
        acc.total_hours += p.total_hours;
        return acc;
    }, { count: 0, core_hours: 0, discounted_hours: 0, total_hours: 0 });

    const report = { generated_at: new Date().toISOString(), phases, totals };

    // Ensure memory dir
    const memDir = path.join(__dirname, '..', 'matching', 'memory');
    if (!fs.existsSync(memDir)) fs.mkdirSync(memDir, { recursive: true });
    fs.writeFileSync(path.join(memDir, 'estimator_report.json'), JSON.stringify(report, null, 2), 'utf8');

    // Write docs/roadmap_gaps.md
    const docsPath = path.join(__dirname, '..', '..', 'docs', 'roadmap_gaps.md');
    let md = `# Roadmap de Cierre de Gaps — Estimación de Horas\n\n`;
    md += `Generado: ${report.generated_at}\n\n`;
    phases.forEach(p => {
        md += `## ${p.title}\n`;
        md += `- Condiciones: ${p.count}\n`;
        md += `- Lista: ${p.conditions.join(', ')}\n`;
        md += `- Horas base: ${p.core_hours}h\n`;
        md += `- Descuento por batching: ${Math.round(p.discount_pct*100)}% → ${p.discounted_hours}h\n`;
        md += `- Multiplicador (integración/QA): x${p.multiplier} → Total fase: ${p.total_hours}h\n\n`;
    });

    md += `### Totales\n`;
    md += `- Condiciones totales: ${totals.count}\n`;
    md += `- Horas base totales: ${totals.core_hours}h\n`;
    md += `- Horas tras descuentos: ${totals.discounted_hours}h\n`;
    md += `- Horas estimadas (con multiplicadores): ${totals.total_hours}h\n`;

    fs.writeFileSync(docsPath, md, 'utf8');

    console.log('Estimator: written report to', docsPath);
    return report;
}

if (require.main === module) {
    generate();
}

module.exports = { generate };
