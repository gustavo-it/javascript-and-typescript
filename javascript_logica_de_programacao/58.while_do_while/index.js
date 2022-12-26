// While e Do While - Estrutura de repetição

let controle = 0;
/*
while (controle <= 10) {
    console.log(controle);
    controle ++;
}
*/
// Note que o while é bem parecido com for, porém com algumas diferenças.
// Como por exemplo a iterador sendo declarado fora da estrutura.

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

// o do while, primeiro executa o código e depois checa a condição
do {
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);