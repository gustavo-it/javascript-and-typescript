// Herança

// Produto -> aumento, desconto
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    // Fazendo isso nós estamos linkando as duas funções
    Produto.call(this, nome, preco);
    this.cor = cor;
}

// Dizendo que o prototype de camiseta será o prototype de Produto
// para que Camiseta tenha acesso aos métodos de Produto
Camiseta.prototype = Object.create(Produto.prototype);

// Indicando que o construtor é a function Camiseta
Camiseta.prototype.constructor = Camiseta;

// Sobrescrevendo o método aumento
Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Produto;

const camiseta = new Camiseta('camiseta com manga', 7.5, 'vermelho');
camiseta.aumento(10);
console.log(camiseta);

const caneca = new Caneca('Caneca personalizada', 10.0, 'porcelana', 100);
console.log(caneca);
caneca.aumento(10);
console.log(caneca);
caneca.desconto(10);
caneca.estoque = 1;
console.log(caneca, caneca.estoque);
