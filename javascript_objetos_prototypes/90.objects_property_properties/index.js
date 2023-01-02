// Object.defineProperty() e Object.defineProperties()

// Podemos congelar somente uma propriedade do objeto com essas duas functions
// Object.defineProperty() -> define somente UMA propriedade
// Object.defineProperties() -> define VÁRIAS propriedades

function Produto(nome, preco, estoque) {
    // queremos que a propriedade estoque fique travada/não possa ser alterada

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // mostra o valor
        writable: false, // posso alterar o valor?
        configurable: false, // posso reconfigurar(delete chave) a chave?
    });
    // Passamos this(objeto que esta sendo criado) em seguida a propriedade
    // e enviar um propertie descriptor(um objeto que pode receber várias coisas)

    Object.defineProperties(this, {
    // Passamos o objetos(this), objeto descriptor com todas as configurações
        nome: {
            enumerable: true,
            value: nome, 
            writable: true, 
            configurable: true,
        },
        preco: {
            enumerable: true,
            value: preco, 
            writable: true, 
            configurable: true,
        }

    })
}

const produto = new Produto('camiseta', 20, 3);
console.log(produto);

// Vendo as chaves do objeto
console.log(Object.keys(produto));

for(let chave in produto) {
    console.log(chave);
}