// Calculadora com função construtora

function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };


    this.capturaEnter = () => {
        this.display.addEventListener('keypress', event => {
            if (event.keyCode === 13) {
            this.realizaConta();
            return;
            }
        });
    };

    this.capturaCliques = () => {
        document.addEventListener('click', event =>{
            const element = event.target;
            if (element.classList.contains('btn-num')) this.addNumDisplay(element);
            if (element.classList.contains('btn-clear')) this.clear();
            if (element.classList.contains('btn-del')) this.del();
            if (element.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.addNumDisplay = (element) => {
        this.display.value += element.innerText;
        this.display.focus(); // jogando o foco no display sempre que add um número
    };

    this.clear = (element) => this.display.value = '';

    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        try {
            const conta =  eval(this.display.value);
            
            if(!conta) {
                alert('conta inválida');
                return;
            }

            this.display.value = conta;

        } catch(error) {
            alert('conta inválida');
            return;
        }
    };

}

// usando o molde calculadora
const calculadora = new Calculadora();
calculadora.inicia();