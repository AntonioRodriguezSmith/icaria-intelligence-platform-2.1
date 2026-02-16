FROM python:3.11-slim
WORKDIR /app

# Instalar dependencias
COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt

# Copiar código
COPY src/ /app/src/

EXPOSE 9100
CMD ["python", "src/app.py"]
