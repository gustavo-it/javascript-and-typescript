// Filter + Map + Reduce

// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [1, 2, 3, 400, 4, 5, 6, 7, 8, 9, 10, 50, 100, 30, 20];

const resultado = numeros.filter(valor => valor % 2 === 0).map(
valor => valor * 2
).reduce((acumulador, valor) => acumulador += valor);
console.log(resultado);

// Os resultados

// Pares
// 2, 400,   4,  6,  8,
//   10,  50, 100, 30, 20

// dobrando os valores
// 4, 800,   8, 12, 16,
//   20, 100, 200, 60, 40

// soma
// 1260

// Ou seja, estamos pegando os valores pares, dobrando e somando tudo no final