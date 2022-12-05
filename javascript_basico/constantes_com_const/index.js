// Constante é uma variável que o valor não muda segue constante
// Não podemos criar constantes com palavras reservadas
// Não podemos modificar o valor de uma constate
// Case-sensitive
const nome = 'Fernanda Beltrão';
// Declarando uma constante
console.log(nome);

// Não posso reservar uma constante:
/* 
const nome;
*/

// Pegar o valor de uma let ou constante e atribuir a outra let/const
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado);

let ResultadoTriplicado = resultado * 3;
ResultadoTriplicado = ResultadoTriplicado + 5 // Reescrevendo o valor de let
console.log(ResultadoTriplicado);

// JavaScript é de tipagem dinâmica

// Com typeof pegamos o tipo da variável
console.log(typeof(primeiroNumero));

// Concatenando strings
const nomeCliente = 'nome ';
const sobreNomeCliente = 'sobrenome';
const nomeCompleto = nomeCliente + sobreNomeCliente
console.log(nomeCompleto);