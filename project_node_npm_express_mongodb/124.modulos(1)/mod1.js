// Módulos 1

// const nome = "maria";
// const sobrenome = "joaquina";

// const falaNome = () => nome + ' ' + sobrenome;

// module.exports.nome = nome;
// exports.falaNome = falaNome;

class Pessoa {
    constructor(nome) {
        this.nome = nome;
        return this.nome;
    }
}

exports.Pessoa = Pessoa;