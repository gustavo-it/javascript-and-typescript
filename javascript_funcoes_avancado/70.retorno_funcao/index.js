// Retorno da Função

// return além de retornar um valor, termina a função

function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));

// Posso ter funções que retornam ou não valor.
// Isso depende muito do que queremos.

function createPerson(nome, sobrenome) {
    return {
        nome: nome, sobrenome: sobrenome
    };
}
console.log(createPerson('maria', 'fernanda'));

// Uma função dentro de outra função
function speakSentence(comeco) {
    function talkRest(resto) {
        return comeco + ' ' + resto; // retorno da função talkRest
    }
    return talkRest; // retorno de speakSentence
}
// Estamo usando dentro da função interna o parâmetro da função externa

const hello = speakSentence('olá');
console.log(hello('world'));
/* 
Dentro da função speakSentence, temos a função talkRest. talkRest retorna o parâmetro
da função speakSentence e o parâmetro dela mesmo (talkRest).
E a função speakSentence retorna a função talkRest.

Para utilizartmos essa função. Nós instanciamos em uma constante chamada hello.
e dentro de hello nós passamos 'olá' que é o primeiro parâmetro que a função
speakSentence espera receber.
Ao utilizarmos o console.log para apresentar os dados, quando chamamos a nossa cosntante
hello, nós passamos dentro dela o segundo parâmetro que é referente a talkRest.
*/

// Passando uma function no return
// A função a seguior é uma função closure.
// closure da acesso ao escopo de uma func externa a partir de uma func interna
function createMultiplier(multiplier) {
    // Multiplier esta nesse escopo

    return function(number) {
        return number * multiplier;
    };
}

const duplicate = createMultiplier(2); // passando o multiplier
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(duplicate(10)); // passando o number
console.log(triple(10));
console.log(quadruple(10));
