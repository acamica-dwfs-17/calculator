const { expect } = chai;

describe('Prueba calculadora', () =>
  it('debería multiplicar', () => {
    let resultadoFinal = 9;
    expect(hacerOperacion(3, 3, '*')).to.be.equal(resultadoFinal);
  }));

function testMultiplicar() {
  //6x8x12 = 576
  let resultado = 0;

  resultado = hacerOperacion(2, 4, '*');
  console.log(resultado);

  resultado = hacerOperacion(resultado, 2, '*');
  console.log(resultado);

  return resultado === 16;
}

function testDividir() {
  //6x8x12 = 576
  let resultado = 0;

  resultado = hacerOperacion(10, 2, '/');

  resultado = hacerOperacion(resultado, 5, '/');

  return resultado === 1;
}

function testRestar() {
  //6x8x12 = 576
  let resultado = 0;

  resultado = hacerOperacion(10, 2, '-');

  resultado = hacerOperacion(resultado, 5, '-');

  return resultado === 3;
}

function testSumar() {
  //6x8x12 = 576
  let resultado = 0;

  resultado = hacerOperacion(2, 2, '+');

  resultado = hacerOperacion(resultado, 2, '+');

  return resultado === 6;
}
