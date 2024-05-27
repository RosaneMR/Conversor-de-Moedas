var valorEmDolar = 27;
var cotacaoDoDolar = 5.32;
var valorEmReal = valorEmDolar * cotacaoDoDolar;
valorEmReal = parseFloat(valorEmReal.toFixed(2)); // Converter de volta para número
alert("R$ " + valorEmReal);
