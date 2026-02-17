# Aprendizaje del proyecto — Actualización 24/12/2025

**Resumen**
Documento de lecciones aprendidas, recomendaciones y próximos pasos derivados del trabajo sobre el detector. Mantener este archivo actualizado tras revisiones importantes (PR + review técnica).

**Metadatos**
- Fecha: 2025-12-24
- Autor: Equipo ICARIA
- Versión: 1.0

---

## Próximos pasos (resumen)
- Generar ejemplos sintéticos en formato TXT/CSV y adaptarlos a datos reales.
- Mantener trazabilidad de cambios en `docs/memoria.md` y este archivo.
- Priorizar la incorporación de condiciones no modeladas al catálogo.

---

## 1. Modelado y correspondencia de condiciones
- Mapear todas las condiciones de negocio a identificadores técnicos y mantener la trazabilidad (negocio ↔ técnico).
- Usar nomenclatura consistente (ej.: `TIENE_BANCA_A_DISTANCIA`, `ES_PERSONA_JURIDICA`).
- Mantener una tabla de correspondencia que facilite auditoría y validación.

## 2. Validación y trazabilidad de casos
- Registrar la validación de cada caso en `casos_resueltos.md` o equivalente, incluyendo el resultado y la tabla de correspondencia.
- Los casos duplicados deben indicarse como 'Duplicado de Caso X' y contabilizarse para estadísticas sin repetir detalles.

## 3. Automatización y scripts
- Centralizar la lógica común de carga/parseo para evitar duplicidad (p. ej. `obtener_condiciones_modeladas()`).
- Mantener scripts que permitan la detección automática de condiciones técnicas a partir de entradas estructuradas.
- Usar ejemplos y tests integrados para facilitar incorporación de nuevos miembros.

## 4. Buenas prácticas y recomendaciones
- Sincronizar documentación y scripts con la tabla de condiciones.
- Versionar `CondicionesIcaria.txt` / `condiciones_icaria.js` y revisar cambios por PR.
- Definir un procedimiento para proponer y validar nuevas condiciones (ticket → PR → revisión técnica).

## 5. Organización y limpieza de archivos
- Mantener una carpeta `basura/` para archivos obsoletos o temporales (documentar su uso en `docs/rutas.md`).
- Mantener un `docs/rutas.md` actualizado con la estructura de carpetas y propósito de cada una.

## 6. Tipado y duplicidad (Python)
- Evitar duplicidad centralizando funciones de carga y parseo.
- Usar anotaciones de tipo (`typing`) para mejorar calidad con Pylance/pyright.

---

## 7. Patrones recurrentes
- Condiciones técnicas frecuentes detectadas: `TIENE_BANCA_A_DISTANCIA`, `ES_PERSONA_JURIDICA`, `TIPO_DE_FIRMA_DIGITAL_BSO`.
- Muchos gaps se repiten (p. ej. enrolamiento en Bizum, flags de usuario consultivo): mantener lista priorizada.

## 8. Gobernanza del archivo
- Proceso de actualización: editar vía PR con descripción del cambio y aprobar por un revisor técnico.
- Cadencia recomendada: revisar y actualizar trimestralmente o tras cambios significativos en el catálogo.

---

## Ejemplos de salida armonizada (Markdown)
| Caso | Condición | Estado |
|---|---|---:|
| Caso 1 | TIENE_BANCA_A_DISTANCIA | ✅ |
| Caso 1 | ES_PERSONA_JURIDICA | ✅ |
| Caso 1 | NO_MODELADA: usuario consultivo | ❌ |


## Notas
- Este archivo sustituye versiones previas con errores tipográficos (apredizaje.md) y elimina duplicados.
- Para ejemplos completos (CSV/HTML), véase `docs/examples/` (crear si no existe).

