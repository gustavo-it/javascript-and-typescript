// Vamos criar um timer que vai iniciar em 00:00
// Com opções de iniciar, parar e zerar


const relogio = window.document.querySelector('.relogio');
const iniciar = window.document.querySelector('.iniciar');
const pausar = window.document.querySelector('.pausar');
const zerar = window.document.querySelector('.zerar');
let segundos = 0;
let timer;

const seconds = (sec) => {
    // Essa função vai formatar os segundos
    const data = new Date(sec * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
};

const iniciaRelogio = () => {
    // adicionando a variável no html
     timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = seconds(segundos);
    }, 1000);
};

// pegando os eventos de clicar
iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado') // Removendo uma classe
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function(event) {
    relogio.classList.add('pausado') // adicionando uma classe
    clearInterval(timer);
});

zerar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});
