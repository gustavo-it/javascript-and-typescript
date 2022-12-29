// Funções de callback

// São funções que são executadas quando alguma ação ocorre/finaliza

function rand(min = 1000, max = 3000) {
    // Essa função gera um número aleatório entre 1 e 3 segundos
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function () {
        console.log('f1');
        if (callback) callback(); // se eu receber uma função callback, vou executa-la
    }, rand());
}

function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

f1(f1CallBack);

function f1CallBack() {
    f2(f2CallBack);
}

function f2CallBack() {
    f3(f3CallBack);
}
function f3CallBack() {
    console.log('hello');
}

/* 
Vamos imaginar que estamos trabalhando na web e queremos simular uma 'atividade' do usuário. Queremos que determinada função
seja executada somente depois de uma ação.
Vamos utilizar o setTimeOut para simular um tempo.
Queremos que a função f1 seja executada primeiro, f2 por segundo e assim por diante.

Para isso indicamos que a função f1, f2 e f3 podem receber uma função callback e caso ela receba retornamos esta função.
A função será executada de acordo com o SetTimeOut que é gerado através de uma função randômica.

Nós chamamos a primeira f1CallBack.
Essa função executa a função f2(CallBack) e assim por diante. Executando nosso código na ordem que queremos.
*/