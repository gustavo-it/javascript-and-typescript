// Criando classes

class Pessoa{
    constructor(nome, sobrenome) {
        // Aqui vem os parâmetros
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar() {
        console.log(`${this.nome} está falando`)
    }
}

const pessoa = new Pessoa('Maria', 'Fernanda');
console.log(pessoa);
pessoa.falar();