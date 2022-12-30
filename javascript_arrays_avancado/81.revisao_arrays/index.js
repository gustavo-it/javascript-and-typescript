// Revisão do básico em Arrays

// const nomes = ['maria', 'fernanda']; array literal

const nomes = new Array('maria', 'fernanda', 'albertina', 'rosana');
nomes[2] = 'antonieta';
delete nomes[2]
console.log(nomes);

// Removendo um elemento com delete
// Os índices não são alterados
// <empty item> é o que fica no lugar do valor

// Arrays são dados por referência

// Copiando os dados de um array sem referência
const novo = [...nomes];
const removidos = novo.shift(); // Remove do inicio
novo.unshift('carla'); // Adiciona no início
novo.push('Carlinha'); // Adiciona no fim
novo.pop(); // Remove o último elemento
console.log(novo.length, removidos, novo);

// Não confunda o índice com o tamanho do array

// Fatiando os arrays
const newNomes = nomes.slice(0, 2);
console.log(newNomes);

// Transformando uma string em array
const nome = 'Maria fernanda antonieta'
const newName = nome.split(' ');
console.log(newName);

// Transformando um array em string
const nameJoin = newName.join(' ');
console.log(nameJoin);