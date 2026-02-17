# Uso rápido — Space UI y Endpoint `/analyze`

Objetivo: facilitar a un usuario del Copilot Space el envío rápido de un caso y la obtención del informe.

1) Levantar servidor de análisis (desde la raíz del repo):

```powershell
node detector/matching/analyze_server.js
```

2) Enviar caso con `curl` (ejemplo):

```bash
curl -X POST http://localhost:3000/analyze -H "Content-Type: application/json" -d '{"text":"Cliente solicita transferir 1.200€ desde cuenta corriente"}'
```

3) Si hay `API_TOKEN` configurado en el servidor, añade la cabecera:

```bash
-H "Authorization: Bearer <API_TOKEN>"
```

4) Salida esperada
- JSON con `stats` (resumen), `casos` (array con análisis por caso) y `memory_counts` (conteos acumulados).
- También se escribe `reports/report-latest-from-api.json` para inspección rápida.

5) Integración con Copilot Space UI
- La UI en `docs/space_ui/analyze.html` ya consume `/analyze`.
- Desde el Space, el formulario debe hacer POST a `http://<host>:3000/analyze` con `{ text: ... }`.

6) Debug rápido
- Revisar `detector/matching/memory/condiciones_counts.json` para ver qué condiciones no modeladas se han incrementado.
- Revisar `reports/report-latest-from-api.json` para ver el informe combinado.

7) Recomendación
- Para pruebas en equipo, usar una cuenta de servicio con `API_TOKEN` y registrar el token en el Space secrets.

