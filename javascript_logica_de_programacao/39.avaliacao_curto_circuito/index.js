/* 
short-circuit
&& -> false && true -> false "o valor mesmo" retorna o valor falso
|| -> true && false -> vai retornar "o valor verdadeiro"

FALSY
*false
0
'' "" ``
null / undefined
NaN
Qualquer coisa diferente desses elementos acima, é avaliada em True
*/
console.log('fernanda' && 'maria'); // retorna o último valor
console.log('fernanda' && '' && 'fernanda'); // retorna o valor false('')
console.log(0 || false || null || 'maria' || true); // retorna o valor true (no caso é 'maria')
console.log(0 || false || null); // retorna o último valor

const corUsuario = null;
let corPadrao = corUsuario || 'azul';

console.log(corPadrao); // é retornado o valor verdadeiro