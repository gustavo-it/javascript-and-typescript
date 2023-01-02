// Métodos úteis para objetos

// Maneira mais simples de copiar um objeto
const produto = {nome: 'nome', preco: 1.80};
const outroProduto = {...produto, material: 'porcelana'};

// Outra forma de copiar
const caneca = Object.assign({}, produto, {material: 'porcelana'});
const outraCaneca = {nome: produto.nome, preco: produto.preco};

// Object.keys -> coloca as chaves do objeto em uma lista
console.log(Object.keys(produto));

// Object.getOwnPropertyDescriptor -> retorna o que a propriedade é
// retorna todas as informações que vimos em defineProperty
// Para utiliza-la passamos o objeto e a chave que queremos exibir as informações.
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

// Object.values -> retorna os valores
console.log(Object.values(caneca));

// Object.entries -> retorna uma lista, com cada chave e valor separados em uma lista
console.log(Object.entries(caneca));