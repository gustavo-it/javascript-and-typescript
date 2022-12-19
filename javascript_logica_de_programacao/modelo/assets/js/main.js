const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
    /* 
    Adicionando um escutador ao evento de submit.
    */
    event.preventDefault();
    // 'target' me informa o elemento que está recebendo o evento.
    // do input com id peso, estou guardando o valor na const inputPeso
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    // a partir de agora vou pegar os valores
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso ) {
        // Se o peso ou altura não forem válidos execute a seguinte mensagem
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc)
    const msg = `Seu IMC é ${imc} (${nivelImc})`;
    setResultado(msg, true);
});

function getImc (peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

// Começaremos as condições do maior valor para menor

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 
                    'Peso normal', 
                    'Sobrepeso', 
                    'Obesidade grau 1',
                    'Obesidade grau 2',
                    'Obesidade grau 3',
                    ];
    
    if (imc >= 39.9) return nivel[5];

    if (imc >= 34.9) return nivel[4];
    

    if (imc >= 29.9) return nivel[3];

    if (imc >= 24.9) return nivel[2];

    if (imc >= 18.5) return nivel[1];

    if (imc < 18.5) return nivel[0];
}

function criaP () {
    // Essa função é responsável por criar um parágrafo.
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    // Essa função é responsável por adicionar valores na div resultados.
    const resultado = window.document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP(); // esta constante recebe a função responsável por criar o parágrafo

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg
    resultado.appendChild(p);
}