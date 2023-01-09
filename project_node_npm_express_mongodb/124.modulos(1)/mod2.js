// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;
// console.log(falaNome());

// const { nome, sobrenome, falaNome } = require('./mod1');
// console.log(falaNome());

const { Pessoa } = require('./mod1');
const pessoa = new Pessoa('Maria');
console.log(pessoa);