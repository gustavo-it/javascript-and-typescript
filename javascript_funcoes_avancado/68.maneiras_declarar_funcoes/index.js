// As várias maneiras de declarar funções em JavaScript

// Declaração de função (função clássica)
// Ocorre o function hoisting
// hoisting é elevar as declarações de funções e variáveis definidas
// para o topo do nosso arquivo.
// ou seja, podemos chamar a função antes de criar ela.
function hello() {
    return 'hello';
}

// Funções são -> First-class objects (objetos de primeira classe)
// quer dizer que a função pode ser tratada como dado.
// Function expression
// Desta maneira podemos jogar essa função como parâmetro de outra
// É possível nomear a function expression -> function meuNome() { ...}
const nome = function () {
    return 'sou um dado';
};

// Posso passar uma função que executa uma function express
function executaFuncao(funcao) {
    return funcao();
}
console.log(executaFuncao(nome));

// Arror function
const arrowFunc = () => {
    return 'sou uma arrow function'
};

console.log(arrowFunc());
// TODAS AS FUNÇÕES SÃO OBJETOS DE PRIMEIRA CLASS

// Dentro de um objeto posso ter uma função
const obj = {
    falar: function () {
        return 'estou falando'
    }
};
console.log(obj.falar()); // Chamando a função de dentro do objeto

// Outra maneira de declarar função dentro do objeto
const object = {
    falar() {
        return 'outra maneira de declarar função dentro de objeto.'
    }
};
console.log(object.falar());