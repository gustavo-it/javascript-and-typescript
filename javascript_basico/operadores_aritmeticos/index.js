/* Operadores Aritméticos 
+ adição / Concatenação
- subtração
* multiplicação
/ divisão
% Resto da divisão
*/
const num1 = 10;
const num2 = 5;
console.log(num1 + num2);
console.log(num1 * num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 ** num2); // Exponenciação
console.log(num1 % num2);  // Retorna o resto da divisão

let contador = 1;
contador++; // Incrimento aqui primeiro ele retorna o valor de pois faz o calculo
++contador; // aqui primeiro ele faz a conta e depois retorna o valor
// Não podemos utilizar o incremento em uma constante
console.log(contador);
--contador; // Decremento
console.log(contador);

// Incremento mais de 1
// Chamados de operadores de atribuição
const passo = 10;
contador = contador + passo;
console.log(contador);
contador += passo;  // contador = contador + passo(10)
console.log(contador);
contador *= passo;
console.log(contador);

// NaN - Not a number
const nome = 'Teste';
console.log(contador * nome);

const number = parseInt('5'); // Converte essa string em um inteiro
console.log(typeof number);
const number2 = parseFloat('5.2'); // Converte essa string em um float
console.log(number + number2);