var resultado;
var acumulador1 = '';
var acumulador2 = '';
var operacion = '';


function setearOperador(operador) {
  hacerOperacion();

  if (operador && resultado) {
    acumulador1 = resultado;
    acumulador2 = '';
  }
  operacion = operador;
}

function setearValor(valor) {
  if (!operacion) {
    acumulador1 += valor;
    actualizarDisplay(acumulador1);
  } else {
    acumulador2 += valor;
    actualizarDisplay(acumulador2);
  }
}

function actualizarDisplay(nuevoValor) {
  console.log(nuevoValor)
  var display = document.getElementById('viewer');
  display.innerText = nuevoValor;
}

function hacerOperacion() {
  if (acumulador1 && acumulador2) {
    var numeroParseado1 = parseFloat(acumulador1);
    var numeroParseado2 = parseFloat(acumulador2);

    switch (operacion) {
      case '+':
        resultado = numeroParseado1 + numeroParseado2;
        break;
      case '-':
        resultado = numeroParseado1 - numeroParseado2;
        break;
      case '*':
        resultado = numeroParseado1 * numeroParseado2;
        break;
      case '/':
        resultado = numeroParseado1 / numeroParseado2;
        break;
    }

    actualizarDisplay(resultado);
  }
}

function resetear() {
  acumulador1 = '';
  acumulador2 = '';
  operacion = '';
  actualizarDisplay('');
}
