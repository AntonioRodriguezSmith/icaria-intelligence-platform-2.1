const http = require('http');
const fs = require('fs');
const path = require('path');

const { ejecutarAnalisis } = require('./run_analysis');

const PORT = process.env.PORT || 3000;
const API_TOKEN = process.env.API_TOKEN || null; // if set, require Authorization: Bearer <token>
const MEM_DIR = path.join(__dirname, 'memory');
const CASES_FILE = path.join(MEM_DIR, 'cases.json');
const COUNTS_FILE = path.join(MEM_DIR, 'condiciones_counts.json');

function ensureMemory() {
    if (!fs.existsSync(MEM_DIR)) fs.mkdirSync(MEM_DIR, { recursive: true });
    if (!fs.existsSync(CASES_FILE)) fs.writeFileSync(CASES_FILE, '[]', 'utf8');
    if (!fs.existsSync(COUNTS_FILE)) fs.writeFileSync(COUNTS_FILE, '{}', 'utf8');
}

function loadJSON(file) {
    try {
        return JSON.parse(fs.readFileSync(file, 'utf8') || '{}');
    } catch (e) {
        return typeof file === 'string' ? {} : [];
    }
}

function saveJSON(file, obj) {
    fs.writeFileSync(file, JSON.stringify(obj, null, 2), 'utf8');
}

ensureMemory();

const server = http.createServer(async (req, res) => {
    if (req.method === 'POST' && req.url === '/analyze') {
        // If API_TOKEN is configured, enforce Bearer token in Authorization header
        if (API_TOKEN) {
            const auth = req.headers['authorization'] || req.headers['Authorization'];
            if (!auth || !auth.startsWith('Bearer ')) {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Missing Authorization header. Use: Authorization: Bearer <token>' }));
                return;
            }
            const token = auth.split(' ')[1].trim();
            if (token !== API_TOKEN) {
                res.writeHead(403, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid API token' }));
                return;
            }
        }
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            let payload = null;
            try {
                payload = JSON.parse(body);
            } catch (e) {
                // treat body as raw text
                payload = { text: body };
            }

            const text = (payload && payload.text) ? String(payload.text).trim() : '';
            if (!text) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'No content provided. Send JSON {"text":"..."} or text/plain body.' }));
                return;
            }

            // Wrap single case into expected Markdown format
            const md = `--- CASO 1\nACCIONES EN ICARIA:\n1. ${text}\n`;

            let result;
            try {
                result = ejecutarAnalisis(md);
            } catch (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: String(err) }));
                return;
            }

            // Persist incoming case and update counts for no modeladas
            try {
                const cases = loadJSON(CASES_FILE);
                const counts = loadJSON(COUNTS_FILE);

                const entry = {
                    id: payload.id || (`case_${Date.now()}`),
                    text: text,
                    stats: result.stats,
                    condicionesNoModeladas: result.casos && result.casos[0] ? result.casos[0].condicionesNoModeladas : [],
                    timestamp: new Date().toISOString()
                };

                cases.push(entry);
                saveJSON(CASES_FILE, cases);

                // update counts
                (entry.condicionesNoModeladas || []).forEach(c => {
                    const key = c.nombre || c.tabla || 'unknown';
                    counts[key] = (counts[key] || 0) + 1;
                });
                saveJSON(COUNTS_FILE, counts);

                // Also write a compact report combining stats + counts
                const report = {
                    generated_at: new Date().toISOString(),
                    stats: result.stats,
                    casos: result.casos,
                    memory_counts: counts
                };
                const reportsDir = path.join(__dirname, '..', 'reports');
                if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
                fs.writeFileSync(path.join(reportsDir, 'report-latest-from-api.json'), JSON.stringify(report, null, 2), 'utf8');

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(report));
            } catch (e) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Failed to persist memory', detail: String(e) }));
            }
        });
        return;
    }

    // simple health
    if (req.method === 'GET' && req.url === '/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'ok', service: 'analyze-server' }));
        return;
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'not found' }));
});

server.listen(PORT, () => {
    console.log(`Analyze server listening on http://localhost:${PORT}`);
});
