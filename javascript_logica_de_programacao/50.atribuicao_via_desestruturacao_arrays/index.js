let [a, b, c] = [1, 2, 3];
// o que está do lado esquerdo do sinal de igual, é a desestruturação
console.log(a, b, c);

const numeros = [5, 6, 7];
[a, b, c] = numeros;
console.log(a, b, c);


// Podemos arrancar coisas do array e jogar em uma variável
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumber, segundoNumber, ...resto] = numbers;
// Atribuição via desestruturação
// Para cada item do array, estamos pegando um elemento e adicionando nas variáveis
console.log(primeiroNumber, segundoNumber);
console.log(resto);

// Pegamos o resto do array passando 3 pontos e em seguida o nome da variável
// que vai receber o resto.

// pulando valores
const [um, ,tres, ,cinco] = numbers;
console.log(um, tres, cinco);

// array dentro de array
const lista = [[1, 2, 3], [4, 5, 6]];
console.log(lista[1][1]); // retorna o número 5

// via desestruturação
const [,[,,seis]] = lista;
// estamos pegando o segundo indice da lista
// pulando o primeiro e segundo valor e pegando somente o terceiro valor
console.log(seis);