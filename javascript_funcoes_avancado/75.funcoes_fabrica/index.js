// Funções fábrica (Factory Functions)

// São funções que retornam objetos

function createPerson(nome, sobrenome, altura, peso) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        // É um getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        // setter
        set nomeCompleto(valor) {
            valor = valor.split(' '); // A cada espaço o nome vai ser dividido retornando array
            this.nome = valor.shift(); // retorna o valor para a variável e remove do array
            this.sobrenome = valor.join(' '); // transforma o array em uma string
        },
        talk: function(assunto) {
            return `${this.nome} está ${assunto}`;
            // this faz referência ao objeto que está chamando a função.
            // this sempre vai ser quem chamar o objeto.
        },
        altura: altura,
        peso: peso,
        // getter -> queremos só obter/pegar o valor
        get imc() { // get faz com que a função finja ser um atributo do objeto
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const people1 = createPerson('maria', 'albertina', 1.7, 70);
const people2 = createPerson('fernanda', 'maria', 1.7, 62);
console.log(people1.talk('falando sobre js'));
console.log(people2.talk('falando sobre js'));

// console.log(people1.imc());
// console.log(people2.imc());

// Chamando o imc agora que é um atributo
// QUANDO UTILIZAMOS O GET ANTES DA FUNCTION
// NÓS NÃO EXECUTAMOS MAIS AQUELE MÉTODO COMO UMA FUNÇÃO
// POIS ELE ESTÁ FINGINDO SER UM ATRIBUTO, MESMO SENDO FUNÇÃO
// ENTÃO O CHAMAMOS DA SEGUINTE FORMA:
console.log(people1.imc);
console.log(people2.nomeCompleto);

// Alterando o nome através do método setter
// setter serve para atribuir um novo valor
console.log(people1.nomeCompleto)
people1.nomeCompleto = 'Joaquina Miranda';
console.log(people1.nomeCompleto);

/* 
DESCRIÇÃO DO CÓDIGO

Método get --> Pode ser utilizado quando desejo pegar um valor. É utilizado antes da função
Para indicar que a função é um get.
Esse método faz com que a função se comporte como um atributo. Você deve fazer acesso a esse método
como se fosse um campo.

Método set --> Pode ser utilizado quando desejo atribuir um novo valor a um campo. De resto funciona da mesma
maneira que o método get.

createPerson -> Esta função cria um objeto de pessoa. Com nome, sobrenome, altura e peso.
Temos um método chamado get nomeCompleto. Onde ele junta o nome, sobrenome da pessoa.
O método set nomeCompleto que serve para atribuir um novo valor a este campo.
Onde transformo os dados enviados em uma lista, com o split. Atribuo o primeiro valor da lista ao nome.
E os demais valores eu transformo em uma string, com o join, e atribuo ao sobrenome.

talk() -> Espera receber um valor que é o assunto. E retorna o nome da pessoa + o assunto que foi enviado.

get imc() -> Utilizamos novamente o get, para fazer com que a função se comporte como um atributo.
E retorne o imc daquela pessoa.

Lembre que devemos fazer acesso aos dados, dentro do objeto, com o 'this' -> this.campo
O this faz referência ao objeto que esta chamando a função.
*/