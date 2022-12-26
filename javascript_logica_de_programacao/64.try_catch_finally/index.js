// Tratando e lançando erros (try, catch, finally)
// try -> executa quando não há erros.
// catch -> executa quando há erros.
// finally -> é executado de qualquer maneira.

const returnHours = (data) => {
    if (data && !(data instanceof Date)) { // Checando se é uma instância de Date
        throw new TypeError('Esperando instância de Date.')
    }

    if (!data) {
        // Caso não receba data faça isso
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit', // adiciona um zero caso ao lado de números isolados
        minute: '2-digit',
        second: '2-digit',
        hour12: false // vai contar como 24 horas
    });

};

try {
    const data = new Date('01-01-1970 12:58:12');
    console.log(returnHours());
    console.log(hora);
} catch(error) {
    console.log('Entre em contato com um administrador');
} finally {
    console.log('Tenha um bom dia!')
}
