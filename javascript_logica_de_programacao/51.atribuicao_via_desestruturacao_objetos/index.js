// É a mesma ideia de desestruturacao array

const pessoa = {
    nome: 'Maria',
    sobrenome: 'Fernanda',
    idade: 25,
    endereco: {
      rua: 'Av. Brasil',
      numero: 320
    }
};

// Atribuição via desestruturação
// a variável que estou declarando tem o mesmo nome da chave do meu objeto
const { nome = 'Não existe' } = pessoa; // setando um valor padrão
console.log(nome);

// Pegando a chave e atribuindo um outro nome a variável
const { sobrenome: teste} = pessoa;
console.log(teste);

// pegando valores que estão dentro do objeto endereco, que se encontra dentro
// do objeto pessoa.
const { endereco: {rua = 'avenida', numero = 1212}} = pessoa;
console.log(rua, numero);

const { endereco: endereco} = pessoa;
console.log(endereco);

// Utilizando o operador de rest
const { idade, ...rest} = pessoa;
console.log(rest);