# Informe: Análisis de Casos

**Generado:** 2026-02-17T12:35:48.831Z

## Estadísticas

- Total casos: 40
- Con datos: 31
- Sin datos: 9
- Cobertura promedio: 32%
- Modeladas: 1
- Parciales: 6
- No modeladas: 24

## Condiciones no modeladas por frecuencia (priorización)

- **Test de Conveniencia** (tabla: MF1301) — 30 apariciones
- **VALORES.TEST_CAPACIDAD_FINANCIERA** (tabla: MF1301) — 30 apariciones
- **TEST_DE_CONVENIENCIA** (tabla: MF1301) — 30 apariciones
- **Saldo en cuenta efectivo > X€** (tabla: DV01) — 27 apariciones
- **CUENTAS.SALDO_MAYOR_1000** (tabla: DV01) — 26 apariciones
- **Cantidad de titulares** (tabla: PE1601) — 9 apariciones
- **CUENTA_UN_SOLO_TITULAR** (tabla: CUENTAS) — 7 apariciones
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
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTA_UN_SOLO_TITULAR

**Cobertura: 30% (3/10 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

---

**Caso 2:**

✅ Es persona física - `ES_PERSONA_FISICA`
✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 2 - `TIENE_CUENTA_VALOR`
❌ Test de Capacidad Financiera
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 33% (3/9 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

---

**Caso 3:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA

**Cobertura: 40% (2/5 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 4:**

✅ Clasificación MIFID = P - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Capacidad Financiera
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Cantidad de posiciones en cartera
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 22% (2/9 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

---

**Caso 5:**

✅ Clasificación MIFID = C - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Tipos de movimiento VA37
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 25% (2/8 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

---

**Caso 6:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 29% (2/7 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

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
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTA_UN_SOLO_TITULAR
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 33% (4/12 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

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
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTA_UN_SOLO_TITULAR

**Cobertura: 29% (2/7 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

---

**Caso 13:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 29% (2/7 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

---

**Caso 14:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Cantidad de titulares
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 25% (2/8 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

---

**Caso 15:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 17% (1/6 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

---

**Caso 16:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = >=3 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 29% (2/7 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

---

**Caso 17:**

✅ Es persona jurídica - `ES_PERSONA_JURIDICA`
✅ Tipo de identificación - `TIPO_DE_IDENTIFICACION`
✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Cantidad de titulares
❌ Autorizado Banca a Distancia
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTA_UN_SOLO_TITULAR

**Cobertura: 40% (4/10 condiciones modeladas)**
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
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 25% (2/8 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

---

**Caso 23:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Tipo de cuenta valores
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 25% (2/8 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

---

**Caso 24:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 29% (2/7 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

---

**Caso 25:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 29% (2/7 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

---

**Caso 26:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Tipo de cuenta valores
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 25% (2/8 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

---

**Caso 27:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 29% (2/7 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

---

**Caso 28:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Tipo de cuenta valores
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 25% (2/8 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

---

**Caso 29:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 29% (2/7 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

---

**Caso 30:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Tipo de cuenta valores
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 25% (2/8 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

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
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTA_UN_SOLO_TITULAR
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 22% (2/9 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

---

**Caso 33:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Cantidad de titulares
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTA_UN_SOLO_TITULAR
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 22% (2/9 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

---

**Caso 34:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Cantidad de titulares
❌ Bloqueado por RIC
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTA_UN_SOLO_TITULAR
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 20% (2/10 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

---

**Caso 35:**

✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ Cantidad de titulares
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 25% (2/8 condiciones modeladas)**
**Estado: ❌ NO MODELADA**

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
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 40% (4/10 condiciones modeladas)**
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
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 40% (4/10 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 39:**

✅ Es persona jurídica - `ES_PERSONA_JURIDICA`
✅ Tipo de identificación - `TIPO_DE_IDENTIFICACION`
✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 44% (4/9 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

**Caso 40:**

✅ Es persona jurídica - `ES_PERSONA_JURIDICA`
✅ Tipo de identificación - `TIPO_DE_IDENTIFICACION`
✅ Clasificación MIFID = M - `VALORES_TIPO_CLASIFICACION_MIFID`
✅ Tiene cuenta de valores = 1 - `TIENE_CUENTA_VALOR`
❌ Test de Conveniencia
❌ Saldo en cuenta efectivo > X€
❌ VALORES.TEST_CAPACIDAD_FINANCIERA
❌ TEST_DE_CONVENIENCIA
❌ CUENTAS.SALDO_MAYOR_1000

**Cobertura: 44% (4/9 condiciones modeladas)**
**Estado: ⚠️ PARCIAL**

---

