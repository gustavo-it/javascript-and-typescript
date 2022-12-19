/*
if, else if e else
*/


const hora = 540;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >=18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Olá');
}

/*
Quando eu utilizo o 'else if' eu estou dizendo para o javascript checar
essa outra condição.
'else if' não pode ser utilizado sem um 'if' antes dele.
posso ter vários 'else if' na checagem.
só posso ter 1 'else' na checagem.
*/
