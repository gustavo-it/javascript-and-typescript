// Exercícios com lógica de programação - 03
// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número não é divisível por 3 e 5 = retorna o próprio número
// Checar se o número é realmente um número
// Use a função com números de 0 a 100

const numberFunction = (number) => {

    if (typeof number !== 'number') return 'is not number';

    // Esta condição checa 2 valores. Então precisa vir primeiro.
    if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';

    if (number % 3 === 0) return 'Fizz';

    if (number % 5 === 0) return 'Buzz';

    if (!number % 3 === 0 || !number % 5 === 0) return number;
    
};

for (let i = 0; i <= 100; i++) {
    console.log(i, numberFunction(i));
}
