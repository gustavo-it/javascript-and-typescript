// Exercícios com lógica de programação - 02
// Escreva uma função chamada que recebe dois argumentos.
// largura e altura. Retorne true se a imagem estiver no modo paisagem;

const pictureMode = (width, height) => {
    if (width < 1080 || height  < 566) {
        return 'Modo retrato';
    }
    return true;
};

console.log(pictureMode(1030, 566));

// segunda forma de resolver
const paisagem = (largura, altura) => largura > altura;

console.log(paisagem(1800, 1000));