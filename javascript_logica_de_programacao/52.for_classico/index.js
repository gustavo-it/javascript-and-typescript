// Estruturas de repetição.
// Precisamos de 3 coisas dentro dos parênteses.
// precisamos declarar uma variável de controle dentro dos parênteses.
// precisamos colocar um condição dentro dos parênteses
// precisamos incrementar ou decrementar a nossa variável de controle.
// bloco do 'for' não tem ponto e vírgula no final.

for (let i = 0; i <= 5; i++) { // i = index
    // Separamos as condições por ponto e vírgula
    console.log(i);
}

// invertendo o valor
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

for (let i = 10; i >= 1; i-=2) {
    console.log(i);
}

// Checando se um número é par
for (let i = 0; i <= 20; i++) {
    const number = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, number);
}

// Percorrendo um array com for
const frutas = ['maça', 'pêra', 'uva'];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
