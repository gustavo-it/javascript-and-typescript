// string, number, undefined, null, boolean, symbol
const nome = 'nome'; // string
const nome1 = "nome 1"; // string
const nome2 = `nome 2`; // string
const num = 10; // number
const num2 = 10.123123; //number
let nomeAluno; // undefined = não aponta para local nenhum na memória
let sobrenomeAlune = null; // Nulo -> Não aponta para local nenhum na memória
// null -> utilizado quando queremos desconfigurar uma variável
// ou seja, tirar o valor dela.

const aprovado = true; // boolean = true ou false (lógico)

console.log(typeof(aprovado));
console.log(typeof aprovado, aprovado); // Mostra o tipo do dado e valor

/*
Dado por referência ocorre quando, por exemplo, você tem duas variáveis
(a, b) a variável b é uma referência de a. let b = a
quando você adiciona um valor na variável b, é adicionado também na variável a
*/