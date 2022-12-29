// Praticando com factory functions

function createCalculator() {
    return {
        display: window.document.querySelector('.display'),
        // Display agora é um atributo do meu objeto
        // Vou acessa-lo com this.display
        btnClear: window.document.querySelector('.btn-clear'),
        
        start() { // Esse método vai iniciar a calculadora
            this.clickButtons();
            // sempre que quero refenreciar uma chave do objeto, utilizo this
            this.pressEnter();
        },
        deleteOne() {
            // Apaga somente 1 número
            // o valor do display, será o valor do display menos 1
            this.display.value = this.display.value.slice(0, -1);
        },

        clearDisplay() {
            // Essa function zera o display
            this.display.value = '';
        },

        pressEnter() {
            // Executando a conta assim que o usuário soltar a tecla
            this.display.addEventListener('keyup', event => { // utilizando arrow function para não alterar o this
                if (event.keyCode === 13) {
                    this.performAccount();
                }
            })
        },

        performAccount() {
        // A função eval vai ler a string e tentar executar como código js
        // Você deve tomar cuidado, pois pode ser usado para
        // enviar códigos maliciosos ao seu site.

            let count = this.display.value; // pegando o valor do display

            try {
                count = eval(count);
                // tentando executar a conta com a função eval
                // ela lê o texto e tenta realizar a ação

                if(!count) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(count);

            } catch(e) {
                alert('Conta inválida');
            }

        },

        clickButtons() {
            // this -> calculadora
            window.document.addEventListener('click', function(event) {
                const element = event.target; // adicionando na variável
                // qual elemento recebeu o evento de click
                // a partir daqui o this é o document
                // para não gerar erros precisamos corrigir
                // vamos passar o texto daquele botão para o input text.

                if (element.classList.contains('btn-num')) {
                    this.btnForDisplay(element.innerText);
                    // pegando o texto que esta no botão, no element que recebe o click
                    // estou enviando os dados do botão para o display
                }

                if (element.classList.contains('btn-clear')) {
                    this.clearDisplay(); // Apagando os campos
                }

                if (element.classList.contains('btn-del')) {
                    this.deleteOne();
                }

                if (element.classList.contains('btn-eq')) {
                    this.performAccount(); // Realizando a conta quando o usuário clicar nesse botão
                }
            }.bind(this));  // indica que o this é a calculadora
        },

        btnForDisplay(valor) {
            this.display.value += valor;
            // Adiciona ao display o texto dos nossos buttons
        }
    };
}

const calculator = createCalculator();
calculator.start();

// ARROW FUNCTIONS NÃO PERMITE ALTERAÇÃO DO THIS
// ENTÃO NO CASO ACIMA, UTILIZANDO ARROW FUNCTION, VOCÊ NÃO PRECISARIA
// UTILIZAR DO bind() PARA ALTERAR NOVAMENTE O THIS
// POIS ELE SERIA SEMPRE A CALCULADORA

/*
ENTENDENDO O CÓDIGO

Tenho a função construtora createCalculator onde tenho todos os métodos e o que preciso para iniciar a calculadora

display -> recebe o meu input text, onde colcamos os valores para realizar a conta
btnClear -> recebe o botão responsável por limpar o input
start() -> iniciar a nossa calculadora com a função clickButtons e pressEnter.
clickButtons() -> recebe um evento e através de event.target verificamos qual botão recebe o evento de click.
Quando é um btn-num nós vamos adicionar ao display o texto daquele button. A function btnForDisplay é responsável
por isso.
btnForDisplay() -> espera receber um valor e adiciona esse valor ao display. Esse valor é enviado através
da function clickButtons.

clickButtons() -> caso seja o btn-clear é chamada a function clearDisplay. Que é responsável por zerar
o valor do nosso display.
Caso seja btn-del, é chamada a function deleteOne. Ela lê a string, e faz um slice removento apenas o último número.
btn-eq vai ser responsável por fazer o calculo. Em performAccount, responsável por fazer o calculo.
Nós utilizamos a função eval. Esta função tenta ler e executar uma ação em javascript. Então ela vai ler os valores
e executar as operações matemáticas, em nosso caso.
Caso o valor seja inválido, é retornado um alerta. Caso não, será colocado no display o valor da operação.

pressEnter() -> Adicionamos ao display, o evento keyUp, e verificamos se aquela tecla que foi pressionada
é a tecla enter.
O addEventListener espera receber o evento que queremos escutar e uma function, lembre disso.
Estamos passando uma arrow function para não precisar alterar o valor do this, depois.
Caso a tecla pressionada seja o 13, nós chamamos a função de realizar a conta -> performAccount.

*/
