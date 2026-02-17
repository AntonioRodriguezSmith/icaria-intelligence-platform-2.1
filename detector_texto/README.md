# ICARIA Intelligence Platform

![Docker](https://img.shields.io/badge/docker-ready-blue)
![Copilot Spaces](https://img.shields.io/badge/github%20copilot-spaces-brightgreen)
![QA](https://img.shields.io/badge/checklist-pass-success)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](../LICENSE)

---

Espacio colaborativo en GitHub Copilot Space, con memoria persistente y agente IA para la validación, auditoría y gestión de condiciones de negocio, casos, KPIs y normativas de Banco Sabadell.  
ICARIA integra un agente Copilot, estructura documental robusta y controles de calidad para todo el equipo.

---

## 🚀 ¿Qué es ICARIA?

Plataforma digital para analizar y validar operaciones, riesgos y cumplimiento normativo, con:
- Agente IA persistente en Copilot Space
- Memoria centralizada y auditable
- Infraestructura Docker para ejecución distribuida
- Reglas, KPIs y casos colaborativos

---

## 📂 Estructura del proyecto

```
/
├── docker-compose.yml           # Orquestación y levantamiento de servicios
├── agents/                     # Configuración avanzada del agente
│   └── icaria-agent-config.yaml
├── docs/                       # Memoria central, guías, historial y checklist
│   ├── MEMORIA_AGENTE_ICARIA.md
│   ├── Guia_Rapida.md
│   ├── checklist-equipo.md
│   └── memoria_chat.md
├── reglas/                     # Reglas y KPIs normativos
│   ├── kpis.md
│   ├── condiciones.md
│   └── ejemplos_validacion.md
├── casos/                      # Casos de negocio y test de validación
│   ├── casos_simplificados.md
│   ├── casos_avanzados.md
│   └── casos_test.md
└── .env                        # Configuración de entorno
# Detector de Texto – ICARIA Intelligence Platform

Este módulo permite analizar, detectar y procesar automáticamente texto relevante en documentos, mensajes o registros del banco.

## Funcionalidad

- Detección automática de palabras clave, riesgos o anomalías.
- Integrable con el agente ICARIA y con otros módulos.
- Auditado y documentado conforme a la memoria central.

## Documentación

- Reglas operativas: `memoria_detector.md`
- Casos de test y ejemplos: `tests/`
- Resultados y logs: `logs/` (opcional)

## Integración

- El agente ICARIA puede llamar a este módulo vía API, script o servicio interno.
- Toda evolución se audita también en la memoria central de ICARIA.

## Contacto

- Responsable: [tu nombre o grupo]

## 🧪 Cómo ejecutar los tests (rápido)

Windows (PowerShell):

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
pip install pytest
pytest detector_texto/tests -q
```

Linux/macOS:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
pip install pytest
pytest detector_texto/tests -q
```

---

## Próximos pasos sugeridos

- Clonar y revisar el repositorio externo proporcionado en la conversación.
- Ejecutar los tests locales y confirmar resultados.
- Integrar o documentar diferencias relevantes entre ambos repositorios.

