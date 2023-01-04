// Fetch API (GET)
// Nesse caso, o fetch api vai fazer a mesma coisa que estamos fazendo
// no exemplo anterior

document.addEventListener('click', event => {
    const element = event.target;
    const tag = element.tagName.toLowerCase();

    if (tag === 'a') {
        event.preventDefault(); 
        carregaPagina(element); 
    }
});

async function carregaPagina(element) {
    try{
        const href = element.getAttribute('href'); 
        const response = await fetch(href); // caregando o link
        if(response.status !== 200) throw new Error('Error 404!');
        const html = await response.text(); // pegando a resposta e transformando em texto
        carregaResultado(html);
    }catch(error) {
        console.log(error);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
