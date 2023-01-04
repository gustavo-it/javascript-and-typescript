// Promises

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo) {
    // Promise recebe uma função
    // resolve -> executa o código quando esta tudo certo
    // reject -> rejeito quando o código tem algum problema
    return new Promise((resolve, reject) => {
        // Utilizando o reject
        if(typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg); // só posso mandar um parâmetro aqui
        }, tempo);
    });
}

// Sempre que chamarmos o then() o resolve será executado
// Sempre que chamarmos o catch() o reject será chamado
// os dois recebem uma função

// Podemos utilizar o then para executar ações dentro da promise
// a seguir a frase 2 só será executa após a frase 1
esperaAi('Conexão com banco de dados', rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi(2, rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi('Tratando os dados da base', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
})
.catch(error => {
    console.log('ERROR', error);
});

// console.log('isso aqui é exibido antes das promises');