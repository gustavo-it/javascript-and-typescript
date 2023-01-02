// Map - Mapeando o array

// Map altera o valor do array
// Ele pega o valor do array original e altera em um novo array
// Map retorna um novo array
// Recebe uma função de callback
// É bem parecido com as regras do filter
// MAP SEMPRE VAI TER O MESMO TAMANHO DO ARRAY ORIGINAL

// Dobre os números
const numeros = [1, 2, 3, 400, 4, 5, 6, 7, 8, 9, 10, 50, 100, 30, 20];

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Maria', idade: 32},
    {nome: 'Fernanda', idade: 19},
    {nome: 'Antonieta', idade: 33},
    {nome: 'Rosana', idade: 23},
    {nome: 'doda', idade: 60},
    {nome: 'josi', idade: 58}
];

// Dobrando o valor do array numeros
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

// Retornando uma lista com nome
const nomePessoas = pessoas.map(valor => valor.nome);
console.log(nomePessoas);

// Retornando um objeto com a idade
const idade = pessoas.map(valor => ({ idade: valor.idade }));
console.log(idade);

// Adicionando o id através do indice, adicionando + 1 para não ter id = 0
const idPessoas = pessoas.map((valor, indice) => ({id: indice + 1, nome: valor.nome, idade: valor.idade}));
console.log(idPessoas);
