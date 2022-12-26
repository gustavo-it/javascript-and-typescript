const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto;

if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda';
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça';
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta';
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta';
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta';
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sábado';
} else {
    diaSemanaTexto = '';
}

// console.log(diaSemana, diaSemanaTexto);

/*
Suponha que queremos fazer uma comparação para apresentar em texto o dia
da semana.
Então se o dia da semana for zero, quero apresentar o texto 'segunda'.
Quando temos esse tipo de condição, é perfeito para utilizarmos o
switch case.
*/

/* 
Para utilizar o switch nós chamamos a palavra reservada switch' e
entre parênteses passamos a variável que queremos checar.
Em seguida, abrimos as chaves, e passamos 'case' seguida do valor e dois
pontos.
Após isso passamos o nosso bloco de código que queremos executar quando
tivermos aquele valor.
Precisamos indicar ao javascript para ele terminar o código assim que
a condição for atendida. Para isso utilizamos o 'break' seguido de
ponto e vírgula.
*/

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = '';
        break;
}
// Temos o 'default' que funciona como um 'else'.
// NÃO ESQUEÇA DE UTILIZAR A PALAVRA BREAK, CASO CONTRÁRIO VOCÊ TERA
// PROBLEMAS NO SEU CÓDIGO.
// Sem o break seu código não vai parar de ser executado.

console.log(diaSemana, diaSemanaTexto);

// Utilizando o switch dentro de uma função
// Nesse caso não precisamos do 'break'.

function getDayWeekText (diaSemana) {
    let diaSemanaTexto; // Declarando a variável dentro do escopo da func

    switch (diaSemana) {
        case 0:
            return diaSemanaTexto = 'Domingo';
        
        case 1:
            return diaSemanaTexto = 'Segunda';

        case 2:
            return diaSemanaTexto = 'Terça';

        case 3:
            return diaSemanaTexto = 'Quarta';

        case 4:
            return diaSemanaTexto = 'Quinta';

        case 5:
            return diaSemanaTexto = 'Sexta';

        case 6:
            return diaSemanaTexto = 'Sábado';

        default:
            return diaSemanaTexto = 'Dia inválido';
    };
}

console.log(getDayWeekText(diaSemana));
console.log(getDayWeekText(3));
console.log(getDayWeekText(7));