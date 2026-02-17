# ICARIA Intelligence Platform

![Docker](https://img.shields.io/badge/docker-ready-blue)
![Copilot Spaces](https://img.shields.io/badge/github%20copilot-spaces-brightgreen)
![QA](https://img.shields.io/badge/checklist-pass-success)
![License](https://img.shields.io/badge/license-private-important)

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
```

---

## 🔎 Documentación principal

- [Memoria y normas operativas](docs/MEMORIA_AGENTE_ICARIA.md)
- [Guía rápida](docs/Guia_Rapida.md)
- [Checklist onboarding y calidad](docs/checklist-equipo.md)
- [Historial de decisiones y chat](docs/memoria_chat.md)

---

## ⚡ Onboarding para el equipo

1. **Clona el repo:**
	```bash
	git clone https://github.com/AntonioRodriguezSmith/icaria_intelligence_platform_1.2.git
	cd icaria_intelligence_platform_1.2
	```
2. **Instala Docker Desktop** y asegúrate de que está activo.
3. **Levanta los servicios:**
	```bash
	docker-compose up -d
	```
4. **Consulta la guía rápida y la memoria central** en `/docs`.
5. **Registra tus decisiones y contribuciones** en la memoria y el chat.
6. **Revisa el checklist-equipo** antes de cada entrega o validación.

---

## 🧪 Validación y testeo con Postman

- Endpoints del MCP Server documentados en `docs/Guia_Rapida.md`
- Importa la colección desde `/docs` o crea una nueva:
	 - URL base: `http://localhost:8080`
	 - Ejemplo de endpoint: `/api/validate`
	 - Prueba operaciones de validación y consulta.

---

	## 🧾 Tablas vs Condiciones (importante)

	Distinción operativa dentro del detector:

	- **Tablas de infraestructura**: son fuentes/almacenamiento y NO deben tratarse como condiciones de negocio. Ejemplos: `KC11`, `DV01`, `Q48`, `VA37`, `PE1601`.
	- **Condiciones de negocio**: son reglas que consultan o verifican datos contenidos en esas tablas. Ejemplos:
		- `SALDO_DV01 > X` → consulta `DV01` para verificar saldo
		- `TIENE_POSICIONES_Q48 >= N` → cuenta posiciones en `Q48`
		- `TIPO_MOVIMIENTO_VA37 = X` → filtra por tipo en `VA37`
		- `CANTIDAD_TITULARES = N` → cuenta titulares en `PE1601`

	Mantén esta distinción cuando modeles condiciones en `detector/matching/condiciones_icaria.js`.

	---

	## 📊 Generar informe de gaps (priorización)

	Para generar el informe que lista las condiciones no modeladas por frecuencia (priorización):

	```bash
	node detector/matching/generate_report.js
	```

	Salida:
	- `reports/report-latest.md` — informe en Markdown
	- `reports/report-latest.json` — informe estructurado (KPIs, condiciones no modeladas)

	Revisa `detector/matching/condiciones_icaria.js` si necesitas actualizar el diccionario de condiciones no modeladas.


## 🔀 CI/CD & GitHub Actions

- Automatización de test, backups y releases gestionada en GitHub Actions.
- Revisa o adapta el workflow en `.github/workflows/`.
- Cada push valida la estructura y la documentación con scripts de auditoría.

---

## 👥 Equipo

- **Coordinador:** AntonioRodriguezSmith
- **Colaboradores:** DXC-TDM, Banco Sabadell
- **Responsable de Agente:** Documentado en memoria

---

## 📝 Calidad y auditoría

- Documenta decisiones y cambios en `docs/MEMORIA_AGENTE_ICARIA.md` y `docs/memoria_chat.md`.
- Revisa el checklist antes de cada entrega.

---

## 🛠️ Soporte

Consulta la memoria central, habla con el coordinador, o revisa el historial en el chat.

---

## 🏛️ Legal y normativo

- Este proyecto es propiedad de Banco Sabadell y DXC-TDM.
- Uso privado, auditado y normativo.
- Cumplimiento RGPD, LOPD y regulaciones bancarias vigentes.
- Las reglas y casos de negocio deben cumplir la normativa interna y externa.

---

## ✍️ Ejemplo de primer Pull Request

1. **Crea una rama con tu feature o mejora**:
	```bash
	git checkout -b mejora/nueva-regla-KPI
	```
2. **Agrega o modifica archivos** en `reglas/`, `casos/` o `docs/MEMORIA_AGENTE_ICARIA.md`.
3. **Haz commit y push**:
	```bash
	git add .
	git commit -m "Nueva regla KPI para validación de saldos"
	git push origin mejora/nueva-regla-KPI
	```
4. **Abre un Pull Request en GitHub** seleccionando tu rama.
5. **Detalla tu aportación, regla o caso en la descripción del PR**.
6. **Solicita review al responsable/QA y espera feedback**.

---

## 🧠 Recuerda

- **Para cualquier operación, consulta siempre [`docs/MEMORIA_AGENTE_ICARIA.md`](docs/MEMORIA_AGENTE_ICARIA.md).**
- La memoria central es la fuente de verdad operativa, técnica y normativa.

---

**Para cualquier operación, consulta siempre [`docs/MEMORIA_AGENTE_ICARIA.md`](docs/MEMORIA_AGENTE_ICARIA.md).**

# ICARIA Intelligence Platform

Espacio colaborativo con memoria persistente y agente IA en GitHub Copilot Space, para la gestión, auditoría y validación de condiciones de negocio, casos, KPIs y normativas en Banco Sabadell.  
Este proyecto integra Agent Copilot, estructura documental robusta y controles de calidad para todo el equipo.

---

## 🚀 ¿Qué es ICARIA?

ICARIA es un ecosistema digital para analizar y validar operaciones, riesgos y cumplimiento normativo del banco, con:
- Agente IA persistente conectado al Space.
- Memoria centralizada (auditoría y trazabilidad).
- Infraestructura Docker.
- Reglas, KPIs y casos colaborativos.

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
