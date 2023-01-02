// Manipulando Prototypes

const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

// linkando o objeto B ao objeto A
Object.setPrototypeOf(objB, objA);

// Podemos acessar a chave do objeto A através do objeto B
console.log(objA.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Vamos criar métodos dentro do prototype da função
// Fora do objeto
Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco *(percentual / 100));
};

const produto1 = new Produto('camiseta', 50);


const produto2 = {
    nome: 'caneca',
    preco: 15
};
// indicando que o produto2 herda da função construtora Produto
Object.setPrototypeOf(produto2, Produto.prototype);

produto1.aumento(100);
console.log(produto1);