## ⚠️ DIFERENCIA: TABLAS vs CONDICIONES

### Tablas de Infraestructura (NO son condiciones)

Estas tablas solo ENLAZAN o ALMACENAN información, pero no son condiciones de negocio:

- **KC11** → Enlace cuenta valores ↔ cuenta efectivo
- **DV01** → Almacena cuentas de efectivo/divisas
- **Q48** → Almacena posiciones en cartera
- **VA37** → Almacena tipos de movimiento
- **PE1601** → Almacena relaciones persona-cuenta

### Condiciones de Negocio (SÍ son condiciones)
Estas consultan/verifican datos EN esas tablas:

- ❌ **SALDO_DV01 > 1000€** → Verifica saldo en DV01
- ❌ **TIENE_POSICIONES_Q48 >= N** → Cuenta posiciones en Q48
- ❌ **TIPO_MOVIMIENTO_VA37 = X** → Filtra por tipo en VA37
- ❌ **CANTIDAD_TITULARES = N** → Cuenta titulares en PE1601
