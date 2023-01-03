// Herança com classes

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já ligado`);
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já desligado`);
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); // passamos aqui os parâmetros da class pai
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, wifi) {
        super(nome);
        this.wifi = wifi;
    }

    ligar() {
        console.log('você alterou o método ligar');
        
    }
}

const dispositivo = new Smartphone('smartphone', 'Azul', 'galaxy s10');
dispositivo.desligar();
console.log(dispositivo);
dispositivo.ligar();
dispositivo.ligar(); 
console.log(dispositivo);
const tablet = new Tablet('ipad', true);
console.log(tablet.ligar());