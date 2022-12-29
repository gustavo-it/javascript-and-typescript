// Escopo léxico

// quando você tem uma variável, ou até mesmo função que esta chamando
// outra função. O javascript vai procurando escopo por escopo atrás daqueles
// valores.

const nome = 'Maria';

function sayName() {
    const nome = 'fernanda'
    console.log(nome);
}

function useSayName() {
    sayName();
}
useSayName();