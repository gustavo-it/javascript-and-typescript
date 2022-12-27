// Selecionando o input, button, ul
const inputTarefa = window.document.querySelector('.input-tarefa');
const btnTarefa = window.document.querySelector('.btn-tarefa');
const tarefas = window.document.querySelector('.tarefas');

// Essa função cria um elemento li
const createLi = () => {
    const li = document.createElement('li');
    return li;
};

// Função responsável por salvar tarefas em algum lugar
// Ela vai verificar quantos li eu tenho e vai salvar os textos
const saveTasks = () => {
    // Pegando todos os li que temos dentro de ul
    const liTasks = tarefas.querySelectorAll('li');
    const listTasks = [];

    // os li ficam armazenados em uma node list
    // vamos iterar para pegar cada valor e salvar no array listTasks
    for (let tarefa of liTasks) {
        // O valor do button vem junto com o texto do li
        // para resolver isso vamos substituir a palavra apagar por nada
        let taskText = tarefa.innerText;
        taskText = taskText.replace('Apagar', '').trim(); //trim() remove o espaço sobrando
        listTasks.push(taskText); // adicionando os valores no array
    }
    // convertendo o meu array em um json, que será convertido em string.
    const tasksJSON = JSON.stringify(listTasks); // podemos salvar em algum lugar
    localStorage.setItem('tasks', tasksJSON); // localStorage, local onde podemos salvar coisas.
    // Recebe uma string, que vamos usar para recuperar esses dados mais tarde
    // Recebe também o que queremos salvar.
    // ele fica salvo em inspecionar > application > storage > local storage
};

// Essa função adiciona um botão ao lado do elemento li
const createButtonDelete = (li) => {
    li.innerText += ' '; // Adicionando um espaço entre li e button
    const buttonDelete = document.createElement('button');
    buttonDelete.innerText = 'Apagar';
    // Adicionando uma class ao button através de setAttribute
    // Ela recebe o atributo e em seguida passo o valor
    buttonDelete.setAttribute('class', 'apagar');
    li.appendChild(buttonDelete); // O button delete vai ser filho de li
};

// Fazendo com que quando o usuário aperte 'enter' seja enviado os dados
// Para isso precisamos saber qual tecla foi pressionada
// com o console.log(event) você consegue ter essa informação no console do navegador
inputTarefa.addEventListener('keypress', function(event) {
    // console.log(event);
    if (event.keyCode === 13) { // pegando o enter
        if (!inputTarefa.value) return;
    createTask(inputTarefa.value);
    }
});

// Criando uma função para limpar o input
const clearInput = () => {
    inputTarefa.value = '';
    inputTarefa.focus(); // Fazendo um focos no input
};

// Esta função vai adicionar o texto do input na lista
const createTask = (inputText) => {
    const li = createLi();
    li.innerText = inputText;
    tarefas.appendChild(li); // Adicionando a li ao ul
    // Dizendo que li é um filho de ul.
    clearInput(); // limpando o campo
    createButtonDelete(li); // adicionando um botão ao lado da li
    saveTasks(); // Essa função vai salvar tarefas em algum lugar.
};

// Adicionando um evento ao button e pegando o valor do input
btnTarefa.addEventListener('click', function(event) {
    // Verificando se o valor não é em branco
    if (!inputTarefa.value) return;
    createTask(inputTarefa.value); // jogando esse valor para outra função
});

// Lembre que o button é filho de li.
// Então para apagar a tarefa, precisamos apagar o pai do button. Que é o li.

document.addEventListener('click', function(event) {
    const element = event.target; // pegando o evento click em todo documento html
    // Verificando qual tarefa está recebendo o click
    // console.log(element);

    // Verificando se esse elemento que recebeu o evento contém a class apagar
    if (element.classList.contains('apagar')) {
        element.parentElement.remove(); // removendo o pai do elemento button
        saveTasks(); // quando você remover uma tarefa, ela também vai ser apagada
        // do local storage
    }
});

// Essa função vai ler o local storage e jogar de volta a ul
const addSavedTasks = () => {
    const tasks = localStorage.getItem('tasks'); // obtendo as tarefas
    // vamos converter essas tarefas de volta para um array
    const listTasks = JSON.parse(tasks);

    for (let tarefa of listTasks) {
        createTask(tarefa); // Adicionando de volta ao ul
    }
}

addSavedTasks();
