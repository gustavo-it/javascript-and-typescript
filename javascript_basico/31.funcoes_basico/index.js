// criando uma função
// DESSA MANEIRA VOCÊ NÃO PRECISA ENCERRAR A FUNÇÃO COM PONTO E VÍRGULA
function saudacao() {
    console.log('ola');
}

// Chamando uma função
saudacao();

// Funções com parâmetros
function novaSaudacao(nome) {
    console.log(`ola, ${nome}`)
}

// Passando o parâmetro
novaSaudacao('fernanda');
novaSaudacao('Maria');

const variavel = saudacao('maria');

// Caso você não especifique o que a função deve retornar
// Será retornado 'undefined'
console.log(variavel);

// função com return

function funcaoComReturn(nome) {
    return 123456;
}

const outraVariavel = funcaoComReturn('aqui');
console.log(outraVariavel);


function outraSaudacao(nome) {
    return `Bom dia, ${nome}`;
}

console.log(outraSaudacao('novamente'));

function soma(a, b) {
    const resultado = a + b;
    return resultado;
}

console.log(soma(123, 25345));

// Não podemos acessar nada que está dentro da função
// Por exemplo, você não pode acessar a variável 'resultado'
// Nada é executado após o return

/*
Podemos adicionar um valor padrão a função:

function soma(a = 1, b = 2) {
    const resultado = a + b;
    return resultado;
}

*/

// Jogando uma função dentro de uma variável
// OBS: NESTE CASO VOCÊ PRECISA ENCERRAR A FUNÇÃO COM PONTO E VÍRGULA
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));

// arrow function
// Não utilizamos a palavra 'function'
// Apontamos somente os valores e em seguida passamos sinal de igual e maior
// Para indicar o corpo da função
// OBS: NESTE CASO VOCÊ PRECISA ENCERRAR A FUNÇÃO COM PONTO E VÍRGULA
const subtracao = (n, y) => {
    return n - y;
};

console.log(subtracao(5, 3));

// Podemos simplificar a função
/*
const raiz = n => n ** 0.5;
*/