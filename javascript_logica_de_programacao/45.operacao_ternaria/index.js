// Operação ternária é representada por ? :
// ? 'valor para verdadeiro' : 'valor para falso';

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
// Note que passo após a interrogação o valor que quero executar 
// caso a expressão seja verdadeira. E após os dois pontos indico o valor caso
// a expressão seja falsa.
console.log(nivelUsuario);

/* 
if (pontuacaoUsuario >= 1000) {
    console.log('Usuário' VIP);
} else {
    console.log('Usuário normal');
}
*/
