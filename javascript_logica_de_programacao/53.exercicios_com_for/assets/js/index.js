// Vamos adicionar no HTML os valoers que temos dentro do objeto
// Criando as tags e adicionando as frases

const container = window.document.querySelector('.container')
const div = window.document.createElement('div');

const elements = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 4'},
    {tag: 'footer', texto: 'Frase 3'},
];


for (i = 0; i < elements.length; i++) {
    let elementos = elements[i];
    let {tag, texto} = elementos;
    let htmlTag = document.createElement(tag);
    htmlTag.innerText = texto; // Adicionando texto a tag
    div.appendChild(htmlTag);
}

container.appendChild(div);