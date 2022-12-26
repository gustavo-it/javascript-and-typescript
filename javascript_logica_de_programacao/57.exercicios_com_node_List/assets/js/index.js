// Exercícios com NodeList (Browser)

// Vamos inserir vários parágrafos dentro de uma div HTML.
const container = window.document.querySelector('.container');
const div = container.querySelector('.paragrafos');

// Vamos pegar vários parágrafos que temos dentro da div paragrafos.
const paragrafos = div.querySelectorAll('p');
// Isso nos retorna uma node list com os elementos.
// Funciona de maneira semelhante a listas(arrays).

// Com getComputedStyle nós indicamos o elemento que queremos pegar.
// Em nosso caso é o body.
const bodyStyle = getComputedStyle(document.body);

// Agora indicamos o que queremos pegar desse elemento.
// Podemos pegar o que quisermos. Aqui vamos pegar a cor de fundo.
const backgroundColorBody = bodyStyle.backgroundColor;

// Vamos jogar esta cor no fundo do parágrafo.
// E mudar a cor para branco.
for (let paragrafo of paragrafos) {
    paragrafo.style.backgroundColor = backgroundColorBody;
    paragrafo.style.color = 'white';
}