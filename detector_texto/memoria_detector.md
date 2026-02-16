## Memoria del Módulo: Detector de Texto

### Descripción

Módulo para análisis automático, detección y procesamiento de texto en documentos o mensajes del banco. Proporciona APIs y utilidades para extraer palabras clave, clasificar riesgo y generar alertas.

### Carpeta

`detector_texto/`

### Integración

- El agente ICARIA puede solicitar validaciones de texto; el detector responde con clasificación, alertas o extracción de información.
- Integrable por llamada a script, función o microservicio.

### Reglas y criterios

- Definir lista de `keywords` críticos y umbrales de coincidencia.
- Clasificación básica: `ok`, `warning`, `alert` según conteo/presencia de términos.

### Tests y QA

- Tests unitarios en `detector_texto/tests/`.
- Casos de aceptación en `detector_texto/tests/casos_acceptance.md` (si procede).

### Historial de cambios y decisiones

- Mantener registros de cambios y versiones en este archivo con fecha y responsable.
