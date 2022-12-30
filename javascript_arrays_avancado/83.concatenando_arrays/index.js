// Concatenando arrays

// Utilizando concat
const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];
const numeros3 = numeros1.concat(numeros2);
console.log(numeros3);

// Com spread operator
const numeros4 = [...numeros1, ...numeros2];
console.log(numeros4);