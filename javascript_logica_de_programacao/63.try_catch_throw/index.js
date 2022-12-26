// Tratando e lançando erros (try, catch, throw)
// try -> tenta executar esse código.
// catch -> recebe o erro.
// throw -> podemos lançar um erro.
// throw new Error() -> lança um erro ao estilo de javascript
// Podemos trocar o Error() por outras classes de error.

const sum = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números');
    }
    return x + y;
};

try {
    console.log(sum(1, 3));
    console.log(sum(1, 'asas'));
} catch (error) {
    console.log('Entre em contato com administrador');
}