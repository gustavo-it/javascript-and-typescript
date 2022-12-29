// Funções recursivas

// É uma função que se chama de volta

function recursiva(max) {
    if (max >= 10) return;
    max ++;
    console.log(max);
    recursiva(max); // chamando a função recursiva.
}
recursiva(0);

// Essa função executa o código dela e se chama de volta.
// Em nosso caso, estamos estabelecendo um limite para que ela pare.
// assim como while, precisamos incrementar o contador.