````markdown
# Detector de Texto — ICARIA (módulo)

Módulo responsable de analizar texto, detectar condiciones y producir salidas que alimentan la memoria y los reportes del proyecto.

Resumen rápido:
- API local: `POST http://localhost:3000/analyze` con JSON `{ "text": "..." }`.
- Memoria: `detector/matching/memory/` (casos y contadores).
- Reportes: `reports/report-latest-from-api.json` / `reports/report-latest.md`.

Comandos mínimos (desde la raíz del repo):

```powershell
# Iniciar servidor de análisis
node detector/matching/analyze_server.js

# Generar reportes
node detector/matching/generate_report.js

# Ejecutar tests Python del módulo
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r detector_texto/requirements.txt
pytest detector_texto/tests -q
```

Para información global y guía de uso del proyecto (estructura, quickstart y buenas prácticas), consultar el README raíz.

````
