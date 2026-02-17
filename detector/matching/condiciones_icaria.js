/**
 * PASO 2: DICCIONARIO DE CONDICIONES ICARIA
 * Catálogo de condiciones modeladas y no modeladas para detección de gaps
 */

// Construido a partir de condiciones/CondicionesIcaria.md
const CONDICIONES_ICARIA = {
    // PERSONA
    'DOC_VIGENTE': { codigo: 'DOC_VIGENTE', nombre: 'Documento Vigente, no caducado (>15 dias de validez)', dominio: 'PERSONA', parametrizable: false },
    'SI_IDENTIFICACION_DIGITALIZADA': { codigo: 'SI_IDENTIFICACION_DIGITALIZADA', nombre: 'Identificacion Digitalizada', dominio: 'PERSONA', parametrizable: false },
    'NO_IDENTIFICACION_DIGITALIZADA': { codigo: 'NO_IDENTIFICACION_DIGITALIZADA', nombre: 'Identificacion no digitalizada', dominio: 'PERSONA', parametrizable: false },
    'SI_TIENE_TLF_INFORMADO': { codigo: 'SI_TIENE_TLF_INFORMADO', nombre: 'Persona tiene teléfono informado', dominio: 'PERSONA', parametrizable: false },
    'ES_PERSONA_MAYOR_18': { codigo: 'ES_PERSONA_MAYOR_18', nombre: 'Persona mayor de 18 años', dominio: 'PERSONA', parametrizable: false },
    'ES_PERSONA_FISICA': { codigo: 'ES_PERSONA_FISICA', nombre: 'Es Persona Fisica', dominio: 'PERSONA', parametrizable: false },
    'ES_AUTONOMO': { codigo: 'ES_AUTONOMO', nombre: 'Es Autunomo', dominio: 'PERSONA', parametrizable: false },
    'ES_PERSONA_JURIDICA': { codigo: 'ES_PERSONA_JURIDICA', nombre: 'Es Persona Juridica', dominio: 'PERSONA', parametrizable: false },
    'SI_TIENE_EMAIL_INFORMADO': { codigo: 'SI_TIENE_EMAIL_INFORMADO', nombre: 'Persona tiene email informado', dominio: 'PERSONA', parametrizable: false },
    'NO_TIENE_EMAIL_INFORMADO': { codigo: 'NO_TIENE_EMAIL_INFORMADO', nombre: 'Persona no tiene email informado', dominio: 'PERSONA', parametrizable: false },
    'ES_PERSONA_VIVA': { codigo: 'ES_PERSONA_VIVA', nombre: 'La persona esta viva o la sociedad sigue activa', dominio: 'PERSONA', parametrizable: false },
    'DOC_CADUCADO': { codigo: 'DOC_CADUCADO', nombre: 'Persona con documento caducado', dominio: 'PERSONA', parametrizable: false },
    'TIPO_DE_IDENTIFICACION': { codigo: 'TIPO_DE_IDENTIFICACION', nombre: 'Tipo de identificacion (DNI,NIE,CIF,TIE,PASAPORTE)', dominio: 'PERSONA', parametrizable: true, parametros: ['DNI','NIE','CIF','TIE','PASAPORTE'] },
    'ES_PERSONA_FISICA_RESIDENTE': { codigo: 'ES_PERSONA_FISICA_RESIDENTE', nombre: 'Es Persona fisica residente', dominio: 'PERSONA', parametrizable: false },

    // CUENTAS
    'TIENE_CUENTA_VISTA': { codigo: 'TIENE_CUENTA_VISTA', nombre: 'Tiene cuenta vista', dominio: 'CUENTAS', parametrizable: false },
    'TIENE_MAS_DE_X_CUENTAS_VISTA_PARAMETRO': { codigo: 'TIENE_MAS_DE_X_CUENTAS_VISTA_PARAMETRO', nombre: 'Tiene mas de X cuentas vistas (dada por parametro)', dominio: 'CUENTAS', parametrizable: true },
    'TIENE_IGUAL_CUENTAS_VISTA_PARAMETRO': { codigo: 'TIENE_IGUAL_CUENTAS_VISTA_PARAMETRO', nombre: 'Tiene un numero de cuentas vistas (dada por parametro)', dominio: 'CUENTAS', parametrizable: true },
    'TIENE_MENOS_DE_X_CUENTAS_VISTA_PARAMETRO': { codigo: 'TIENE_MENOS_DE_X_CUENTAS_VISTA_PARAMETRO', nombre: 'Tiene menos de X cuentas vistas (dada por parametro)', dominio: 'CUENTAS', parametrizable: true },
    'NO_TIENE_CUENTA_VISTA': { codigo: 'NO_TIENE_CUENTA_VISTA', nombre: 'No tiene cuenta vista', dominio: 'CUENTAS', parametrizable: false },
    'TIENE_MOVIMIENTOS_EN_CUENTA': { codigo: 'TIENE_MOVIMIENTOS_EN_CUENTA', nombre: 'tiene movimientos en cuenta en los ultimos 6 meses', dominio: 'CUENTAS', parametrizable: false },
    'NO_TIENE_MOVIMIENTOS_EN_CUENTA': { codigo: 'NO_TIENE_MOVIMIENTOS_EN_CUENTA', nombre: 'No tiene movimientos en cuenta', dominio: 'CUENTAS', parametrizable: false },
    'TIENE_MAS_DE_X_MOV_EN_CUENTA_PARAMETRO': { codigo: 'TIENE_MAS_DE_X_MOV_EN_CUENTA_PARAMETRO', nombre: 'Tiene mas de X Movimientos en cuenta (dada por parametro)  en los unltimos 6 meses', dominio: 'CUENTAS', parametrizable: true },
    'TIENE_MENOS_DE_X_MOV_EN_CUENTA_PARAMETRO': { codigo: 'TIENE_MENOS_DE_X_MOV_EN_CUENTA_PARAMETRO', nombre: 'Tiene menos de X Movimientos en cuenta (dada por parametro)  en los ultimos 6 meses', dominio: 'CUENTAS', parametrizable: true },
    'TIENE_CUENTA_CIALP': { codigo: 'TIENE_CUENTA_CIALP', nombre: 'Tiene Cuenta de Ahorro CIALP', dominio: 'CUENTAS', parametrizable: false },
    'NO_TIENE_CUENTA_CIALP': { codigo: 'NO_TIENE_CUENTA_CIALP', nombre: 'No tiene Cuenta de Ahorro CIALP', dominio: 'CUENTAS', parametrizable: false },
    'TIPO_SALDO_DV_PARAMETRIZADO': { codigo: 'TIPO_SALDO_DV_PARAMETRIZADO', nombre: 'Saldo cuenta vista (negativo/positivo/indiferente)', dominio: 'CUENTAS', parametrizable: true },
    'TIENE_CUENTA_VISTA_INACTIVA': { codigo: 'TIENE_CUENTA_VISTA_INACTIVA', nombre: 'Tiene cuenta vista Inactiva', dominio: 'CUENTAS', parametrizable: false },
    'TIENE_FIRMA_EN_CONTRATO': { codigo: 'TIENE_FIRMA_EN_CONTRATO', nombre: 'Tiene Firma Conjunta o individual en Contrato', dominio: 'CUENTAS', parametrizable: false },
    'TIENE_CUENTA_VISTA_EMPRESA': { codigo: 'TIENE_CUENTA_VISTA_EMPRESA', nombre: 'Tiene Cuenta Vista Empresa', dominio: 'CUENTAS', parametrizable: false },
    'MOVIMIENTOS_DOC_ASOCIADO': { codigo: 'MOVIMIENTOS_DOC_ASOCIADO', nombre: 'Tiene documento adjunto al movimiento', dominio: 'CUENTAS', parametrizable: false },
    'TIENE_CUENTA_VALOR': { codigo: 'TIENE_CUENTA_VALOR', nombre: 'Tiene Cuenta Valor', dominio: 'CUENTAS', parametrizable: false },
    'TIENE_CUENTA_AHORRO': { codigo: 'TIENE_CUENTA_AHORRO', nombre: 'Tiene Cuenta ahorro', dominio: 'CUENTAS', parametrizable: false },
    'TIENE_MOVIMIENTOS_CUENTA_FECHA': { codigo: 'TIENE_MOVIMIENTOS_CUENTA_FECHA', nombre: 'Número de movimientos en cuenta en una fecha menor a (parametro en dias)', dominio: 'CUENTAS', parametrizable: true },
    'TIENE_MOVIMIENTOS_X_DIAS': { codigo: 'TIENE_MOVIMIENTOS_X_DIAS', nombre: 'Movimientos en cuenta desde (parametro en dias)', dominio: 'CUENTAS', parametrizable: true },
    'TIENE_MAS_DE_X_CUENTAS_VISTA_EMPRESA_PARAMETRO': { codigo: 'TIENE_MAS_DE_X_CUENTAS_VISTA_EMPRESA_PARAMETRO', nombre: 'Tiene mas de X cuentas vistas Empresa (dada por parametro)', dominio: 'CUENTAS', parametrizable: true },
    'TIENE_IGUAL_CUENTAS_VISTA_EMPRESA_PARAMETRO': { codigo: 'TIENE_IGUAL_CUENTAS_VISTA_EMPRESA_PARAMETRO', nombre: 'Tiene un nUmero de cuentas vistas Empresa (dada por parametro)', dominio: 'CUENTAS', parametrizable: true },
    'TIENE_MENOS_DE_X_CUENTAS_VISTA_EMPRESA_PARAMETRO': { codigo: 'TIENE_MENOS_DE_X_CUENTAS_VISTA_EMPRESA_PARAMETRO', nombre: 'Tiene menos de X cuentas vistas Empresa (dada por parametro)', dominio: 'CUENTAS', parametrizable: true },
    'TIENE_CUENTA_SALDO_RETENIDO': { codigo: 'TIENE_CUENTA_SALDO_RETENIDO', nombre: 'Tiene Cuenta Vista activa con saldo retenido', dominio: 'CUENTAS', parametrizable: false },
    'TIENE_BLOQUEO_CUENTA_VISTA': { codigo: 'TIENE_BLOQUEO_CUENTA_VISTA', nombre: 'Tiene cuenta vista bloqueada', dominio: 'CUENTAS', parametrizable: false },

    // BDIS / LOGIN y similares
    'TIENE_BANCA_A_DISTANCIA': { codigo: 'TIENE_BANCA_A_DISTANCIA', nombre: 'Tiene banca a distancia', dominio: 'BDIS_PARTICULAR', parametrizable: false },
    'NO_TIENE_BANCA_A_DISTANCIA': { codigo: 'NO_TIENE_BANCA_A_DISTANCIA', nombre: 'No tiene banca a distancia', dominio: 'BDIS_PARTICULAR', parametrizable: false },
    'TIPO_DE_FIRMA_DIGITAL_BSO': { codigo: 'TIPO_DE_FIRMA_DIGITAL_BSO', nombre: 'Tipo de firmas digitales por parámetro (VPTC1, VPTC2, etc.)', dominio: 'BDIS_PARTICULAR', parametrizable: true },
    'TIENE_BANCA_A_DISTANCIA_EMPRESA': { codigo: 'TIENE_BANCA_A_DISTANCIA_EMPRESA', nombre: 'Tiene banca a distancia empresa activa', dominio: 'BDIS_EMPRESAS', parametrizable: false },
    'NO_TIENE_BANCA_A_DISTANCIA_EMPRESA': { codigo: 'NO_TIENE_BANCA_A_DISTANCIA_EMPRESA', nombre: 'No tiene banca a distancia empresa', dominio: 'BDIS_EMPRESAS', parametrizable: false },
    'TIENE_BANCA_A_DISTANCIA_AUTONOMO': { codigo: 'TIENE_BANCA_A_DISTANCIA_AUTONOMO', nombre: 'Tiene banca a distancia autónomo activa', dominio: 'BDIS_AUTONOMOS', parametrizable: false },

    // LINEA CREDITO / PRODUCTO
    'TIENE_LINEA_EXPANSION_ACTIVA': { codigo: 'TIENE_LINEA_EXPANSION_ACTIVA', nombre: 'Tiene línea de crédito activa', dominio: 'LINEA_CREDITO', parametrizable: false },
    'NO_TIENE_LINEA_EXPANSION_ACTIVA': { codigo: 'NO_TIENE_LINEA_EXPANSION_ACTIVA', nombre: 'No tiene línea de crédito activa', dominio: 'LINEA_CREDITO', parametrizable: false },
    'TIENE_IGUAL_X_LINEAS_EXPANSION': { codigo: 'TIENE_IGUAL_X_LINEAS_EXPANSION', nombre: 'Tiene X líneas de crédito activas', dominio: 'LINEA_CREDITO', parametrizable: true },
    'TIENE_HIPOTECA': { codigo: 'TIENE_HIPOTECA', nombre: 'Tiene Hipoteca Activa', dominio: 'PRODUCTO', parametrizable: false },
    'TIENE_PRESTAMO_ACTIVO': { codigo: 'TIENE_PRESTAMO_ACTIVO', nombre: 'Tiene prEstamo activo', dominio: 'PRODUCTO', parametrizable: false },

    // TRABAS
    'TIENE_CONTRATOS_ACTIVOS_CON_TRABAS': { codigo: 'TIENE_CONTRATOS_ACTIVOS_CON_TRABAS', nombre: 'Tiene algun contrato activo con trabas', dominio: 'TRABAS', parametrizable: false },
    'NO_TIENE_CONTRATOS_ACTIVOS_CON_TRABAS': { codigo: 'NO_TIENE_CONTRATOS_ACTIVOS_CON_TRABAS', nombre: 'No tiene ningun contrato activo con trabas', dominio: 'TRABAS', parametrizable: false },

    // PLANES
    'TIENE_PLANES_PENSIONES_PARTICULARES': { codigo: 'TIENE_PLANES_PENSIONES_PARTICULARES', nombre: 'Tiene Plan de Pensiones Particular', dominio: 'PLANES', parametrizable: false },
    'NO_TIENE_PLAN_DE_PENSIONES': { codigo: 'NO_TIENE_PLAN_DE_PENSIONES', nombre: 'No tiene Plan de Pensiones Particular', dominio: 'PLANES', parametrizable: false },
    'TIENE_BANCA_A_DISTANCIA_PLAN_PENSIONES': { codigo: 'TIENE_BANCA_A_DISTANCIA_PLAN_PENSIONES', nombre: 'Tiene banca a distancia activa para producto Plan de Pensiones', dominio: 'PLANES', parametrizable: false },
    'TIENE_PLANES_PREVISION_ASEGURADOS': { codigo: 'TIENE_PLANES_PREVISION_ASEGURADOS', nombre: 'Tiene Plan de Prevision Asegurado', dominio: 'PLANES', parametrizable: false },

    // AVISOS Y ALERTAS
    'ES_TITULAR_ACTIVO_AVISOS_ALERTAS': { codigo: 'ES_TITULAR_ACTIVO_AVISOS_ALERTAS', nombre: 'Tiene contrato activo de avisos y alertas', dominio: 'AVISOS_Y_ALERTAS', parametrizable: false },
    'NO_TIENE_CONTRATO_AA': { codigo: 'NO_TIENE_CONTRATO_AA', nombre: 'No tiene contrato activo de avisos y alertas', dominio: 'AVISOS_Y_ALERTAS', parametrizable: false },

    // VALORES
    'VALORES_TIPO_CLASIFICACION_MIFID': { codigo: 'VALORES_TIPO_CLASIFICACION_MIFID', nombre: 'Tiene tipo de clasificación MIFID parametrizable', dominio: 'VALORES', parametrizable: true, parametros: ['M','P','C'] },

    // TARJETA
    'TIENE_TIPO_APLICACION_MOVIL_TARJETA': { codigo: 'TIENE_TIPO_APLICACION_MOVIL_TARJETA', nombre: 'Tiene Tarjeta activa en el Wallet de la aplicacion movil (Apple Pay, Google Pay, etc)', dominio: 'TARJETA', parametrizable: false },
    'TIENE_TARJETA_PAGO_ACTIVA': { codigo: 'TIENE_TARJETA_PAGO_ACTIVA', nombre: 'Tiene Tarjetas activas de tipo y titularidad parametrizable', dominio: 'TARJETA', parametrizable: true },
    'TIENE_IGUAL_TARJETAS_PAGO_ACTIVA': { codigo: 'TIENE_IGUAL_TARJETAS_PAGO_ACTIVA', nombre: 'Tiene X Tarjetas activas (dado por parametro) de tipo y titularidad parametrizable', dominio: 'TARJETA', parametrizable: true },
    'TIENE_MENOS_DE_X_TARJETAS_PAGO_ACTIVA': { codigo: 'TIENE_MENOS_DE_X_TARJETAS_PAGO_ACTIVA', nombre: 'Tiene menos de X Tarjetas activas (dado por parametro) de tipo y titularidad parametrizable', dominio: 'TARJETA', parametrizable: true },
    'TIENE_MAS_DE_X_TARJETAS_PAGO_ACTIVA': { codigo: 'TIENE_MAS_DE_X_TARJETAS_PAGO_ACTIVA', nombre: 'Tiene mas de X Tarjetas activas (dado por parametro) de tipo y titularidad parametrizable', dominio: 'TARJETA', parametrizable: true },
    'NO_TIENE_TARJETA_PAGO': { codigo: 'NO_TIENE_TARJETA_PAGO', nombre: 'No tiene tarjetas (Credito, debito, mixta, prepago)', dominio: 'TARJETA', parametrizable: false },
    'TIENE_MOVIMIENTO_TARJETA': { codigo: 'TIENE_MOVIMIENTO_TARJETA', nombre: 'Tiene movimientos en tarjeta (Credito, mixta o prepago)', dominio: 'TARJETA', parametrizable: false },
    'SALDO_DISPONIBLE_TARJETA_PAGO': { codigo: 'SALDO_DISPONIBLE_TARJETA_PAGO', nombre: 'Tiene saldo disponible en la tarjeta', dominio: 'TARJETA', parametrizable: false },
    'TIENE_TARJETA_MOVIMIENTO_CONFIRMADO': { codigo: 'TIENE_TARJETA_MOVIMIENTO_CONFIRMADO', nombre: 'Tiene movimientos en estado confirmados en tarjetas (Credito, mixta o prepago)', dominio: 'TARJETA', parametrizable: false },
    'TIENE_TARJETA_MOVIMIENTO_PENDIENTE': { codigo: 'TIENE_TARJETA_MOVIMIENTO_PENDIENTE', nombre: 'Tiene movimientos en estado pendiente en tarjetas (Credito, mixta o prepago)', dominio: 'TARJETA', parametrizable: false },
    'TIENE_TARJETA_FIRMA_SECUNDARIA_PF_PARTICULARES': { codigo: 'TIENE_TARJETA_FIRMA_SECUNDARIA_PF_PARTICULARES', nombre: 'Tiene tarjetas secundarias de particulares activas', dominio: 'BDIS_TARJETAS_SECUNDARIAS', parametrizable: false },
    'ES_AUTONOMO_TARJ_ENTREGADA_VIGENTE_ACT': { codigo: 'ES_AUTONOMO_TARJ_ENTREGADA_VIGENTE_ACT', nombre: 'Es Autonomo con tarjeta entregada, vigente y con firma', dominio: 'TARJETA', parametrizable: false },

    // SEGUROS
    'TIENE_SEGURO_VIDA': { codigo: 'TIENE_SEGURO_VIDA', nombre: 'Tiene Seguro de vida', dominio: 'SEGUROS', parametrizable: false },
    'TIENE_SEGURO_HOGAR': { codigo: 'TIENE_SEGURO_HOGAR', nombre: 'Tiene Seguro de hogar', dominio: 'SEGUROS', parametrizable: false },
    'TIENE_SEGURO_AHORRO_SABADELL': { codigo: 'TIENE_SEGURO_AHORRO_SABADELL', nombre: 'Tiene Seguro Ahorro Sabadell', dominio: 'SEGUROS', parametrizable: false },

    // OTROS
    'TIENE_TARJETA_CREDITO_ACTIVA': { codigo: 'TIENE_TARJETA_CREDITO_ACTIVA', nombre: 'Tiene tarjetas activas de Credito y tipo titularidad parametrizable', dominio: 'TARJETA', parametrizable: true },
    'TIENE_TARJETA_DEBITO_ACTIVA': { codigo: 'TIENE_TARJETA_DEBITO_ACTIVA', nombre: 'Tiene tarjetas activas de Debito y tipo titularidad parametrizable', dominio: 'TARJETA', parametrizable: true },
    'TIENE_TIPO_MOVIMIENTO_CUENTA': { codigo: 'TIENE_TIPO_MOVIMIENTO_CUENTA', nombre: 'Tipo de movimientos en cuenta', dominio: 'CUENTAS', parametrizable: false },
    'SOLO_CONTRATOS_BDIS_AA': { codigo: 'SOLO_CONTRATOS_BDIS_AA', nombre: 'Solo tiene contratos de Banca Distancia o Avisos y Alertas', dominio: 'BDIS PARTICULAR', parametrizable: false }
};

