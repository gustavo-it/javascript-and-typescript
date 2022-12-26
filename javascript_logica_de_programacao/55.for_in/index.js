// For in - Estrutura de repetição
const frutas = ['Pêra', 'Maçã', 'Uva'];

for (let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'maria',
    sobrenome: 'fernanda',
    idade: 25
};

for (let key in pessoa) {
    console.log(key, pessoa[key]);
}