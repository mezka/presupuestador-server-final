const dayjs = require('dayjs');

function numeroALetras(num, currency) {

  function Unidades(num) {
    switch (num) {
      case 1: return 'UN';
      case 2: return 'DOS';
      case 3: return 'TRES';
      case 4: return 'CUATRO';
      case 5: return 'CINCO';
      case 6: return 'SEIS';
      case 7: return 'SIETE';
      case 8: return 'OCHO';
      case 9: return 'NUEVE';
    }
    return '';
  }

  function Decenas(num) {
    let decena = Math.floor(num / 10);
    let unidad = num - (decena * 10);
    switch (decena) {
      case 1:
        switch (unidad) {
          case 0: return 'DIEZ';
          case 1: return 'ONCE';
          case 2: return 'DOCE';
          case 3: return 'TRECE';
          case 4: return 'CATORCE';
          case 5: return 'QUINCE';
          default: return 'DIECI' + Unidades(unidad);
        }
      case 2:
        switch (unidad) {
          case 0: return 'VEINTE';
          default: return 'VEINTI' + Unidades(unidad);
        }
      case 3: return DecenasY('TREINTA', unidad);
      case 4: return DecenasY('CUARENTA', unidad);
      case 5: return DecenasY('CINCUENTA', unidad);
      case 6: return DecenasY('SESENTA', unidad);
      case 7: return DecenasY('SETENTA', unidad);
      case 8: return DecenasY('OCHENTA', unidad);
      case 9: return DecenasY('NOVENTA', unidad);
      case 0: return Unidades(unidad);
    }
  }

  function DecenasY(strSin, numUnidades) {
    if (numUnidades > 0)
      return strSin + ' Y ' + Unidades(numUnidades)
    return strSin;
  }

  function Centenas(num) {
    let centenas = Math.floor(num / 100);
    let decenas = num - (centenas * 100);

    switch (centenas) {
      case 1:
        if (decenas > 0)
          return 'CIENTO ' + Decenas(decenas);
        return 'CIEN';
      case 2: return 'DOSCIENTOS ' + Decenas(decenas);
      case 3: return 'TRESCIENTOS ' + Decenas(decenas);
      case 4: return 'CUATROCIENTOS ' + Decenas(decenas);
      case 5: return 'QUINIENTOS ' + Decenas(decenas);
      case 6: return 'SEISCIENTOS ' + Decenas(decenas);
      case 7: return 'SETECIENTOS ' + Decenas(decenas);
      case 8: return 'OCHOCIENTOS ' + Decenas(decenas);
      case 9: return 'NOVECIENTOS ' + Decenas(decenas);
    }
    return Decenas(decenas);
  }

  function Seccion(num, divisor, strSingular, strPlural) {
    let cientos = Math.floor(num / divisor)
    let resto = num - (cientos * divisor)

    let letras = '';

    if (cientos > 0)
      if (cientos > 1)
        letras = Centenas(cientos) + ' ' + strPlural;
      else
        letras = strSingular;

    if (resto > 0)
      letras += '';

    return letras;
  }

  function Miles(num) {
    let divisor = 1000;
    let cientos = Math.floor(num / divisor)
    let resto = num - (cientos * divisor)

    let strMiles = Seccion(num, divisor, 'UN MIL', 'MIL');
    let strCentenas = Centenas(resto);

    if (strMiles == '')
      return strCentenas;

    return strMiles + ' ' + strCentenas;
  }
  function Millones(num) {
    let divisor = 1000000;
    let cientos = Math.floor(num / divisor)
    let resto = num - (cientos * divisor)

    let strMillones = Seccion(num, divisor, 'UN MILLON', 'MILLONES');
    let strMiles = Miles(resto);

    if (strMillones == '')
      return strMiles;

    return strMillones + ' ' + strMiles;
  }

  currency = currency || {};

  let data = {
    numero: num,
    enteros: Math.floor(num),
    centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
    letrasCentavos: '',
    letrasMonedaPlural: currency.plural || 'PESOS',//'PESOS', 'Dólares', 'Bolívares', 'etcs'
    letrasMonedaSingular: currency.singular || 'PESO', //'PESO', 'Dólar', 'Bolivar', 'etc'
    letrasMonedaCentavoPlural: currency.centPlural || 'CENTAVOS',
    letrasMonedaCentavoSingular: currency.centSingular || 'CENTAVO'
  };

  if (data.centavos > 0) {
    data.letrasCentavos = 'CON ' + (function () {
      if (data.centavos == 1)
        return Millones(data.centavos) + ' ' + data.letrasMonedaCentavoSingular;
      else
        return Millones(data.centavos) + ' ' + data.letrasMonedaCentavoPlural;
    })();
  };

  if (data.enteros == 0)
    return 'CERO ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
  if (data.enteros == 1)
    return Millones(data.enteros) + ' ' + data.letrasMonedaSingular + ' ' + data.letrasCentavos;
  else
    return Millones(data.enteros) + ' ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
}

module.exports = {
  createNewEstimateWithTemplateProperties(estimate) {

    function createNewEstimateItemWithTemplateProperties(estimateitem) {

      const unitpricewithdiscount = (100 - estimateitem.discount) / 100 * estimateitem.unitprice;
      const totalitemprice = estimateitem.quantity * unitpricewithdiscount;

      return { ...estimateitem, unitpricewithdiscount, totalitemprice };
    };

    estimate.estimateitems = estimate.estimateitems.map(estimateitem => createNewEstimateItemWithTemplateProperties(estimateitem));

    const estimateSubtotalAndTotalDiscount = estimate.estimateitems.reduce((obj, estimateitem) => {

      obj.subtotal += estimateitem.totalitemprice;
      obj.totaldiscount += estimateitem.totalitemprice - (estimateitem.quantity * estimateitem.unitpricewithdiscount);
      return obj;
    }, { subtotal: 0, totaldiscount: 0 });

    const totaltax = estimateSubtotalAndTotalDiscount.subtotal * (estimate.client.taxpercent / 100);
    const total = estimateSubtotalAndTotalDiscount.subtotal + totaltax;
    const totalaswords = numeroALetras(total);
    const createdAt = dayjs(estimate.createdAt).format('DD/MM/YYYY');
    const updatedAt = dayjs(estimate.updatedAt).format('DD/MM/YYYY');
    const validUntil = dayjs(estimate.updatedAt).add(estimate.validFor).format('DD/MM/YYYY');

    return { ...estimate, ...estimateSubtotalAndTotalDiscount, totaltax, total, totalaswords, createdAt, updatedAt, validUntil};
  },
};