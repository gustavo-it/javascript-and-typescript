// strings possuem índices
//             01234
let umtexto = 'texto aqui aaa';

// Pegando somente 1 indice da nossa string
console.log(umtexto[4]);
console.log(umtexto.charAt(6));

// Concatenando strings (faz a mesma coisa que o +)
console.log(umtexto.concat(' ', 'espaço'));

// Descobrindo em qual indice começa a palavra
console.log(umtexto.indexOf('aqui'));

// indicando por qual indice começar
console.log(umtexto.indexOf('aqui', 2));

// Esta função faz o mesmo que indexOf, porém começa do final
console.log(umtexto.lastIndexOf('aqui'));

// Uma expressão regular
console.log(umtexto.match(/[a-z]/));

// substituir uma palavra
console.log(umtexto.replace('aqui', 'agora vem o novo valor'));

// substituindo o primeiro a que ele encontrar
console.log(umtexto.replace(/a/, '#'))

// substituindo o primeiro a em toda a frase
console.log(umtexto.replace(/a/g, '#'));

// Verificando quantos caracteres tem na string
console.log(umtexto.length);

// pegando uma parte específica da string
console.log(umtexto.slice(0, 6));

// Transforma a string em uma lista
console.log(umtexto.split(' ', 3));

// Colocando tudo em maiúsculo
console.log(umtexto.toUpperCase());

// Colocando tudo em minúsculo
console.log(umtexto.toLowerCase());