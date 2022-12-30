// Método Splice

// Splice remove, adiciona

const nomes = ['maria', 'fernanda', 'rose', 'rosana', 'simone']

// nomes.splice(1°, 2°)
// 1° -> Você passa por qual índice quer começar a mexer
// 2° -> Quantos elementos você quer remover do seu array
// 3° -> elementos para adicionar

const removido = nomes.splice(4, 1); // Removendo o indice 4, indicando que quero remover 1 elemento
console.log(nomes, removido);
// SPLICE RETORNA UM ARRAY QUANDO REMOVEMOS UM ARRAY
// splice também pode receber números negativos

// Adicionando elementos
const adicionar = nomes.splice(4, 0, 'Rosigrêde');

nomes.splice(nomes.length, 0, 'Júlia'); // simulando o push
nomes.splice(0, 0, 'Meg'); // simulando o unshift
console.log(nomes, adicionar);