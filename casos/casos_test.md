# Casos de Prueba (Given / When / Then)

## CT-001: Detectar palabra clave simple
Given: Un texto que contiene la palabra "fraude".
When: Se ejecuta el detector de texto con keywords ["fraude"].
Then: El detector devuelve `alert` y `detect_keywords` reporta {"fraude": 1}.

## CT-002: Detección insensible a mayúsculas
Given: Un texto con la palabra "Riesgo" en mayúscula inicial.
When: Se ejecuta el detector con keywords ["riesgo"].
Then: `detect_keywords` detecta la palabra (count >= 1) y `classify_text` devuelve `alert`.

## CT-003: Texto sin keywords
Given: Un texto sin keywords relevantes.
When: Se ejecuta el detector con keywords ["fraude","riesgo"].
Then: `detect_keywords` devuelve {} y `classify_text` devuelve `ok`.

## CT-004: Palabras con acentos y variantes
Given: Texto con "fraudé" (variante acentuada) y keywords ["fraude"].
When: Se ejecuta el detector (normalización básica).
Then: Se recomienda preprocesar (normalizar acentos) — el detector actual puede no detectar la variante; marcar como mejora.

## CT-005: Overlapping y substrings
Given: Texto "riesgofraude" y keywords ["riesgo","fraude"].
When: Se ejecuta el detector.
Then: `detect_keywords` puede no contar ambos si no hay separadores — definir política (split por tokens o substrings).

## CT-006: Integración API del agente
Given: Llamada API al agente que delega en `detector_texto`.
When: Se envía un POST con campo `text` y `keywords`.
Then: API responde JSON con `classification` y `keywords_found`, y la interacción queda registrada en logs y memoria.
