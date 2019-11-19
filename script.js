var resultado;
var acumulador1 = '';
var acumulador2 = '';
var operacion = '';


function setearOperador(operador) {
  resultado = hacerOperacion(acumulador1, acumulador2, operador);
  if (resultado)
    actualizarDisplay(resultado);

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

function hacerOperacion(acu1, acu2, oper) {
  let resultadoParcial;
  if (acu1 && acu2) {
    var numeroParseado1 = parseFloat(acu1);
    var numeroParseado2 = parseFloat(acu2);
    resultadoParcial = Operacion(numeroParseado1, numeroParseado2, oper)
  }
  return resultadoParcial
}

function Operacion(numeroParseado1, numeroParseado2, oper){
  let resultadoParcial
  switch (oper) {
    case '+':
      resultadoParcial = numeroParseado1 + numeroParseado2;
      break;
    case '-':
      resultadoParcial = numeroParseado1 - numeroParseado2;
      break;
    case '*':
      resultadoParcial = numeroParseado1 - numeroParseado2;
      break;
    case '/':
      resultadoParcial = numeroParseado1 / numeroParseado2;
      break;
  }

  return resultadoParcial
}

function resetear() {
  acumulador1 = '';
  acumulador2 = '';
  operacion = '';
  actualizarDisplay('');
}
