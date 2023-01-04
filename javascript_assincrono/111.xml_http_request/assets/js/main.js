// XMLHttpRequest (Get) + Promises

// AJAX -> JavaScript assíncrono xml
// AJAX pode enviar e receber informações em vários formatos
// como json, xml, html e arquivos de texto.
// seu objetivo é tornar as respostas das páginas web mais rápidas
// pela troca de pequenas quantidades de informações com o servidor web.

const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        // abaixo estou iniciando uma requisição http
        xhr.open(obj.method, obj.url, true) // metodo, url, se é assíncrono ou não
        xhr.send(); // fazendo o envio das informações
        // checando quando essa requisição terminou de ocorrer/quando foi carregada
        xhr.addEventListener('load', () => {
            // fazendo uma verificação de qual código de resposta foi retornado
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText); // retorna a resposta como uma string
            } else {
                reject(xhr.statusText); // retorna o status code como um texto
            }
        });
    }); 
};

// Pegando os eventos de click em toda a página
// e checando se aquele click foi em um link
document.addEventListener('click', event => {
    const element = event.target;
    const tag = element.tagName.toLowerCase();

    if (tag === 'a') {
        event.preventDefault(); // fazendo com que o usuário não vá até a página quando clciar
        carregaPagina(element); // essa função recebe o link que esta sendo clicado
    }
});

async function carregaPagina(element) {
    const href = element.getAttribute('href'); // aqui é o link que esta sendo clicado

    const objConfig = {
    // Objeto com as informações para a nossa requisição
    // como o método e url
        method: 'GET',
        url: href
    };
try {
    const response = await request(objConfig);
    carregaResultado(response);
} catch(error) {
    console.log(error);
}
}

function carregaResultado(response) {
    // Vamos selecionar a div resultado e jogar o que recebemos da url
    // nessa div resultado.
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
