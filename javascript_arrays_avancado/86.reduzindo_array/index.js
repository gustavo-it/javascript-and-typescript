// Reduce - Reduzindo Arrays

// Ela é mais utilizada para reduzir o array em um único elemento
// também recebe uma função de callback
// reduce recebe no primeiro parâmetro o acumulador
// Em seguida recebe outros parâmetros como indice, array, valor
// É possível passar um valor inicial para o acumulador

// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)
const numeros = [1, 2, 3, 400, 4, 5, 6, 7, 8, 9, 10, 50, 100, 30, 20];


// Somando todos os números
// Por último estamos passando um valor inicial para acumulador
const total = numeros.reduce((acumulador, valor) => acumulador+=valor, 0);
console.log(total);

// Retorne um array com os pares (filter)
const pares = numeros.filter(valor => valor % 2 === 0);
console.log(pares);

// Retorne um array com o dobro dos valores (map)
const dobro = numeros.map(valor => valor * 2);
console.log(dobro);

// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Maria', idade: 32},
    {nome: 'Fernanda', idade: 19},
    {nome: 'Antonieta', idade: 33},
    {nome: 'Rosana', idade: 23},
    {nome: 'doda', idade: 60},
    {nome: 'josi', idade: 58}
];

const old = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(old);