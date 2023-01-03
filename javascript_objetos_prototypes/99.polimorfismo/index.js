// Polimorfismo

// Polimorfismo é fazer os métodos se comportarem de maneira diferente
// são sub-classes.

// Conta base
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) { 
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} | ` + 
    `Saldo: R$${this.saldo.toFixed(2)}`
    );
};

// Conta corrente e método sacar

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

// Conta poupança e método sacar

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

// const conta1 = new Conta(12, 2906, 100);
// conta1.depositar(11);
// conta1.depositar(11);
// conta1.sacar(2);
// conta1.sacar(20);
// conta1.sacar(2700);

// const conta2 = new ContaCorrente(12, 77, 0, 1000);
// conta2.depositar(10);
// conta2.sacar(10);
// conta2.sacar(10);

const conta3 = new ContaPoupanca(12, 34, 0);
conta3.depositar(10);
conta3.sacar(102);