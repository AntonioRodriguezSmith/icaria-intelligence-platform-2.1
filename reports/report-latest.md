# Informe: Análisis de Casos

**Generado:** 2026-02-17T11:41:24.642Z

## Estadísticas

- Total casos: 40
- Con datos: 31
- Sin datos: 9
- Cobertura promedio: 49%
- Modeladas: 1
- Parciales: 27
- No modeladas: 3

## Condiciones no modeladas por frecuencia (priorización)

- **Test de Conveniencia** (tabla: MF1301) — 30 apariciones
- **Saldo en cuenta efectivo > X€** (tabla: DV01) — 27 apariciones
- **Cantidad de titulares** (tabla: PE1601) — 9 apariciones
- **Tipo de cuenta valores** (tabla: Q08/VA) — 7 apariciones
- **Test de Capacidad Financiera** (tabla: MF1301) — 3 apariciones
- **Autorizado Banca a Distancia** (tabla: PE70) — 2 apariciones
- **Cantidad de posiciones en cartera** (tabla: Q48) — 1 apariciones
- **Tipos de movimiento VA37** (tabla: VA37) — 1 apariciones
- **Bloqueado por RIC** (tabla: Externo) — 1 apariciones

## Casos (detallado)

**Caso 1:**

✅ Es persona física - `ES_PERSONA_FISICA`
✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Capacidad Financiera
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Cantidad de titulares

**Cobertura: 43% (3/7 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 2:**

✅ Es persona física - `ES_PERSONA_FISICA`
✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 2 - `TIENE_CUENTA_VALOR`
❌ Test de Capacidad Financiera
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€

**Cobertura: 50% (3/6 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 3:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia

**Cobertura: 67% (2/3 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 4:**

✅ Clasificación MIFID = P - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Capacidad Financiera
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Cantidad de posiciones en cartera

**Cobertura: 33% (2/6 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

---

**Caso 5:**

✅ Clasificación MIFID = C - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Tipos de movimiento VA37

**Cobertura: 40% (2/5 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 6:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€

**Cobertura: 50% (2/4 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 7:**

✅ Es persona jurídica - `ES_PERSONA_JURIDICA`
✅ Tipo de identificación - `TIPO_DE_IDENTIFICACION`
✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Cantidad de titulares
❌ Autorizado Banca a Distancia

**Cobertura: 50% (4/8 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 8:**


**Cobertura: 0% (0/0 condiciones modeladas)**
**Estado: ❌ SIN DATOS**

---

**Caso 9:**


**Cobertura: 0% (0/0 condiciones modeladas)**
**Estado: ❌ SIN DATOS**

---

**Caso 10:**


**Cobertura: 0% (0/0 condiciones modeladas)**
**Estado: ❌ SIN DATOS**

---

**Caso 11:**


**Cobertura: 0% (0/0 condiciones modeladas)**
**Estado: ❌ SIN DATOS**

---

**Caso 12:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Cantidad de titulares

**Cobertura: 50% (2/4 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 13:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€

**Cobertura: 50% (2/4 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 14:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Cantidad de titulares

**Cobertura: 40% (2/5 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 15:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€

**Cobertura: 33% (1/3 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

---

**Caso 16:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = >=3 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€

**Cobertura: 50% (2/4 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 17:**

✅ Es persona jurídica - `ES_PERSONA_JURIDICA`
✅ Tipo de identificación - `TIPO_DE_IDENTIFICACION`
✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Cantidad de titulares
❌ Autorizado Banca a Distancia

**Cobertura: 57% (4/7 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 18:**


**Cobertura: 0% (0/0 condiciones modeladas)**
**Estado: ❌ SIN DATOS**

---

**Caso 19:**


**Cobertura: 0% (0/0 condiciones modeladas)**
**Estado: ❌ SIN DATOS**

---

**Caso 20:**


**Cobertura: 0% (0/0 condiciones modeladas)**
**Estado: ❌ SIN DATOS**

---

**Caso 21:**


**Cobertura: 0% (0/0 condiciones modeladas)**
**Estado: ❌ SIN DATOS**

---

**Caso 22:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Tipo de cuenta valores

**Cobertura: 40% (2/5 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 23:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Tipo de cuenta valores

**Cobertura: 40% (2/5 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 24:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€

**Cobertura: 50% (2/4 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 25:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€

**Cobertura: 50% (2/4 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 26:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Tipo de cuenta valores

**Cobertura: 40% (2/5 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 27:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€

**Cobertura: 50% (2/4 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 28:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Tipo de cuenta valores

**Cobertura: 40% (2/5 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 29:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€

**Cobertura: 50% (2/4 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 30:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Tipo de cuenta valores

**Cobertura: 40% (2/5 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 31:**

✅ Clasificación MIFID - `VALORES_TIPO_CLASIFICACION_MIFID`

**Cobertura: 100% (1/1 condiciones modeladas)**
**Estado: ✅ MODELADA**

---

**Caso 32:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Cantidad de titulares

**Cobertura: 40% (2/5 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 33:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Cantidad de titulares

**Cobertura: 40% (2/5 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 34:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Cantidad de titulares
❌ Bloqueado por RIC

**Cobertura: 33% (2/6 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

---

**Caso 35:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Cantidad de titulares

**Cobertura: 40% (2/5 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 36:**


**Cobertura: 0% (0/0 condiciones modeladas)**
**Estado: ❌ SIN DATOS**

---

**Caso 37:**

✅ Es persona jurídica - `ES_PERSONA_JURIDICA`
✅ Tipo de identificación - `TIPO_DE_IDENTIFICACION`
✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Tipo de cuenta valores

**Cobertura: 57% (4/7 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 38:**

✅ Es persona jurídica - `ES_PERSONA_JURIDICA`
✅ Tipo de identificación - `TIPO_DE_IDENTIFICACION`
✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Tipo de cuenta valores

**Cobertura: 57% (4/7 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 39:**

✅ Es persona jurídica - `ES_PERSONA_JURIDICA`
✅ Tipo de identificación - `TIPO_DE_IDENTIFICACION`
✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€

**Cobertura: 67% (4/6 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 40:**

✅ Es persona jurídica - `ES_PERSONA_JURIDICA`
✅ Tipo de identificación - `TIPO_DE_IDENTIFICACION`
✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€

**Cobertura: 67% (4/6 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

