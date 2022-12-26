// Exercício com lógica de programação - 01
// Escreva uma função que recebe 2 número e retorne o maior deles
function returnNumber (numberone, numbertwo) {
    Number(numberone);
    Number(numbertwo);
    let result = Math.max(numberone, numbertwo);
    return result;
}

console.log(returnNumber(112, 1222));

// Outra forma de resolver (arrow function)
const max = (a, b) => a > b ? a : b;

console.log(max(10, 50));