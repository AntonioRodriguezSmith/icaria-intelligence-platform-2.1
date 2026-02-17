# Resumen: Casos y KPIs

Este documento contiene un listado de todos los casos detectados en el repo con el formato solicitado y una sección de KPIs recomendados (completos) para seguimiento.

---

## 1) Casos (formato resumen)

├─ Caso CT-001: Detectar palabra clave simple
├─ ✅ Condiciones modeladas: ["fraude"]
├─ ❌ Condiciones no modeladas: []
├─ ⚠️ Condiciones parciales: []
├─ Cobertura: 100%
└─ Estado: ✅

├─ Caso CT-002: Detección insensible a mayúsculas
├─ ✅ Condiciones modeladas: ["riesgo"]
├─ ❌ Condiciones no modeladas: []
├─ ⚠️ Condiciones parciales: []
├─ Cobertura: 100%
└─ Estado: ✅

├─ Caso CT-003: Texto sin keywords
├─ ✅ Condiciones modeladas: []
├─ ❌ Condiciones no modeladas: []
├─ ⚠️ Condiciones parciales: []
├─ Cobertura: 100% (caso de control)
└─ Estado: ✅

├─ Caso CT-004: Palabras con acentos y variantes
├─ ✅ Condiciones modeladas: []
├─ ❌ Condiciones no modeladas: [normalización de acentos]
├─ ⚠️ Condiciones parciales: [matching por token]
├─ Cobertura: 40%
└─ Estado: ⚠️

├─ Caso CT-005: Overlapping y substrings
├─ ✅ Condiciones modeladas: []
├─ ❌ Condiciones no modeladas: [política de tokenización / substrings]
├─ ⚠️ Condiciones parciales: [detección basada en substrings]
├─ Cobertura: 30%
└─ Estado: ⚠️

├─ Caso CT-006: Integración API del agente
├─ ✅ Condiciones modeladas: [endpoint API, logging]
├─ ❌ Condiciones no modeladas: []
├─ ⚠️ Condiciones parciales: [auditoria en memoria]
├─ Cobertura: 80%
└─ Estado: ✅

├─ Caso CS-001: Saludo simple
├─ ✅ Condiciones modeladas: []
├─ ❌ Condiciones no modeladas: [N/A — caso conversacional]
├─ ⚠️ Condiciones parciales: []
├─ Cobertura: 0%
└─ Estado: ✅ (no aplica)

├─ Caso CS-002: Consulta KPI
├─ ✅ Condiciones modeladas: []
├─ ❌ Condiciones no modeladas: [acceso a KPIs en runtime]
├─ ⚠️ Condiciones parciales: [respuestas estáticas]
├─ Cobertura: 20%
└─ Estado: ⚠️

├─ Caso AV-001: Proceso multi-step
├─ ✅ Condiciones modeladas: [reglas básicas]
├─ ❌ Condiciones no modeladas: [gestión de transacciones compuestas]
├─ ⚠️ Condiciones parciales: [persistencia parcial en memoria]
├─ Cobertura: 35%
└─ Estado: ⚠️

├─ Caso AV-002: Reconciliación de datos
├─ ✅ Condiciones modeladas: []
├─ ❌ Condiciones no modeladas: [reglas de reconciliación completas]
├─ ⚠️ Condiciones parciales: []
├─ Cobertura: 10%
└─ Estado: ❌

---

> Nota: Los valores de cobertura y los listados de condiciones modeladas/no modeladas son estimaciones iniciales. Se recomienda ejecutar una auditoría automática que compare `condiciones/condiciones.yml` (o el catálogo de condiciones) contra los triggers/casos detectados para obtener métricas exactas.

## 2) KPIs completos (recomendados)

Listado de KPIs clave para medir el estado del detector y la cobertura de condiciones.

- KPI 1 — Cobertura de Condiciones (%)
  - Definición: (Número de condiciones modeladas y aplicadas en los casos) / (Total condiciones identificadas en catálogo) * 100
  - Objetivo: >= 90% (largo plazo)
  - Fuente: `condiciones/condiciones.yml` vs. matriz de casos

- KPI 2 — Precisión de Detección (%)
  - Definición: TP / (TP + FP) * 100
  - Objetivo: >= 95%
  - Fuente: dataset anotado (evaluación periódica)

- KPI 3 — Recall (Sensibilidad) (%)
  - Definición: TP / (TP + FN) * 100
  - Objetivo: >= 90%

- KPI 4 — Tiempo Medio de Detección (ms)
  - Definición: latencia promedio desde recepción del texto hasta respuesta del detector
  - Objetivo: < 200 ms

- KPI 5 — Casos automatizados (%)
  - Definición: número de casos que no requieren intervención manual / total casos * 100
  - Objetivo: >= 75%

- KPI 6 — Tasa de Falsos Positivos (FP rate)
  - Definición: FP / (FP + TN)
  - Objetivo: <= 2%

- KPI 7 — Impacto en roadmap (puntos)
  - Definición: suma del impacto estimado de condiciones faltantes (puntos) — sirve para priorizar

### Cómo recoger estos KPIs

- Automatizar extracción de logs y resultados del detector en un job diario.
- Mantener un dataset anotado para evaluación offline (TP/FP/FN/TN).
- Construir una dashboard (Grafana / PowerBI) con las métricas clave y alertas cuando alguno de los KPIs cae por debajo del objetivo.

---

Si quieres, puedo:
- generar automáticamente la matriz de cobertura comparando `condiciones/condiciones.yml` con ejemplos de `detector_texto/tests`,
- o transformar este resumen en un fichero YAML/JSON para integración con la UI.
