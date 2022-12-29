// Clousures

function returnFunction () {
    const nome = 'Fernanda';
    return function () {
        // Esse tipo de função tem acesso a 3 escopos ou mais
        // A função que é a mãe dela, ao escopo dela mesma e ao global
        return nome;
    };
}

const func = returnFunction();
console.log(func());

// Clousure é a habilidade da função a acessar o seu escopo léxico
// Escopo léxico é a função ir buscando os valores escopo por escopo