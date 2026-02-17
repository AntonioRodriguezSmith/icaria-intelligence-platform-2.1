╔═══════════════════════════════════════════════════════════════╗
║                      QUICK WINS                               ║
║              (Alto impacto, bajo esfuerzo)                    ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  🎯 QUICK WIN #1: Test CF                                    ║
║  ├─ Tabla: MF1301                                            ║
║  ├─ Campo: `MF1301_TIPOTEST = 'CF'`                          ║
║  ├─ SQL simple: `SELECT * FROM MF1301 WHERE MF1301_TIPOTEST = 'CF'`      ║
║  ├─ Esfuerzo estimado: 8-12 horas                            ║
║  ├─ Impacto: 52/54 casos (96%)                               ║
║                                                               ║
║  🎯 QUICK WIN #2: Test TC                                    ║
║  ├─ Tabla: MF1301                                            ║
║  ├─ Campo: `MF1301_TIPOTEST = 'TC'`                          ║
║  ├─ SQL simple: `SELECT * FROM MF1301 WHERE MF1301_TIPOTEST = 'TC'`      ║
║  ├─ Esfuerzo estimado: 8-12 horas                            ║
║  ├─ Impacto: 52/54 casos (96%)                               ║
║                                                               ║
║  🎯 QUICK WIN #3: Saldo DV01 > 1000€                         ║
║  ├─ Tablas: `KC11` (enlace) + `DV01` (saldo)                 ║
║  ├─ SQL: `SELECT k.*, d.* FROM KC11 k JOIN DV01 d ON k.dv01_id = d.id WHERE d.saldo > 1000`                ║
║  ├─ Esfuerzo estimado: 16-20 horas (requiere JOIN)           ║
║  ├─ Impacto: 48/54 casos (89%)                               ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║  TOTAL QUICK WINS:                                            ║
║  • Esfuerzo estimado: 32-44 horas (≈1 semana)                 ║
║  • Impacto esperado: +45 puntos cobertura                     ║
║  • Notas: implementar primero Test CF/TC y luego DV01 JOIN   ║
╚═══════════════════════════════════════════════════════════════╝

---

Sugerencia de integración técnica
- Añadir detectores en `detector/matching/matching_engine.js` que consulten los campos de `MF1301` y `DV01` cuando exista conexión a datos.
- Mientras no haya conexión directa, usar las keywords actuales para identificar casos y marcar para revisión automática.
