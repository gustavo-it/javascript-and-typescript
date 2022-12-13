let num1 = 9.54578;

// Arredondar um número para baixo
let num2 = Math.floor(num1);
console.log(num2);

// Arredondar um número para cima
let num3 = Math.ceil(9.54578);
console.log(num3);

// Arredondar o número para o mais próximo
let num4 = Math.round(9.562345);
console.log(num4);

// Obter o maior número de uma lista
console.log(Math.max(1, 2, 3, 4, 5, 45654, 452));

// Obter o menor número de uma lista
console.log(Math.min(1, 2, 3, 4, 5, 45654, 452));

// Gerando números aleatórios
// console.log(Math.random());
const aleatorio = Math.random() * (10 - 5) + 5; // Gerando número aleatório entre 10 e 5
console.log(aleatorio);

// Algum número dividido por 0, em javascript, será retornado um valor infinity