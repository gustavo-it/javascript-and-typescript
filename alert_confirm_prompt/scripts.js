alert('Aqui vai a mensagem exibida no navegador.'); // Somente exibe uma mensagem
confirm('Você deseja apagar?'); // Esta função retorna um valor Boolean
prompt('Digite o seu nome: '); // Função onde o usuário pode digitar alguma coisa

// Sempre que executo uma função no javascript, essa função pode ou não me retornar algum valor

// Pegando o valor para a constante
const confirma = confirm('Realmente deseja apagar?');
// O valor retornado pelo usuário está armazenado na constante
// Para enxergar, basta usar o console do navegador --> confirma

// Pedimos para o usuário digitar os números e depois retornamos o resultado com o alert
const num1 = parseInt(prompt('Digite um número: '));
const num2 = parseInt(prompt('Digite outro número: '));
const resultado = num1 + num2;
alert(`O resultado foi ${resultado}`);