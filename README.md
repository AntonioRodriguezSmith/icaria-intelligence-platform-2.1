# ICARIA Intelligence Platform

Plataforma para análisis y validación de casos, condiciones y KPIs. Este README cubre cómo ejecutar los componentes clave para desarrollo local y pruebas rápidas.

## Comandos rápidos

- Levantar servicios (Docker):

```powershell
docker compose up --build -d
```

- Iniciar servidor de análisis local (Node):

```powershell
node detector/matching/analyze_server.js
```

- Generar informe de gaps (local):

```powershell
node detector/matching/generate_report.js
```

- Ejecutar estimador de roadmap:

```powershell
node detector/tools/estimator.js
```

## Endpoint `/analyze` (uso rápido)

- POST JSON: `{ "text": "<texto del caso>" }` a `http://localhost:3000/analyze`
- Si `API_TOKEN` está configurado, enviar `Authorization: Bearer <token>`.
- Resultado: JSON con `stats`, `casos` y `memory_counts` guardados en `detector/matching/memory/` y `reports/report-latest-from-api.json`.

## Dónde mirar código clave

- Motor de matching: `detector/matching/matching_engine.js` (contiene heurísticos y detecciones)
- Catálogo de condiciones: `detector/matching/condiciones_icaria.js`
- Server API: `detector/matching/analyze_server.js`
- Generador de reportes: `detector/matching/generate_report.js`
- Memoria persistente: `detector/matching/memory/`

## Notas rápidas

- Heurísticos portados desde Python para detección rápida: Test CF, Test TC, cuenta un solo titular, saldo >= 1000€.
- Mantener la distinción entre tablas (datos) y condiciones (reglas que consultan tablas).

Para más detalles técnicos y uso avanzado consultad `detector/matching/README.md` y `docs/USAGE_QUICK.md`.
