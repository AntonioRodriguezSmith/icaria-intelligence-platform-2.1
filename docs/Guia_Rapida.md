# Guía Rápida

1. Levantar servicios con Docker Compose:

```bash
docker compose up --build
```

2. Variables útiles (usa `.env`): `AGENT_PORT`, `MCP_PORT`, `AGENT_CONFIG`.

3. Rutas montadas dentro del contenedor del agente:
- `/app/agents` - código del agente
- `/app/docs` - documentos y memoria
- `/app/reglas` - reglas de decisión
- `/app/casos` - casos de prueba y ejemplos
