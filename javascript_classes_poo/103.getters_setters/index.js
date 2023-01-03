// Getters e Setters

const _velocidade = Symbol; // isso aqui vai gerar um id aleatório
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const carro = new Carro('Fusca');
for(let i = 0; i <= 200; i++) {
    carro.acelerar();
}
carro.velocidade = 25;
console.log(carro.velocidade);