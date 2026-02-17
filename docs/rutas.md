# Rutas y estructura principal del repositorio (reflejo actual)

Resumen y ubicación de los elementos más relevantes (actualizado automáticamente por revisión manual).

- `/` (raíz): `README.md`, `docker-compose.yml`, `LICENSE`, `.env`, `__init__.py`
- `agents/`: `icaria-agent-config.yaml`
- `docs/`: documentación y guías (ej.: `Guia_Rapida.md`, `MEMORIA_AGENTE_ICARIA.md`, `USAGE_QUICK.md`, `aprendizaje.md`, `rutas.md`, `roadmap_gaps.md`, `quick_wins.md`)
- `detector/`: motor Node y utilidades
  - `detector/matching/`: `analyze_server.js`, `run_analysis.js`, `matching_engine.js`, `generate_report.js`, `condiciones_icaria.js`, `parsearCasosBroker.js`, `format_results.js`, `memory/` (persistencia)
  - `detector/tools/`: `estimator.js`
  - `detector/reports/`: `report-latest-from-api.json`
- `detector_texto/`: prototipo Python (Streamlit/tests)
  - `detector_texto/src/`: `app.py`, `detector.py`, tests en `detector_texto/tests/`
  - `detector_texto/requirements.txt`, `Dockerfile`, `memoria_detector.md`
- `reglas/`: `kpis.md`, `condiciones.md`, `ejemplos_validacion.md`
- `condiciones/`: `CondicionesIcaria.md`, `condiciones.yml`
- `casos/`: `casos_group1.md`, `casos_group2.md`, `casos_simplificados.md`, `casos_avanzados.md`, `casos_test.md`
- `reports/`: `report-latest.md`, `report-latest.json`
- `basura/`: archivos movidos para limpieza (`prototipo-gaps.html`, `detector_sync.patch`, `README.md` explicativo)

Notas y buenas prácticas:
- Mantén `detector/matching/condiciones_icaria.js` y `condiciones/condiciones.yml` sincronizados.
- Los artefactos generados (`reports/`, `detector/matching/memory/`) no deben mezclarse en PRs a menos que se necesite reproducibilidad; añadirlos a `.gitignore` si procede.
- Si mueves archivos, actualiza este `docs/rutas.md` y crea un PR con la descripción del cambio.

Si quieres, puedo generar automáticamente un `tree` más detallado o mover archivos adicionales a `basura/`.
