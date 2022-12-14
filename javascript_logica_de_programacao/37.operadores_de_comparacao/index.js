/*
Operadores de comparação (com asterísco não é recomendado utilizar)
> maior que
>= maior ou igual a
< menor que
<= menor ou igual a
== igualdade (verifica a igualdade entre dois operandos, esquerda e direita) *
=== igualdade estrita (checa valor e tipo)
!= diferente (valor) *
!== diferente estrito (checa valor e tipo)
*/

console.log(10 > 5); // perguntando a linguagem se 10 é maior que 5 retorna(true ou false)
console.log(10 >= 11);

const num1 = 10;
const num2 = 5;
console.log(num1 == num2);
// Agora vamos ao motivo para não utilizar o sinal de igualdade(==)
// Quando você utiliza(==) você pode estar comparando, por exemplo, um número que vale 10
// e uma string que vale 10. A linguagem compara uma string com number, um erro.
// Isso se chama correção de tipo. A linguagem converte um tipo em outro.

console.log(num1 === num2);
// Assim ele checa também o tipo da variável

console.log(num1 !== num2);
// O mesmo que vimos para o sinal de 'igual', vale para o sinal de 'diferente'.