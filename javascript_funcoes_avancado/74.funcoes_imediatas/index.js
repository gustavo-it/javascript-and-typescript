// Funções Imediatas (IIFE) || Funções auto invocadas

// Criando uma função que é chamada automaticamente
// Esse tipo de função também pode receber parâmetros
(function(idade, altura) {
    const surname = 'Fernanda';
    function createName(name) {
        return name + ' ' + surname;
    }

    function talkHello() {
        console.log(createName('Maria'));
    }

    talkHello();
    console.log(idade, altura)
})(30, 1.70);

// Note que essa função precisa estar dentro de parênteses
// Fora dos parênteses você adiciona novos parênteses, indicando que
// quer chama-la.
// Note que esta é uma função anônima.
