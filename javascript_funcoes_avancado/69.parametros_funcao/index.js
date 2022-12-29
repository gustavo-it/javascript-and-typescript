// Parâmetros da função

// Podemos enviar parâmetros sem indicar que aquela função vai receber um
// e isso não gera nenhum erro.
// Funciona somente com a palavra function.
// Essa function tem um valor chamado 'arguments'.
// arguments recebe todos os parâmetros que passamos para a função.
// arguments é um objeto

function funcao() {
    let total = 0
    for (let argumento of arguments) {
        total += argumento
    }
    console.log(total)
}
funcao(1, 2, 3, 4, 5);

// Colocando valores padrões nos parâmetros
function sum (a, b = 0) {
    return a + b;
}
console.log(sum(2 + 1));

// Pulando um valor
// A única maneira de fazer isso é passar undefined em algum parâmetro
function skipSum(a, b = 2, c) {
    console.log(a + b + c);
}
skipSum(2, undefined, 20);

// Fazendo atribuição via desestruturação
function destructuring({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
destructuring({nome: 'maria', sobrenome: 'silva', idade: 20});

// Utilizando o rest operator (operador de resto)
// Para pegar todos os valores que passamos depois do segundo parâmetro
// Rest operator sempre tem que ser o último parâmetro
function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
        
}
    console.log(acumulador);
}
conta('*', 1, 20, 30, 40, 50);

// A função acima recebe um operador, acumulador e números
// ela checa qual operador recebe e faz a operação entre o acumulador e números
// que recebe.

// ARROW FUNCTIONS NÃO TEM ARGUMENTS
// DICA: DE PREFERÊNCIA UTILIZE O REST OPERATOR
// REST OPERATOR FUNCIONA EM QUALQUER FUNÇÃO