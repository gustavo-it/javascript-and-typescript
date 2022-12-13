let numero = Number(prompt('Digite um número: '));

// Na página HTML vamos inserir dados no h1 e nas divs
// Vamos utilizar o getElementById();
// Esta função recebe uma string com o id que definimos no elemento HTML
// Agora vamos pegar o id desse elemento e salvar em uma constante (document é o documento html)
const numeroTitulo = window.document.getElementById('numero-titulo');
const texto = window.document.getElementById('texto');

// Vamos pegar as duas constantes que acabamos de criar
// E utilizar o innerHTML que já vimos antes, para adicionar valores as tags HTML
// Que possuem o id que salvamos nas constantes.
numeroTitulo.innerHTML = `${numero}<br />`;
texto.innerHTML += `<p>Raiz quadrada é: ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;