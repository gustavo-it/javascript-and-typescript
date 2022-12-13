let num1 = 14.5454545; // number
let num2 = 2.5; // number

// Temporariamente convertendo o num1 em string
console.log(num1.toString() + num2);

// alterando o valor de num1 para strig
// num1 = num1.toString();

// transformando em binário
// console.log(num1.toString(2));

// Arredondar um número, passando quantas casas decimais queremos exibir
console.log(num1.toFixed(2));

// Verificando se é um número inteiro (retorna True ou False)
console.log(Number.isInteger(num1));

// Verificando se um cálculo é NaN (is not a number)
let tempo = num1 * '5';
console.log(Number.isNaN(tempo));

// Fazendo um calculo de números flutuantes
// Nesse caso ele não vai retornar o número correto. Irá retornar '0,7999999'
// Para resolver isso, use o parseFloat, fixando as casas decimais
let num3 = 0.7;
let num4 = 0.1;

num3 += num4;
num3 = parseFloat(num3.toFixed(2));
console.log(num3);

// Outra maneira de resolver isso é não fazer cálculos com números flutuantes
num5 = 0.7;
num6 = 0.1;

// Transformamos em inteiro e dividimos por 100
num3 = ((num5 * 100) + (num6 * 100)) / 100;
console.log(num3);
