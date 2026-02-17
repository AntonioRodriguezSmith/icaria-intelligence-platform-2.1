````markdown
# ICARIA Intelligence Platform

Herramienta para analizar, validar y auditar casos, condiciones y KPIs. Este README agrupa la información global necesaria para ejecutar, probar y desarrollar los componentes principales.

## Estado rápido
- Sitio local de análisis: `http://localhost:3000` (API `/analyze`).
- Memoria persistente y reportes en `detector/matching/memory/` y `reports/`.

## Quickstart

- Levantar servicios con Docker (si usas la orquestación):

```powershell
docker compose up --build -d
```

- Ejecutar el servidor de análisis (Node.js):

```powershell
node detector/matching/analyze_server.js
```

- Generar reportes y estimador (local):

```powershell
node detector/matching/generate_report.js
node detector/tools/estimator.js
```

## Uso del endpoint `/analyze`

- POST JSON a `http://localhost:3000/analyze` con el body:

```json
{ "text": "<texto del caso>" }
```

- Autenticación: si está configurada la variable `API_TOKEN`, enviar cabecera `Authorization: Bearer <token>`.
- Respuesta: JSON con `stats`, `casos` y `memory_counts`. El servidor guarda memoria en `detector/matching/memory/` y escribe un `reports/report-latest-from-api.json`.

## Estructura relevante del repositorio

- `detector/matching/` — motor de matching, parser, catálogo y server API.
  - `matching_engine.js` — análisis y heurísticos.
  - `condiciones_icaria.js` — catálogo de condiciones.
  - `analyze_server.js` — servidor HTTP que expone `/analyze`.
  - `generate_report.js` — script para generar reportes human-readable y JSON.
  - `memory/` — persistencia de casos y contadores (no subir a git).
- `detector/tools/estimator.js` — heurística/estimador para priorizar gaps y generar roadmap.
- `docs/` — guías rápidas, mockups y documentación adicional.

## Desarrollo y tests

- Tests Python (módulo detector_texto):

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r detector_texto/requirements.txt
pytest detector_texto/tests -q
```

- Nota: no todos los componentes tienen tests JS automatizados; se recomienda añadir `mocha`/`chai` para heurísticos.

## Buenas prácticas

- Mantener `detector/matching/memory/` fuera del control de versiones (está en `.gitignore`).
- Para producción, reemplazar la persistencia por una base de datos o storage compartido.

## Documentación específica

Consulta la documentación de módulo en `detector/matching/README.md` y la guía rápida de Space en `docs/USAGE_QUICK.md`.

## Contribuir

- Abrir issues para bugs o propuestas.
- Crear pull requests contra `main` con descripción clara y pasos para reproducir.

````
