# Conectar MCP Server con DevLinker (VS Code)

Pasos rápidos para usar la extensión `DevLinker - MCP Host` desde la ventana Copilot Chat:

1. Abrir la ventana de Copilot Chat en VS Code.
2. Usar el rol `@devlinker` seguido del comando según tu método:

- Conexión Stdio (ejecuta un script local):

  @devlinker /connectStdio python "D:/ruta/a/tu/mcp_server.py"

- Conexión SSE (Server-Sent Events):

  @devlinker /connectSSE http://localhost:8000/sse

- Conexión Streamable HTTP (con cabeceras):

  1) Arrastra `mcp/mcp_services.json` a la ventana de chat como attachment.
  2) Ejecuta:

     @devlinker /load mcp/mcp_services.json

  3) O conecta directamente:

     @devlinker /connectSHttp https://example.com/mcp

3. Tras conexión exitosa recibirás un `Connection id` en el chat.
   - Para desconectar: `@devlinker /disconnect <connectionID>`
   - Para desconectar todo: `@devlinker /disconnectAll`

Comprobar salud (si el MCP expone `/health`):

PowerShell (si tienes token):

```powershell
$env:MCP_URL = "https://example.com"
$env:MCP_TOKEN = "TU_TOKEN"
Invoke-RestMethod -Uri "$env:MCP_URL/health" -Headers @{ Authorization = "Bearer $env:MCP_TOKEN" } -Method Get
```

curl:

```bash
curl -sS -H "Authorization: Bearer TU_TOKEN" "https://example.com/health"
```

Si me das la URL y el tipo de autenticación (y el token si quieres que lo pruebe), intento la petición desde aquí o te doy el comando listo para pegar.
