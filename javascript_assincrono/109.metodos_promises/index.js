// Métodos úteis para Promises

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

// Promise.all -> recebe um array com promises ou valores resolvidos
// E ele vai te entregar uma promise, com os valores dentro de um array.
const promises = [
    // 'primeiro valor',
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    // 'outro valor'
];
Promise.all(promises)
.then(valor => console.log(valor))
.catch(error => console.log(error));

// Promise.race; 
// Ele entrega somente o primeiro valor
Promise.race(promises)
.then(valor => console.log(valor))
.catch(error => console.log(error));

// Promise.resolve;
// Entrega uma promise já resolvida
function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi(`baixei a página`, rand(1, 5));
    }
}

baixaPagina()
.then(dadosPagina => console.log(dadosPagina))
.catch(error => console.log(error))

// Promise.reject;
// Entrega uma promise com erro
function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Página em cache');
    } else {
        return esperaAi(`baixei a página`, rand(1, 5));
    }
}

baixaPagina()
.then(dadosPagina => console.log(dadosPagina))
.catch(error => console.log('error', error))