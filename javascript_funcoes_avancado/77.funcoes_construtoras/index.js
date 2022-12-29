// Funções construtoras (constructor functions)

// Funções construturas sempre precisamos iniciar com letra maiúscula
// Estas funções são moldes para gerar um novo objeto
// Não utilizamos vírgulas dentro dos objetos

// O javascript entende que esta é uma função construtora
function Pessoa(nome, sobrenome) {
    const ID = 12; // atributo privado
    const metodoInterno = () => {
        // método privado
    };

    // Atributos/métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = () => {
        console.log('método');
    };
}

// Preciso utilizar a palavra new ao utilizar a função construtura
// para criar um novo objeto.
// ela cria um novo objeto vazio, faz o this apontar para o objeto que
// foi utilizado.
const pessoa1 = new Pessoa('maria', 'fernanda');
const pessoa2 = new Pessoa('luiza', 'otavia');
pessoa1.metodo();