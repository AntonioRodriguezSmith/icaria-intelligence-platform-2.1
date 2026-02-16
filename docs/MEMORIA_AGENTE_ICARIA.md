
# MEMORIA DEL AGENTE ICARIA

Este documento constituye la base de conocimiento, memoria operativa central y guía normativa del proyecto ICARIA Intelligence Platform, en Copilot Space con agente persistente.

Aquí se recopilan todos los datos, reglas, casos, KPIs, instrucciones, configuraciones, decisiones, flujos de trabajo, código, estructura y procedimientos necesarios para el agente ICARIA. Todo lo indicado es obligatorio.

---

## 1. Propósito y alcance

MEMORIA_AGENTE_ICARIA.md es el archivo central donde:
- Se recopilan todos los conocimientos, reglas de negocio, criterios técnicos y normativos para ICARIA.
- El agente IA de Copilot Space accede a la información, la consulta y la ejecuta.
- Se registran decisiones y evolución técnica, incluyendo preguntas, respuestas, casos de negocio, KPIs, reglas de validación, scripts, automatismos, ejemplos y test unitarios.
- Sirve de auditoría, referente técnico, onboarding, control de calidad y compatibilidad para todo colaborador.

---

## 2. Tecnologías y herramientas obligatorias

- GitHub Copilot Space
- Copilot Agent persistente
- Docker Desktop
- MCP Server
- VS Code (extensiones Copilot, Docker, GitHub Spaces)
- Git (control de versiones)
- Node.js/NPM (scripts de validación)
- Postman (testeo de endpoints MCP)
- GitHub Actions (automatización y backups)

---

## 3. Estructura de carpetas y archivos

```
/
├── docker-compose.yml
├── agents/
│   └── icaria-agent-config.yaml
├── docs/
│   ├── MEMORIA_AGENTE_ICARIA.md
│   ├── Guia_Rapida.md
│   ├── checklist-equipo.md
│   └── memoria_chat.md
├── reglas/
│   ├── kpis.md
│   ├── condiciones.md
│   └── ejemplos_validacion.md
├── casos/
│   ├── casos_simplificados.md
│   ├── casos_avanzados.md
│   └── casos_test.md
└── .env
```

---

## 4. Roles y responsabilidades

- AntonioRodriguezSmith – Coordinador técnico y responsable de la memoria inicial.
- Equipo DXC-TDM / Banco Sabadell – Colaboradores, validadores y auditores técnicos.
- Responsable del Agent – Configuración, actualización y supervisión de la memoria.
- QA y Auditoría – Registro permanente en docs/checklist-equipo.md y memoria_chat.md.

---

## 5. Reglas, KPIs, casos y criterios de validación

### Reglas
- Registradas en reglas/condiciones.md
- Documentadas por lógica, inputs, outputs, criterios de éxito y excepciones.

### KPIs
- Registrados en reglas/kpis.md.
- Cada KPI tiene descripción, métricas y tests.

### Casos de negocio
- Casos normativos en casos/casos_simplificados.md
- Edge cases en casos/casos_avanzados.md
- Casos de test unitarios en casos/casos_test.md

---

## 6. Workflow operativo

1. Clonación del Space/repositorio.
2. Arranque entorno completo:
	```shell
	docker-compose up -d
	```
3. Carga y actualización de archivos de memoria.
4. Validación de configuración (Agent, MCP, VS Code) y variables .env.
5. Registro de preguntas, decisiones, dudas y respuestas, en memoria_chat.md.
6. Onboarding y checklist completos para colaboradores.
7. Revisión continua de MEMORIA_AGENTE_ICARIA.md y checklist-equipo.md.
8. Auditoría y QA semanal/mensual.
9. Actualización por GitHub Actions cuando sea necesario.

---

## 7. Decisiones, preguntas, registros y memoria

- Todas las decisiones operativas deben registrarse, con fecha, autor y contexto.
- Las preguntas y respuestas del chat se documentan en memoria_chat.md.
- Cambios significativos o evoluciones normativas se reflejan aquí y en el checklist.

---

## 8. Instrucciones de actualización y control de calidad

- Actualizar MEMORIA_AGENTE_ICARIA.md tras cada cambio técnico, flujo, caso, KPI, regla o decisión significativa.
- Commit y push tras cada registro.
- Mantener el checklist actualizado.
- Auditar memoria semanalmente y tras cada release.
- Documentar scripts de validación (lógica, inputs/outputs, excepciones).

---

## 9. Normativa final

Este documento es el punto de referencia obligatorio para el funcionamiento, auditoría y evolución del Agente ICARIA. Todo lo aquí contenido es necesario para cualquier colaborador, auditor o responsable.

---

## Última actualización
- [Editar fecha y responsable tras cada sesión]

---

## 10. Módulos integrados

### Detector de texto

- **Descripción:** Módulo para análisis automático, detección y procesamiento de texto en documentos o mensajes del banco.
- **Carpeta:** `detector_texto/`
- **Memoria específica:** `detector_texto/memoria_detector.md`
- **Integración:** El agente ICARIA puede solicitar validaciones de texto; el detector responde con clasificación, alertas o extracción de información.
- **Reglas, casos y QA:** Detallados en la memoria específica del módulo detector.

