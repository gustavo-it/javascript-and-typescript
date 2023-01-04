// Async / Await

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){ reject('BAD VALUE')
        return; // para a função parar de ser executada logo após o reject
        }
        setTimeout(() => {
            resolve(msg + ' - passei na promise'); 
        }, tempo);
    });
}

// esperaAi('Fase 1', rand(0, 3))
// .then(valor => {
//     console.log(valor);
//     return esperaAi('Fase 2', rand(0, 3));
// })
// .then(valor => {
//     console.log(valor);
//     return esperaAi('Fase 3', rand(0, 3));
// })
// .then(valor => console.log(valor))
// .catch(error => console.log(error));

// Vamos utilizar async e await. Elas vão permitir que seja utilizado
// promises dentro da função como se elas fossem de forma síncrona.
// Como vimos no exemplo acima.

// Só posso utilizar await dentro de funções async
async function executa() {
    try {const fase1 = await esperaAi('Fase 1', rand(0, 3));
    console.log(fase1);

    const fase2 = await esperaAi('Fase 2', rand(0, 3));
    console.log(fase2);

    const fase3 = await esperaAi('Fase 3', rand(0, 3));
    console.log(fase3);

    console.log('Terminamos na fase 3: ', fase3);
} catch(error) {
    console.log('cai no error', error);
}
}
executa();

/*
Promise tem 3 estados

1° pendente(pending) -> foi executada e ainda não retornou o valor;
2° fullfilled -> resolvida;
3° rejected -> uma promise rejeitada;

*/