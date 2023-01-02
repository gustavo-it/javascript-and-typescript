// Revisando Objetos

// Acessando valores
const pessoa = {
    nome: 'maria',
    idade: 22
};
console.log(pessoa['nome']);
console.log(pessoa.idade);

// Apagando uma chave
// delete pessoa.nome;

// Criando um método dentro do objeto
pessoa.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa.getDataNascimento());

// Factory function
function criaPessoa(nome, idade) {
    return {
        nome,
        idade,
        get nomeCompleto() {
            return this.nome;
        }
    };
}
p2 = criaPessoa('nome', 22);
console.log(p2.nomeCompleto);

// constructor functions
function Pessoa(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome
    Object.freeze(this); // nenhunm objeto desta function pode ser alterado
    // após o freeze não posso criar e nem alterar nada
}

const pessoa1 = new Pessoa('maria', 'fernanda');
console.log(pessoa1);

// alterando valor
pessoa.nome = 'qualquer outro nome';
console.log(pessoa.nome);