// Condiciones NO modeladas (gaps) — usado para detección y priorización
const CONDICIONES_NO_MODELADAS = {
    'TEST_CF': {
        nombre: 'Test de Capacidad Financiera',
        tabla: 'MF1301',
        keywords: ['test de capacidad financiera', 'capacidad financiera', 'pestaña "cf"']
    },
    'TEST_TC': {
        nombre: 'Test de Conveniencia',
        tabla: 'MF1301',
        keywords: ['test de conveniencia', 'conveniencia', 'complejos', 'conveniente', 'pestaña "tc"']
    },
    'SALDO_DV01': {
        nombre: 'Saldo en cuenta efectivo > X€',
        tabla: 'DV01',
        keywords: ['saldo', 'dv01', '1.000€', '1000€', 'verificar saldo']
    },
    'CANTIDAD_TITULARES': {
        nombre: 'Cantidad de titulares',
        tabla: 'PE1601',
        keywords: ['solo titular', 'un solo titular', 'más de 1 titular', 'varios titulares', '2 titulares', '3 titulares']
    },
    'TIPO_CUENTA_VALORES': {
        nombre: 'Tipo de cuenta valores',
        tabla: 'Q08/VA',
        keywords: ['ebolsa', 'va 00026', 'bs bolsa 10', 'va 00005', 'activo bank']
    },
    'PERFIL_USUARIO': {
        nombre: 'Perfil de usuario',
        tabla: 'Desconocida',
        keywords: ['perfil sp', 'perfil tr', 'perfil oro', 'perfil broker', 'perfil ebolsa', 'perfil trader', 'perfil bolsa']
    },
    'POSICIONES_Q48': {
        nombre: 'Cantidad de posiciones en cartera',
        tabla: 'Q48',
        keywords: ['cantidad de posiciones', 'como referencia q48']
    },
    'POSICIONES_ISIN': {
        nombre: 'Posiciones en ISIN específicos',
        tabla: 'Q48',
        keywords: ['isin', 'dchos', 'posición en estos isin']
    },
    'TIPOS_MOVIMIENTO_VA37': {
        nombre: 'Tipos de movimiento VA37',
        tabla: 'VA37',
        keywords: ['tipos de movimiento', 'va37', 'pestaña "tipos movimiento"']
    },
    'BLOQUEADO_RIC': {
        nombre: 'Bloqueado por RIC',
        tabla: 'Externo',
        keywords: ['bloqueado según reglamento interno de conducta', 'ric']
    },
    'OOFFS': {
        nombre: 'Ofertas (OOFFs)',
        tabla: 'Externo',
        keywords: ['ooffs', 'activen dichas ooffs']
    },
    'AUTORIZADO_BD': {
        nombre: 'Autorizado Banca a Distancia',
        tabla: 'PE70',
        keywords: ['autorizado que sea el mismo que el de banca a distancia', 'autorizado de banca a distancia']
    },
    'REPRESENTANTE_LEGAL': {
        nombre: 'Representante legal menor/incapacitado',
        tabla: 'PE18/PE70',
        keywords: ['representante legal']
    },
    'USUFRUCTUARIO': {
        nombre: 'Usufructuario',
        tabla: 'PE1601',
        keywords: ['usufructuario', "pe1601_codrelpeco = '0005'"]
    },
    'NUDO_PROPIETARIO': {
        nombre: 'Nudo propietario',
        tabla: 'PE1601',
        keywords: ['nudo propietario', "pe1601_codrelpeco = '0014'"]
    },
    'CUENTA_DIVISAS': {
        nombre: 'Cuenta en divisa (no EUR)',
        tabla: 'DV01',
        keywords: ['divisa diferente a euros', 'sea en euros']
    },
    'MULTIPLES_CUENTAS_EFECTIVO': {
        nombre: 'Múltiples cuentas de efectivo',
        tabla: 'DV01',
        keywords: ['3 cuentas de efectivo', 'más de 1 cuenta relacionada con la dv01']
    },
    'FIRMA_INDISTINTA': {
        nombre: 'Titular con firma indistinta',
        tabla: 'PE1601',
        keywords: ['firma indistinta']
    },
    'MIFID_NO_IMPRESO': {
        nombre: 'MIFID no impreso',
        tabla: 'MF01',
        keywords: ['no tenga el mifid impreso']
    },
    'BSO_ACCESO': {
        nombre: 'Acceso desde BSO',
        tabla: 'Externo',
        keywords: ['desde bso']
    }
};

// Exportar para uso en scripts de matching
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONDICIONES_ICARIA, CONDICIONES_NO_MODELADAS };
}
