/* 
Escrevendo no html

No navegador, temos acesso ao objeto window. window nos permite ter acesso à vários métodos.
como por exemplo o document, que nos permites escrever no HTML.
Em document temos acessos a mais coisas, como body, que nos permite escrever especificamente
Podemos utilizar o innerHTML. Que pode ser usado para receber o conteúdo de um elemento HTML
ou para definir um novo conteúdo para ele.

Utilizando
window.document.body.innerHTML = 'o seu texto aqui';
window.document.body.innerHTML += 'outro texto ao final';

Quebrando a linha
window.document.body.innerHTML += 'outro texto ao final <br />';
*/
const nome = prompt('Seu nome completo: ');
window.document.body.innerHTML = `Seu nome é: ${nome}<br />`;
window.document.body.innerHTML += `Seu nome tem: ${nome.length}<br />`;
window.document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)}<br />`;
window.document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome: ${nome.indexOf('a')}<br />`;
window.document.body.innerHTML += `Qual o último índice da letra a no seu nome: ${nome.lastIndexOf('a')}<br />`;
window.document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)}<br />`;
window.document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br />`;
window.document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`;
window.document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br />`;