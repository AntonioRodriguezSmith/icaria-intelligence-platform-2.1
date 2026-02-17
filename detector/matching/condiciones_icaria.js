/**
 * PASO 2: DICCIONARIO DE CONDICIONES ICARIA
 * Catálogo de condiciones modeladas y no modeladas para detección de gaps
 */

const CONDICIONES_ICARIA = {
    // PERSONA
    'ES_PERSONA_FISICA': {
        codigo: 'ES_PERSONA_FISICA',
        nombre: 'Es persona física',
        dominio: 'PERSONA',
        parametrizable: false,
        keywords: ['usuario particular', 'particular']
    },
    'ES_PERSONA_JURIDICA': {
        codigo: 'ES_PERSONA_JURIDICA',
        nombre: 'Es persona jurídica',
        dominio: 'PERSONA',
        parametrizable: false,
        keywords: ['usuario empresa', 'empresa', 'cif']
    },
    'TIPO_DE_IDENTIFICACION': {
        codigo: 'TIPO_DE_IDENTIFICACION',
        nombre: 'Tipo de identificación',
        dominio: 'PERSONA',
        parametrizable: true,
        parametros: ['DNI', 'NIE', 'CIF', 'TIE', 'PASAPORTE'],
        keywords: ['cif', 'nif', 'dni']
    },
    
    // VALORES
    'VALORES_TIPO_CLASIFICACION_MIFID': {
        codigo: 'VALORES_TIPO_CLASIFICACION_MIFID',
        nombre: 'Clasificación MIFID',
        dominio: 'VALORES',
        parametrizable: true,
        parametros: ['M' /*Minorista*/, 'P' /*Profesional*/, 'C' /*Contraparte*/],
        keywords: ['mifid', 'minorista', 'profesional', 'contraparte']
    },
    
    // CUENTAS
    'TIENE_CUENTA_VALOR': {
        codigo: 'TIENE_CUENTA_VALOR',
        nombre: 'Tiene cuenta de valores',
        dominio: 'CUENTAS',
        parametrizable: true,
        parametros: [0, 1, 2, 3, '>=3', '>0'],
        keywords: ['cuenta valores', 'cuenta de valores', 'cuentas de valores']
    },
    
    // CONTRATOS
    'TIENE_FIRMA_EN_CONTRATO': {
        codigo: 'TIENE_FIRMA_EN_CONTRATO',
        nombre: 'Tiene firma en contrato',
        dominio: 'CONTRATOS',
        parametrizable: false,
        keywords: ['firma indistinta', 'firma en contrato']
    }
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
        nombre: 'Saldo en cuenta efectivo DV01',
        tabla: 'DV01',
        keywords: ['saldo', 'dv01', 'cuenta efectivo', '1.000€', '1000€']
    },
    'CANTIDAD_TITULARES': {
        nombre: 'Cantidad de titulares',
        tabla: 'PE1601',
        keywords: ['solo titular', 'un solo titular', 'más de 1 titular', 'varios titulares', '2 titulares', '3 titulares']
    },
    'TIPO_CUENTA_VALORES': {
        nombre: 'Tipo de cuenta valores',
        tabla: 'KC11',
        keywords: ['ebolsa', 'va 00026', 'bs bolsa 10', 'va 00005', 'activo bank']
    },
    'PERFIL_USUARIO': {
        nombre: 'Perfil de usuario',
        tabla: 'Desconocida',
        keywords: ['perfil sp', 'perfil tr', 'perfil oro', 'perfil broker', 'perfil ebolsa', 'perfil trader', 'perfil bolsa']
    },
    'KC11_RELACION': {
        nombre: 'Relación en KC11',
        tabla: 'KC11',
        keywords: ['existe la cuenta valores en la kc11', 'no existe la cuenta valores en la kc11', 'tabla de cuentas relacionadas']
    },
    'POSICIONES_ISIN': {
        nombre: 'Posiciones ISIN',
        tabla: 'Q48',
        keywords: ['isin', 'dchos', 'posición en estos isin']
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
        keywords: ['autorizado', 'banca a distancia', 'mismo que el de banca a distancia']
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
    }
};

// Exportar para uso en scripts de matching
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONDICIONES_ICARIA, CONDICIONES_NO_MODELADAS };
}
