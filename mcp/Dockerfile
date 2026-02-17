FROM python:3.11-slim
WORKDIR /app
COPY mock_mcp_server.py /app/mock_mcp_server.py
RUN pip install --no-cache-dir flask
EXPOSE 8000
CMD ["python", "mock_mcp_server.py"]
