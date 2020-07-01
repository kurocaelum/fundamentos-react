function gerarNumeroNaoContido(min, max, array) {
  const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;

  return array.includes(aleatorio)
    ? gerarNumeroNaoContido(min, max, array)
    : aleatorio;
}

function gerarNumeros(qtde) {
  const numeros = Array(qtde).fill(0);

  return numeros;
}

console.log(gerarNumeros(5));
// console.log(gerarNumeroNaoContido(1, 5, [2, 3]));
