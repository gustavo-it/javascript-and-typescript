// Métodos de instância e estáticos

// estáticos -> são métodos que usamos na class sem precisar instanciar
// não vão estar disponiveis dentro da instância

class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    // método de instância
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // método estático
    static trocaPilha() {
        console.log('ok, vou trocar.')
    }
}

const controle = new ControleRemoto('LG');
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();
console.log(controle);
ControleRemoto.trocaPilha();