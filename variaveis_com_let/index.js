let nome = 'Fernanda Montenegro'
// Declarando uma variável com let

var outro_nome = 'Fernanda Beltrão'
// Declarando uma variável com var (mais antigo)

console.log('Nome:', nome, 'idade: 22')
console.log('Nome:', outro_nome, 'idade: 22')

let nome_qualquer;
/* Estou reservando uma variável e não estou colocando nenhum valor nela
   Assim você pode sobrescrever a variável, caso seja necessário.
*/
nome_qualquer = 'Declarando a variável'
// Inicializando a variável após reservar

nome_qualquer = 'sobrescrevendo o valor'
// Sobrescrevendo o nome da variável

/*
Uuma coisa que não posso fazer é redeclarar a variável com let.
você não pode fazer:
let nome = 'nome qualquer'

let nome = 'nome qualquer'

Você não pode fazer isso no código. É gerado um erro
*/

/* 
Não podemos criar variáveis com palavras reservedas:
let let
let console
let if

É gerado SyntaxError

As variáveis são Case-sensitive, ou seja, letra maiúscula e minúscula
fazem diferença
*/

let nomeClinte = 'cliente 1'
let nomeclient = 'cliente 2'
// Estás variáveis são diferentes

// NÃO UTILIZE VAR, UTILIZE LET