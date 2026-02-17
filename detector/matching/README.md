# Detector — Matching Engine

Resumen técnico y uso rápido del motor de matching.

Contenido
- `matching_engine.js`: implementa `analizarCaso(caso)` que detecta condiciones modeladas y heurísticas.
- `condiciones_icaria.js`: catálogo de condiciones modeladas y `CONDICIONES_NO_MODELADAS`.
- `run_analysis.js`: orquesta parsing y análisis de varios casos.
- `generate_report.js`: genera `reports/report-latest.{json,md}`.

Heurísticos incluidos
- Test de Capacidad Financiera (CF)
- Test de Conveniencia (TC)
- Detectar cuenta con un solo titular
- Detectar menciones de saldo >= 1000 (heurística)

Cómo probar localmente

1. Levanta el servidor de análisis (opcional, para usar el UI):

```powershell
node analyze_server.js
```

2. Ejecuta análisis off-line sobre casos (ejemplo):

```powershell
node generate_report.js
```

3. Ejecuta `run_analysis` desde Node para parsear un archivo de `casos/` y ver el JSON de salida.

Consideraciones y próximos pasos
- Normalización: mejorar tokenización y quitar stopwords para reducir falsos positivos.
- Fuzzy matching: ajustar umbral y usar librería para coincidencias más robustas.
- Promoción de heurísticos frecuentes: crear un job que proponga condiciones no modeladas para incorporarlas al catálogo.

Archivo de memoria
- `detector/matching/memory/` contiene `cases.json`, `condiciones_counts.json`, `estimator_report.json`.

Si quieres que automatice pruebas unitarias para `analizarCaso`, dime y genero tests Mocha/Jest.
