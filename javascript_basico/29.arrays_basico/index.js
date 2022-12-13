// Criando os arrays (lista)
const alunos = ['maria', 'fernanda', 'maria'];

// Posso colocar qualquer tipo de dados em array, até mesmo mistura-los
// const alunos = ['maria', null, 1, true];

// Arrays também são indexados, mas por elementos
console.log(alunos[0]);

// editando um array
alunos[0] = 'ana';
console.log(alunos);

// Adicionar novo valor
alunos[3] = 'luiza';
console.log(alunos);

// Verificando quantos indices tenho no array
console.log(alunos.length);

// Outra forma de adicionar valores no array (adiciona no fim)
alunos[alunos.length] = 'márcia';
alunos[alunos.length] = 'luana';
console.log(alunos);

// Outra forma de adicionar valores no array (adiciona no fim)
alunos.push('fernandinha');
console.log(alunos);

// Adicionando no início
alunos.unshift('mariazinha');
console.log(alunos);

// removendo o último elemento
alunos.pop();

// salvando em uma variável
const removido = alunos.pop();
console.log(removido);
console.log(alunos);

// removendo do começo
alunos.shift();

// No indice 1 terá um elemento vazio
delete alunos[1];

// Utilizando slice para pegar uma parte da lista
console.log(alunos.slice(0, 2));

// Array é considerado um objeto
console.log(typeof alunos);

// Retorna 'true' se for um array e 'false'
console.log(alunos instanceof Array);