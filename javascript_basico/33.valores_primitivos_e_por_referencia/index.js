/* 
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)

Referência (mutável) - array, object, function
*/

// copiando um valor
let a = 1;
let b = a;
b = 12312;
console.log(a);
console.log(b);
// Note que não temos referência. Apenas copiamos o valor
// As variáveis não apontam para o mesmo local.

// é passado por referência. Tanto 'a' quanto 'b' apontam para o mesmo local na memória
let c = [1, 2, 3];
let d = c;

// Quando é alterado o valor de 'd', é alterado também o valor de 'c'
d.push(4);
d.shift();
console.log(c);

// Posso fazer essa refenrência quantas vezes quiser

// Podemos fazer com que os valores sejam independentes
let e = [...c];
e.push('novo');
console.log(c);
console.log(e);

// Mais um exemplo
// Alterando o nome o valor de 'g', o 'f' também é alterado.
const f = {
    nome: 'maria',
    idade: 25
};

const g = f;
f.nome = 'João';
console.log(g);

// valor independente
const h = {...f};
h.idade = '30';
console.log(f);
console.log(h);