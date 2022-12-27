// setInterval e setTimeout
// As duas funções controlam o time

const hours = () => {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
};

// console.log(hours());

const funcInterval = () => console.log(hours());

// setIntervalconfigura um intervalo de tempo para que alguma 
// função seja executada em determinado momento

setInterval(funcInterval, 1000);
// Para fazer isso eu passo a função como referência, sem executa-la
// O segundo parâmetro é de quanto em quanto tempo quero que a função
// seja executada.

// fazendo isso através de uma função anônima
setInterval(function () {
     console.log(hours());
}, 1000);

// setTimeout executa só uma vez a função, e depois para.
setTimeout( function () {
    clearInterval(funcInterval());
}, 1000);