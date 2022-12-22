// O date é uma função construtora. Então para utilizarmos precisamos fazer:
const data = new Date();
// função construtora = servir de molde para a criação de objetos
// sempre começa com a primeira letra em maiúsculo

// Date(0) = resultará em 01/01/1970 é referido como época unix

// data(2019, 3, 20, 15, 14, 27, 500);
// ano, mês, dia, hora, minutos, segundos, milésimo de segundo
// colocando 60 segundos (não existe, vai até 59), os minutos são corrigidos
// omitindo os valores, ele vai zerando
// o mês em javascript comoça em 0
// 0 - janeiro | 1- fevereiro | 2 - março | 3 - abril ...

console.log(data.toString());
// Data exibida em string

// É possível mandar a data através de string
const data2 = new Date('2019-04-20 20:20:59');
console.log(data2.toString());

// Obtendo os dados da data
console.log('Dia', data2.getDate()); // getDate() obtém o número do dia
console.log('Mês', data2.getMonth()); // getMonth() obtém o mês
console.log('Ano', data2.getFullYear()); // getFullYear() obtém o ano
console.log('Hora', data2.getHours()); // getHours() obtém às horas
console.log('Min', data2.getMinutes()); // getMinutes() obtém minutos
console.log('Seg', data2.getSeconds()); // getSeconds() obtém os segundos
console.log('ms', data2.getMilliseconds()); // getMilliseconds() obetém os mili segundos
console.log('Dia da semana', data2.getDay()); // getDay() obtém o número do dia da semana
// mês começa em 0 | dia domingo é dia 0 da semana | sábado é dia 6 da semana

// milésimos de segundos da época unix até hoje
console.log(Date.now());

function zeroAesquerda (num) {
    // retorna o número se for maior que 10
    // se não for adiciona o 0 ao lado do número
    return num >= 10 ? num : `0${num}`
}

function formataData (data) {
    const dia = zeroAesquerda(data.getDate());
    const mes = zeroAesquerda(data.getMonth()) + 1; // Como nosso mês começa no 1, estamos adicionando + 1
    const ano = zeroAesquerda(data.getFullYear());
    const hora = zeroAesquerda(data.getHours());
    const min = zeroAesquerda(data.getMinutes());
    const seg = zeroAesquerda(data.getMilliseconds());

    return `${dia}/${mes}/${ano}/ ${hora}:${min}:${seg}`;
}

const data3 = new Date();
const dataBrasil = formataData(data3);
console.log(dataBrasil)
