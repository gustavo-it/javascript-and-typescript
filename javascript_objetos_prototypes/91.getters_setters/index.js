// Getters e Setters

// É uma maneira de proteger a nossa propriedade
// getters -> pegar uma informação
// setters -> atribuir um novo valor

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        // eliminamos o enumarable e value, pois vamos utilizar get e set no lugar
        enumerable: true,
        configurable: true,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            return estoquePrivado = valor;
        }
    });
}

const produto = new Produto('Camiseta', 20, 3);
console.log(produto, produto.estoque);
produto.estoque = 5;
console.log(produto, produto.estoque);
console.log(produto, produto.estoque);
