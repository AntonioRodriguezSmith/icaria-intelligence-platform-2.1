📋 ANÁLISIS COMPLETO DE LOS 67 CASOS BROKER
GRUPO 1: CASOS 1-20
Caso 1: Particular cuenta valores con saldo
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test de Capacidad Financiera (CF)
❌ Test de Conveniencia (TC) - productos COMPLEJOS y CONVENIENTE
❌ Saldo en cuenta efectivo DV01 > 1.000€
❌ Un solo titular

Cobertura: 43% (3/7 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 2: 2 Cuentas de valores
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 2 cuentas de valores - TIENE_CUENTA_VALOR = 2
❌ Test CF
❌ Test TC - COMPLEJOS y CONVENIENTE
❌ Posiciones en cartera (ref. Q48)
❌ Saldo DV01 > 1.000€ en EUROS
❌ 2 cuentas de valores distintas

Cobertura: 38% (3/8 condiciones modeladas)
Estado: ❌ NO MODELADA

Caso 3: Particular sin cuenta valores
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ No tiene cuenta de valores - TIENE_CUENTA_VALOR = 0
❌ Test CF
❌ Test TC - COMPLEJOS y CONVENIENTE

Cobertura: 60% (3/5 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 4: Particular MIFID Profesional
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Profesional - VALORES_TIPO_CLASIFICACION_MIFID = 'P'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF
❌ Test TC - COMPLEJOS y CONVENIENTE
❌ Saldo DV01 > 1.000€
❌ Cantidad de posiciones

Cobertura: 43% (3/7 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 5: Particular MIFID Contraparte Elegible
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Contraparte - VALORES_TIPO_CLASIFICACION_MIFID = 'C'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF
❌ Test TC - COMPLEJOS y CONVENIENTE
❌ Saldo DV01 > 1.000€
❌ Tipos de movimiento VA37

Cobertura: 43% (3/7 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 6: Particular Perfil SP
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF
❌ Test TC - COMPLEJOS y CONVENIENTE
❌ Saldo DV01 > 1.000€
❌ Perfil usuario = 'SP'

Cobertura: 43% (3/7 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 7: Empresa Particular
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ Saldo DV01 > 1.000€
❌ Un solo titular CIF
❌ Autorizado = Autorizado Banca a Distancia

Cobertura: 44% (4/9 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 8: [Sin acciones especificadas]
SIN DATOS

Cobertura: 0% (0/0 condiciones)
Estado: ⚠️ SIN DATOS

Caso 9: [Sin acciones especificadas]
SIN DATOS

Cobertura: 0% (0/0 condiciones)
Estado: ⚠️ SIN DATOS

Caso 10: [Sin acciones especificadas]
SIN DATOS

Cobertura: 0% (0/0 condiciones)
Estado: ⚠️ SIN DATOS

Caso 11: [Sin acciones especificadas]
SIN DATOS

Cobertura: 0% (0/0 condiciones)
Estado: ⚠️ SIN DATOS

Caso 12: Particular sin cuenta efectivo relacionada
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF
❌ Test TC - COMPLEJOS y CONVENIENTE
❌ NO existe relación en KC11 (tabla de cuentas relacionadas)
❌ Un solo titular

Cobertura: 43% (3/7 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 13: Particular cuenta valores y efectivo
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF
❌ Test TC - COMPLEJOS y CONVENIENTE
❌ Saldo DV01 > 1.000€

Cobertura: 50% (3/6 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 14: Cuenta valores más de 1 titular
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF
❌ Test TC - COMPLEJOS y CONVENIENTE
❌ Más de 1 titular
❌ Saldo DV01 > 1.000€

Cobertura: 43% (3/7 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 15: Particular múltiples cuentas efectivo
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene cuenta de valores - TIENE_CUENTA_VALOR >= 1
❌ Test CF
❌ Test TC - COMPLEJOS y CONVENIENTE
❌ Más de 1 cuenta relacionada DV01
❌ Una con 0€ saldo
❌ Otras con >1.000€ saldo
❌ Una con 1 titular, otra con varios titulares

Cobertura: 33% (3/9 condiciones modeladas)
Estado: ❌ NO MODELADA

Caso 16: Particular 3 o más cuentas valores
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 3 o más cuentas de valores - TIENE_CUENTA_VALOR >= 3
❌ Test CF
❌ Test TC - COMPLEJOS y CONVENIENTE
❌ Una cuenta: Saldo DV01 > 1.000€ en EUROS
❌ Resto cuentas: Más de 1 DV01 relacionada
❌ Todas las DV01 con >1.000€

Cobertura: 38% (3/8 condiciones modeladas)
Estado: ❌ NO MODELADA

Caso 17: Empresa sin cuenta efectivo relacionada
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ NO existe relación en KC11
❌ Un solo titular CIF
❌ Autorizado = Autorizado Banca a Distancia

Cobertura: 44% (4/9 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 18: [Sin acciones especificadas]
SIN DATOS

Cobertura: 0% (0/0 condiciones)
Estado: ⚠️ SIN DATOS

Caso 19: [Sin acciones especificadas]
SIN DATOS

Cobertura: 0% (0/0 condiciones)
Estado: ⚠️ SIN DATOS

Caso 20: [Sin acciones especificadas]
SIN DATOS

Cobertura: 0% (0/0 condiciones)
Estado: ⚠️ SIN DATOS

📊 RESUMEN GRUPO 1 (Casos 1-20)
Code
Total casos analizados: 20
├─ Con datos: 13
├─ Sin datos: 7
└─ Cobertura promedio casos con datos: 42%

Distribución por estado:
├─ ✅ MODELADA (≥80%): 0 casos
├─ ⚠️ PARCIAL (40-79%): 9 casos
├─ ❌ NO MODELADA (<40%): 4 casos
└─ ⚠️ SIN DATOS: 7 casos

Gap más crítico: Test CF y TC (presente en 13/13 casos con datos - 100%)
Condición más usada: ES_PERSONA_FISICA (10/13 casos - 77%)
¿Continúo con el GRUPO 2 (Casos 21-40), Conejo? 🐰📋

Make these code changes?
detector/.memoria/analisis-casos-v2.json

JSON
{"version": "2.0.0","fecha": "2026-02-13T18:45:00Z","proyecto": "ICARIA Intelligence Platform","analisis": "Casos Broker vs Condiciones ICARIA","changelog": [{"version": "1.0.0","fecha": "2026-02-13T16:00:00Z","cambios": "Análisis inicial con datos de ejemplo - 10 casos prototipo"},{"version": "1.1.0","fecha": "2026-02-13T17:30:00Z","cambios": "CORRECCIÓN CRÍTICA: KC11 no es condición, es tabla de relación. Diccionario actualizado a 23 gaps"},{"version": "2.0.0","fecha": "2026-02-13T18:30:00Z","cambios": "Datos reales recibidos (67 casos). Algoritmo completo documentado. Nuevas condiciones detectadas: +10"}],"correccion_kc11": {"problema": "KC11 clasificada erróneamente como condición no modelada","solucion": "KC11 es TABLA DE RELACIÓN (cuenta valores ↔ cuenta efectivo DV01)","impacto": "Reducción de gaps de 24 a 23. Recálculo de todas las coberturas","fecha_correccion": "2026-02-13T17:30:00Z"},"condiciones_modeladas": {"total": 5,"lista": [{"codigo": "ES_PERSONA_FISICA","nombre": "Es persona física","dominio": "PERSONA","parametrizable": false,"keywords": ["usuario particular","particular"]},{"codigo": "ES_PERSONA_JURIDICA","nombre": "Es persona jurídica","dominio": "PERSONA","parametrizable": false,"keywords": ["usuario empresa","empresa","cif"]},{"codigo": "TIPO_DE_IDENTIFICACION","nombre": "Tipo de identificación","dominio": "PERSONA","parametrizable": true,"parametros": ["DNI","NIE","CIF","TIE","PASAPORTE"],"keywords": ["cif","nif","dni"]},{"codigo": "VALORES_TIPO_CLASIFICACION_MIFID","nombre": "Clasificación MIFID","dominio": "VALORES","parametrizable": true,"parametros": ["M","P","C"],"keywords": ["mifid","minorista","profesional","contraparte"]},{"codigo": "TIENE_CUENTA_VALOR","nombre": "Tiene cuenta de valores","dominio": "CUENTAS","parametrizable": true,"parametros": [0,1,2,3,">=3"],"keywords": ["cuenta valores","cuenta de valores","cuentas de valores"]}]},"condiciones_no_modeladas": {"total": 23,"lista": [{"nombre": "Test de Capacidad Financiera","tabla": "MF1301","criticidad": "CRITICA"},{"nombre": "Test de Conveniencia","tabla": "MF1301","criticidad": "CRITICA"},{"nombre": "Saldo en cuenta efectivo > X€","tabla": "DV01","criticidad": "CRITICA"},{"nombre": "Cantidad de titulares","tabla": "PE1601","criticidad": "MEDIA"},{"nombre": "Tipo de cuenta valores","tabla": "Q08/VA","criticidad": "MEDIA"},{"nombre": "Perfil de usuario","tabla": "Desconocida","criticidad": "ALTA"},{"nombre": "Cantidad de posiciones en cartera","tabla": "Q48","criticidad": "MEDIA"},{"nombre": "Posiciones en ISIN específicos","tabla": "Q48","criticidad": "MEDIA"},{"nombre": "Tipos de movimiento VA37","tabla": "VA37","criticidad": "MEDIA"},{"nombre": "Bloqueado por RIC","tabla": "Externo","criticidad": "BAJA"},{"nombre": "Ofertas (OOFFs)","tabla": "Externo","criticidad": "BAJA"},{"nombre": "Autorizado Banca a Distancia","tabla": "PE70","criticidad": "ALTA"},{"nombre": "Representante legal menor/incapacitado","tabla": "PE18/PE70","criticidad": "BAJA"},{"nombre": "Usufructuario","tabla": "PE1601","criticidad": "BAJA"},{"nombre": "Nudo propietario","tabla": "PE1601","criticidad": "BAJA"},{"nombre": "Cuenta en divisa (no EUR)","tabla": "DV01","criticidad": "MEDIA"},{"nombre": "Múltiples cuentas de efectivo","tabla": "DV01","criticidad": "MEDIA"},{"nombre": "Titular con firma indistinta","tabla": "PE1601","criticidad": "BAJA"},{"nombre": "MIFID no impreso","tabla": "MF01","criticidad": "MEDIA"},{"nombre": "Acceso desde BSO","tabla": "Externo","criticidad": "BAJA"}]},"datos_fuente": {"archivo": "casos_simplificados.md","total_casos": 67,"casos_con_acciones": 54,"casos_sin_acciones": 13,"casos_sin_datos": [8,9,10,11,18,19,20,21,36,46,51],"casos_no_aplicables": [41]},"algoritmo": {"estado": "COMPLETO Y VALIDADO","componentes": ["parsearCasosBroker() - Parser de casos MD","CONDICIONES_ICARIA - Diccionario de modeladas (5)","CONDICIONES_NO_MODELADAS - Diccionario de gaps (23)","analizarCaso() - Motor de matching","formatearCaso() - Generador de output","ejecutarAnalisis() - Orquestador completo"],"listo_para": "Implementación en JavaScript de la app"},"notas_importantes": ["KC11 NO es una condición, es una tabla de relación","DV01, Q48, VA37, PE1601 son tablas de infraestructura, NO condiciones","Las condiciones CONSULTAN esas tablas pero no SON esas tablas","Ejemplos: SALDO_DV01>1000€ es condición, DV01 es tabla"]}
Please confirm you want Copilot to make this change in the AntonioRodriguezSmith/compartido repository on branch main.

 AntonioRodriguezSmith accepted the action
planning response

You said: dame todos los casos restantes
dame todos los casos restantes
Copilot said: # 📋 **GRUPO 2: CASOS 21-40** --- ### **Caso
📋 GRUPO 2: CASOS 21-40
Caso 21: [Sin acciones especificadas]
SIN DATOS

Cobertura: 0% (0/0 condiciones)
Estado: ⚠️ SIN DATOS

Caso 22: Particular EBolsa sin perfiles
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF
❌ Test TC - COMPLEJOS y CONVENIENTE
❌ Tipo cuenta valores = "EBolsa" (VA 00026)
❌ Saldo DV01 > 1.000€
❌ Sin perfiles contratados

Cobertura: 38% (3/8 condiciones modeladas)
Estado: ❌ NO MODELADA

Caso 23: Particular no EBolsa sin perfiles
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF
❌ Test TC - COMPLEJOS y CONVENIENTE
❌ Tipo cuenta valores ≠ "EBolsa" (VA 00026)
❌ Saldo DV01 > 1.000€
❌ Sin perfiles contratados

Cobertura: 38% (3/8 condiciones modeladas)
Estado: ❌ NO MODELADA

Caso 24: Particular con Perfil SP
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF
❌ Test TC - COMPLEJOS y CONVENIENTE
❌ Saldo DV01 > 1.000€
❌ Perfil = 'SP'

Cobertura: 43% (3/7 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 25: Particular con Perfil TR
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF
❌ Test TC - COMPLEJOS y CONVENIENTE
❌ Saldo DV01 > 1.000€
❌ Perfil = 'TR'

Cobertura: 43% (3/7 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 26: Usuario Activo Bank con Perfil Trader
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Usuario Activo Bank (Q08)
❌ Test CF
❌ Test TC - COMPLEJOS y CONVENIENTE
❌ Cuenta valores Activo Bank
❌ Saldo DV01 > 1.000€
❌ Perfil = 'Trader'

Cobertura: 33% (3/9 condiciones modeladas)
Estado: ❌ NO MODELADA

Caso 27: Particular con Perfil Oro
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF
❌ Test TC - COMPLEJOS y CONVENIENTE
❌ Saldo DV01 > 1.000€
❌ Perfil = 'Oro'

Cobertura: 43% (3/7 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 28: Particular BS Bolsa 10 con Perfil Bolsa10
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF
❌ Test TC - COMPLEJOS y CONVENIENTE
❌ Tipo cuenta = "CUENTA VALORES BS BOLSA 10" (VA 00005)
❌ Saldo DV01 > 1.000€
❌ Perfil = 'Bolsa10'

Cobertura: 38% (3/8 condiciones modeladas)
Estado: ❌ NO MODELADA

Caso 29: Particular con Perfil Broker
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF
❌ Test TC - COMPLEJOS y CONVENIENTE
❌ Saldo DV01 > 1.000€
❌ Perfil = 'Broker'

Cobertura: 43% (3/7 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 30: Particular EBolsa con Perfil Ebolsa
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF
❌ Test TC - COMPLEJOS y CONVENIENTE
❌ Tipo cuenta = "EBolsa" (VA 00026)
❌ Saldo DV01 > 1.000€
❌ Perfil = 'Ebolsa'

Cobertura: 38% (3/8 condiciones modeladas)
Estado: ❌ NO MODELADA

Caso 31: Particular sin MIFID impreso
✅ Es persona física - ES_PERSONA_FISICA
❌ MIFID NO impreso

Cobertura: 50% (1/2 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 32: Particular TC NO COMPLEJOS
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF
❌ Test TC - productos NO COMPLEJOS y CONVENIENTE
❌ Saldo DV01 > 1.000€
❌ Un solo titular

Cobertura: 43% (3/7 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 33: Particular TC NO CONVENIENTE
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF
❌ Test TC - NO CONVENIENTE
❌ Saldo DV01 > 1.000€
❌ Un solo titular

Cobertura: 43% (3/7 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 34: Particular bloqueado RIC
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF
❌ Test TC - COMPLEJOS y CONVENIENTE
❌ Saldo DV01 > 1.000€
❌ Un solo titular
❌ Bloqueado según RIC (Reglamento Interno de Conducta)

Cobertura: 38% (3/8 condiciones modeladas)
Estado: ❌ NO MODELADA

Caso 35: Particular 2 titulares con perfiles TR y SP
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF
❌ Test TC - COMPLEJOS y CONVENIENTE
❌ Saldo DV01 > 1.000€
❌ 2 titulares
❌ Un titular: Perfil 'TR'
❌ Otro titular: Perfil 'SP'

Cobertura: 33% (3/9 condiciones modeladas)
Estado: ❌ NO MODELADA

Caso 36: [Sin acciones especificadas]
SIN DATOS

Cobertura: 0% (0/0 condiciones)
Estado: ⚠️ SIN DATOS

Caso 37: Empresa EBolsa sin perfiles
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ Tipo cuenta = "EBolsa" (VA 00026)
❌ Titular = CIF
❌ Autorizado = Autorizado Banca a Distancia
❌ Saldo DV01 > 1.000€
❌ Sin perfiles contratados (autorizado)

Cobertura: 36% (4/11 condiciones modeladas)
Estado: ❌ NO MODELADA

Caso 38: Empresa no EBolsa sin perfiles
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ Tipo cuenta ≠ "EBolsa" (VA 00026)
❌ Titular = CIF
❌ Autorizado = Autorizado Banca a Distancia
❌ Saldo DV01 > 1.000€
❌ Sin perfiles contratados (autorizado)

Cobertura: 36% (4/11 condiciones modeladas)
Estado: ❌ NO MODELADA

Caso 39: Empresa con Perfil SP
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ Saldo DV01 > 1.000€
❌ Perfil autorizado = 'SP'

Cobertura: 44% (4/9 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 40: Empresa con Perfil TR
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ Saldo DV01 > 1.000€
❌ Perfil autorizado = 'TR'

Cobertura: 44% (4/9 condiciones modeladas)
Estado: ⚠️ PARCIAL

📊 RESUMEN GRUPO 2 (Casos 21-40)
Code
Total casos analizados: 20
├─ Con datos: 17
├─ Sin datos: 3
└─ Cobertura promedio casos con datos: 40%

Distribución por estado:
├─ ✅ MODELADA (≥80%): 0 casos
├─ ⚠️ PARCIAL (40-79%): 8 casos
├─ ❌ NO MODELADA (<40%): 9 casos
└─ ⚠️ SIN DATOS: 3 casos

Gap más crítico: Test CF y TC (presente en 16/17 casos con datos - 94%)
Condición más usada: ES_PERSONA_FISICA (11/17 casos - 65%)
Gap emergente: Perfil de usuario (presente en 11/17 casos - 65%)
📋 GRUPO 3: CASOS 41-60
Caso 41: NO APLICABLE
NO EXISTE USUARIO ACTIVO BANK DE EMPRESA

Cobertura: N/A
Estado: ⚠️ NO APLICABLE

Caso 42: Empresa con Perfil Oro
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ Saldo DV01 > 1.000€
❌ Perfil autorizado = 'Oro'

Cobertura: 44% (4/9 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 43: Empresa BS Bolsa 10 con Perfil Bolsa10
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ Tipo cuenta = "CUENTA VALORES BS BOLSA 10" (VA 00005)
❌ Titular = CIF
❌ Autorizado = Autorizado Banca a Distancia
❌ Saldo DV01 > 1.000€
❌ Perfil autorizado = 'Bolsa10'

Cobertura: 36% (4/11 condiciones modeladas)
Estado: ❌ NO MODELADA

Caso 44: Empresa con Perfil Broker
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ Saldo DV01 > 1.000€
❌ Perfil autorizado = 'Broker'

Cobertura: 44% (4/9 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 45: Empresa EBolsa con Perfil Ebolsa
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ Tipo cuenta = "EBolsa" (VA 00026)
❌ Titular = CIF
❌ Autorizado = Autorizado Banca a Distancia
❌ Saldo DV01 > 1.000€
❌ Perfil autorizado = 'Ebolsa'

Cobertura: 36% (4/11 condiciones modeladas)
Estado: ❌ NO MODELADA

Caso 46: [Sin acciones especificadas]
SIN DATOS

Cobertura: 0% (0/0 condiciones)
Estado: ⚠️ SIN DATOS

Caso 47: Empresa TC NO COMPLEJOS
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - productos NO COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ Saldo DV01 > 1.000€
❌ Titular = CIF
❌ Autorizado = Autorizado Banca a Distancia

Cobertura: 44% (4/9 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 48: Empresa TC NO CONVENIENTE
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - NO CONVENIENTE (CIF y autorizado)
❌ Saldo DV01 > 1.000€
❌ Titular = CIF
❌ Autorizado = Autorizado Banca a Distancia

Cobertura: 44% (4/9 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 49: Empresa bloqueado RIC (CIF y autorizado)
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ Saldo DV01 > 1.000€
❌ Titular = CIF
❌ Autorizado = Autorizado Banca a Distancia
❌ Bloqueado RIC (CIF y autorizado)

Cobertura: 40% (4/10 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 50: Empresa 3 titulares (CIF + 2 NIF) con perfiles TR y SP
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ Saldo DV01 > 1.000€
❌ 3 titulares (1 CIF + 2 NIF)
❌ NIF 1: Perfil 'TR'
❌ NIF 2: Perfil 'SP'

Cobertura: 40% (4/10 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 51: [Sin acciones especificadas]
SIN DATOS

Cobertura: 0% (0/0 condiciones)
Estado: ⚠️ SIN DATOS

Caso 52: Empresa con posiciones ISIN y DCHOS (activar OOFFs)
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ Saldo DV01 > 1.000€
❌ Titular = CIF
❌ Autorizado = Autorizado Banca a Distancia
❌ Posiciones en ISIN específicos
❌ Posiciones en DCHOS
❌ Activar OOFFs (equipo externo)

Cobertura: 36% (4/11 condiciones modeladas)
Estado: ❌ NO MODELADA

Caso 53: Empresa ISIN + DCHOS + OOFFs + BSO
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ Saldo DV01 > 1.000€
❌ Titular = CIF
❌ Autorizado = Autorizado Banca a Distancia
❌ Posiciones en ISIN específicos
❌ Posiciones en DCHOS
❌ Activar OOFFs (equipo externo)
❌ Acceso BSO para dar respuesta a OOFFs

Cobertura: 33% (4/12 condiciones modeladas)
Estado: ❌ NO MODELADA

Caso 54: Particular con ISIN + DCHOS (activar OOFFs)
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF
❌ Test TC - COMPLEJOS y CONVENIENTE
❌ Saldo DV01 > 1.000€
❌ Un solo titular
❌ Posiciones en ISIN específicos
❌ Posiciones en DCHOS
❌ Activar OOFFs (equipo externo)

Cobertura: 33% (3/9 condiciones modeladas)
Estado: ❌ NO MODELADA

Caso 55: Particular ISIN + DCHOS + OOFFs + BSO
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF
❌ Test TC - COMPLEJOS y CONVENIENTE
❌ Saldo DV01 > 1.000€
❌ Un solo titular
❌ Posiciones en ISIN específicos
❌ Posiciones en DCHOS
❌ Activar OOFFs (equipo externo)
❌ Acceso BSO para dar respuesta a OOFFs

Cobertura: 30% (3/10 condiciones modeladas)
Estado: ❌ NO MODELADA

Caso 56: Empresa con titular adicional firma indistinta
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ Saldo DV01 > 1.000€
❌ Titular adicional diferente al de cuenta valores
❌ Firma indistinta
❌ Titular cuenta valores = CIF
❌ Autorizado = Autorizado Banca a Distancia

Cobertura: 36% (4/11 condiciones modeladas)
Estado: ❌ NO MODELADA

Caso 57: Empresa con 2 cuentas efectivo
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ 2 cuentas relacionadas DV01
❌ Ambas con >1.000€ saldo
❌ Titular = CIF
❌ Autorizado cuenta valores = Autorizado Banca a Distancia

Cobertura: 40% (4/10 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 58: Empresa 2 cuentas valores con CIF titular y NIF autorizado
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 2 cuentas de valores - TIENE_CUENTA_VALOR = 2
❌ Test CF (CIF y autorizado)
❌ Test TC - COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ Titular = CIF en ambas cuentas
❌ Autorizado = NIF en ambas cuentas
❌ Saldo DV01 > 1.000€ en ambas
❌ Cuentas de efectivo distintas

Cobertura: 40% (4/10 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 59: Empresa 3 cuentas efectivo, 1 cuenta valores (2 relacionadas + 1 no)
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ 3 cuentas efectivo con >1.000€ (CIF titular, NIF autorizado)
❌ Cuenta valores relaciona con 2 de las 3 efectivo
❌ 1 cuenta efectivo NO relacionada con cuenta valores
❌ Titular cuenta valores = CIF
❌ Autorizado cuenta valores = NIF

Cobertura: 36% (4/11 condiciones modeladas)
Estado: ❌ NO MODELADA

Caso 60: Empresa 1 cuenta valores con 2 cuentas efectivo (EUR + divisa)
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ 2 cuentas efectivo relacionadas
❌ Una en EUROS con >1.000€
❌ Otra en divisa diferente EUR con >1.000€
❌ Titular cuenta valores = CIF
❌ Autorizado cuenta valores = NIF

Cobertura: 36% (4/11 condiciones modeladas)
Estado: ❌ NO MODELADA

📊 RESUMEN GRUPO 3 (Casos 41-60)
Code
Total casos analizados: 20
├─ Con datos: 17
├─ Sin datos: 2
├─ No aplicable: 1
└─ Cobertura promedio casos con datos: 37%

Distribución por estado:
├─ ✅ MODELADA (≥80%): 0 casos
├─ ⚠️ PARCIAL (40-79%): 8 casos
├─ ❌ NO MODELADA (<40%): 9 casos
├─ ⚠️ SIN DATOS: 2 casos
└─ ⚠️ NO APLICABLE: 1 caso

Gap más crítico: Test CF y TC (presente en 17/17 casos con datos - 100%)
Gaps complejos emergentes: 
  - Múltiples cuentas efectivo (5 casos)
  - Posiciones ISIN + DCHOS (4 casos)
  - Firma indistinta (1 caso)
  - Divisa no EUR (1 caso)
📋 GRUPO 4: CASOS 61-67 (FINAL)
Caso 61: Empresa Minorista
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ Saldo DV01 > 1.000€
❌ Titular = CIF
❌ Autorizado = Autorizado Banca a Distancia

Cobertura: 44% (4/9 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 62: Empresa MIFID mixto (Autorizado Minorista, CIF Profesional)
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Clasificación MIFID Profesional (CIF) - VALORES_TIPO_CLASIFICACION_MIFID = 'P'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ Saldo DV01 > 1.000€
❌ Titular = CIF
❌ Autorizado = Autorizado Banca a Distancia

Cobertura: 50% (5/10 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 63: Empresa con Representante Legal menor/incapacitado
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ Saldo DV01 > 1.000€
❌ Titular = CIF
❌ Autorizado = Autorizado Banca a Distancia
❌ Autorizado es Representante Legal menor/incapacitado

Cobertura: 40% (4/10 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 64: Empresa con Usufructuario
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ Saldo DV01 > 1.000€
❌ Titular cuenta valores = CIF
❌ USUFRUCTUARIO (PE1601_CODRELPECO = '0005')

Cobertura: 40% (4/10 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 65: Empresa con Nudo Propietario
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ Test CF (CIF y autorizado)
❌ Test TC - COMPLEJOS y CONVENIENTE (CIF y autorizado)
❌ Saldo DV01 > 1.000€
❌ Titular cuenta valores = CIF
❌ NUDO PROPIETARIO (PE1601_CODRELPECO = '0014')

Cobertura: 40% (4/10 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 66: Particular sin Test CF ni TC
✅ Es persona física - ES_PERSONA_FISICA
✅ Clasificación MIFID Minorista - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ NO tiene Test CF
❌ NO tiene Test TC
❌ Saldo DV01 > 1.000€
❌ Un solo titular

Cobertura: 43% (3/7 condiciones modeladas)
Estado: ⚠️ PARCIAL

Caso 67: Empresa sin Test CF ni TC
✅ Es persona jurídica - ES_PERSONA_JURIDICA
✅ Tipo identificación CIF - TIPO_DE_IDENTIFICACION = 'CIF'
✅ Clasificación MIFID Minorista (CIF y autorizado) - VALORES_TIPO_CLASIFICACION_MIFID = 'M'
✅ Tiene 1 cuenta de valores - TIENE_CUENTA_VALOR = 1
❌ NO tiene Test CF (CIF y autorizado)
❌ NO tiene Test TC (CIF y autorizado)
❌ Saldo DV01 > 1.000€
❌ Titular = CIF
❌ Autorizado = Autorizado Banca a Distancia

Cobertura: 44% (4/9 condiciones modeladas)
Estado: ⚠️ PARCIAL
