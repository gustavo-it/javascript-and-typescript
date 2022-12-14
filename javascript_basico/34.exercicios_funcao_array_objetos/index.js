// É através da class que vamos selecionar os inputs
/*

Para selecionar os nossos valores, nós utilizamos a função 'querySelector'.
essa função espera receber uma tag, class, id do html. Espera receber uma string
No javascript nós podemos colocar 'espiões' para algum movimento do usuário.
Como um movimento de mouse, por exemplo, ou quando o usuário clicar em algo.
Então vamos pegar o evento 'onsubmit' que acontece quando o usuário tenta enviar dados.
E por padrão essa função recebe um evento(event);
Como não queremos que a página seja atualizada após o usuário enviar o formulário
Nós utilizamos o preventDefault. 
Ela(preventDefault) indica ao navegador para prevenir o que era para acontecer.

function meuEscopo () {
    const form = window.document.querySelector('.form');

    form.onsubmit = function (evento) {
        evento.preventDefault();
        alert(1);
    };
}
meuEscopo();

// Nesse primeiro nós indicamos 'on' para passar o evento que queremos escutar.

*/

// Outra forma
// addEventListener -> adicionamos um 'escutador' de eventos no formulário
// dentro de 'addEventListener' nós passamos uma string, indicando o evento.
// addEventListener, espera receber uma função. Pode ser uma anônima ou que você declare.
// Em nosso caso, estamos criando uma função, 'recebeEventoForm'.
// Onde dentro dela, eu pego o evento e indico para o navegador não seguir o padrão(preventDefault)
/*
function meuEscopo () {
    const form = window.document.querySelector('.form');
    let contador = 1
    function recebeEventoForm (evento) {
        evento.preventDefault();
        console.log(`form não foi enviado ${contador}`);
        contador++;
    }

    form.addEventListener('submit', recebeEventoForm);
}
*/

// Note que na variável 'form' estamos utilizando 'document' 
// Para selecionar o que está dentro do documento.
// em nome, sobrenome, idade eu quero selecionar o que está dentro do form.
// Para acessar os valores que estão nos campos, eu só preciso colocar 'campo.value'.

// Agora vamos inserir os dados que a pessoa enviou em uma div
// Além de adiciona-los a um array.
function meuEscopo () {
    const form = window.document.querySelector('.form');
    const resultado = window.document.querySelector('.resultado');
    const pessoas = [];
    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');

        // console.log(nome.value, sobrenome.value, idade.value);

        let pessoa = {
            nome:nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value
        };
        pessoas.push(pessoa);
        console.log(pessoas);
        resultado.innerHTML = `<p>Nome: ${nome.value}</p>`;
        resultado.innerHTML += `<p>Sobreome: ${sobrenome.value}</p>`;
        resultado.innerHTML += `<p>Idade: ${idade.value}</p>`;
    };
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();