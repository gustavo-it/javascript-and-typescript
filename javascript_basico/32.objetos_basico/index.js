// Queremos agrupar variáveis em um só lugar
// Quero guardar nome, sobrenome, idade. Para isso vamos utilizar um objeto
// [] -> array / {} -> objeto

const pessoa1 = {
    nome: 'maria',
    sobrenome: 'fernanda',
    idade: 25
};

// acessando os dados do objeto
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

// Criando uma função que retorna um objeto

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa2 = criaPessoa('maria', 'antonieta', 25);
console.log(pessoa2);
console.log(pessoa2.sobrenome);

// outra forma de exibir um objeto em função
function refactoryCriaPessoa (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}
// O javascript retorna automaticamente a chave do valor

const pessoa3 = refactoryCriaPessoa('luiza', 'severo', 23);
console.log(pessoa3);
console.log(pessoa3.idade);

// Quando uma função está dentro de um objeto, ela é chamada de método
// Neste caso não precisamos declarar a palavra 'function' para indicar a função
// Com a palavra 'this' posso acessar os valores que tenho no meu objeto
// 'this' significa 'nesse objeto'. Quero acesso o que tem no meu objeto,
const pessoa4 = {
    nome: 'Marieta',
    sobrenome: 'Severo',
    idade: 23,

    fala() {
        console.log(`${this.nome}`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

// Chamando a função dentro do objeto
pessoa4.fala();
console.log(pessoa4.idade);
pessoa4.incrementaIdade();
pessoa4.incrementaIdade();
console.log(pessoa4.idade);