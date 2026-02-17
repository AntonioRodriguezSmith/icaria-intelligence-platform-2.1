# Casos Simplificados

## Caso 1 — Saludo simple
- id: CS-001
- title: Saludo de bienvenida
- input: "Hola"
- expected: Respuesta de bienvenida (mensaje amistoso y orientación)
- priority: low

## Caso 2 — Consulta KPI
- id: CS-002
- title: Consulta de KPI básico
- input: "¿Cuál es el KPI de transacciones de riesgo hoy?"
- expected: Respuesta con el KPI solicitado o mensaje indicando que haga login/permiso
- priority: medium

## Recomendación
Convertir estos casos a formato estructurado `casos/casos_test.md` con Given/When/Then y añadir owner y pasos reproducibles.
