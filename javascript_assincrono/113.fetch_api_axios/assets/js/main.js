// Fetch API e axios (JSON)
// Axios é utilizado para fazer requisições, assim como fetch api.

// fetch('pessoas.json') // buscando os dados
// .then(resposta => resposta.json()) // convertendo os dados em json
// .then(json => carregaElementosNaPagina(json)); // adicionando o json na página

// UTILIZANDO O AXIOS (PARA ISSO UTILIZE O AXIOS CDN COLOCANDO NO index.html acima do seu script)
axios('pessoas.json')
.then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
    const table = document.createElement('table'); // criando uma tabela
    for(let pessoa of json) { // fazendo um laço sobre os arrays
        const tr = document.createElement('tr'); // criando uma linha para a tabela

        let td = document.createElement('td'); // recebe o texto
        td.innerHTML = pessoa.nome; //adicionando os dados do json no td
        tr.appendChild(td); // adicionando a linha da tabela os dados
        
        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        table.appendChild(tr); // adicionando a linha na tabela
    }

    const resultado = document.querySelector('.resultado'); // pegando a div resultado
    resultado.appendChild(table); //adicionando a tabela na div resultado
}
