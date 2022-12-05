/* 
para calcular o imc --> peso dividido por altura * altura
*/
const nome = 'Maria';
const sobrenome = 'Fernanda';
const idade = 25;
const peso = 60;
const altura = 1.70;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2022 - idade

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem' + ' ' + altura + ' ' + 'e seu IMC é de' + ' ' + imc);
console.log(nome, sobrenome, 'nasceu em', anoNascimento);

// Template string = Uma string onde podemos colocar variáveis dentro dela
// Utilizamos a crase, utilizamos $ e {} para declarar a variável
console.log(`${nome} ${sobrenome} tem ${altura} e o seu IMC é de ${imc}`)