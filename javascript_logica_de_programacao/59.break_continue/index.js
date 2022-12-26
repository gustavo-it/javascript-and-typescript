//Break e Continue

// Continue nos permite pular uma parte do código, uma iteração.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) {

    if (numero === 2) {
        console.log('Pulei o número 2.')
        // pulando o número 2.
        continue;
    }

    if (numero === 5) {
        console.log('Pulei o número 5.')
        continue;
    }

    // Temos o break que faz o inverso, ele vai parar a execução do código.
    if (numero === 7) {
        break;
    }
    console.log(numero);
}
