// Factory Functions + Prototypes

const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);
    }
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`);
    }
};

// Estamos fazendo a cópia dos métodos com Object.assign()
// Podemos utilizar o spread operator {... falar, ...beber}
const pessoaPrototype = Object.assign({}, falar, beber);

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('maria', 'eduarda');
p1.falar();
p1.beber();

/* 
Estamos criando uma constante chamada pessoaPrototype que recebe os métodos
Vamos linkar essa constante ao return da Factory Function criaPessoa.
Essa função vai nos retornar um objeto.
Com o object.create() indicamos a que vai estar linkado a função.
dentro dela passamos o object map, passando os campos que vamos retornar na função.
*/