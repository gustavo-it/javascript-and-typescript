// Filter - Filtrando o array

// Filter -> Sempre retorna um array, com a mesma quantidade de elementos
// ou menos, já que estamos filtrando.

const numeros = [1, 2, 3, 400, 4, 5, 6, 7, 8, 9, 10, 50, 100, 30, 20];

// Retornando números maiores que 10

// function callbackFilter(valor) {
//     return valor > 10;
// }

// Utilizando arrow function
// Como temos só uma linha, não precisamos utilizar o return;
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

// filter() recebe uma função de callback
// filter() requer que você retorne ou verdadeiro ou falso
// verdadeiro -> para que você queira que esse elemento seja colocado no novo array
// falso -> para quando você não quer.

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo o nome termina com a
const pessoas = [
    {nome: 'Maria', idade: 32},
    {nome: 'Fernanda', idade: 19},
    {nome: 'Antonieta', idade: 33},
    {nome: 'Rosana', idade: 23},
    {nome: 'doda', idade: 60},
    {nome: 'josi', idade: 58}
];

// Retorne as pessoas que tem o nome com 5 letras ou mais
const pessoasComNomeGrande = pessoas.filter(objeto => objeto.nome.length >= 5);
console.log(pessoasComNomeGrande);

// Retorne as pessoas com mais de 50 anos
const pessoasMaisVelhas = pessoas.filter(objeto => objeto.idade > 50);
console.log(pessoasMaisVelhas);

// Retorne as pessoas cujo o nome termina com a
// Colocamos a string toda em letra minúscula
// utilizamos endsWith() para verificar se a string termina com a letra a
const pessoasTerminamComA = pessoas.filter(objeto => objeto.nome.toLowerCase().endsWith('a'));
console.log(pessoasTerminamComA);