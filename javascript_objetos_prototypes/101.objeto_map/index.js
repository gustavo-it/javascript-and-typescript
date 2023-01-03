// Objeto Map()

const pessoas = [
    {id: 1, nome: 'maria'},
    {id: 2, nome: 'fernanda'},
    {id: 4, nome: 'rose'},
    {id: 3, nome: 'rosana'},
];

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa });
}

novasPessoas.delete(1);
console.log(novasPessoas);
console.log(novasPessoas.get(2));

for (const [identifier, {id, nome}] of novasPessoas) {
    console.log(identifier, id, nome);
}

/*
Vamos tornar o id como identificador daquela pessoa. ficando da seguinte forma:
'1' {id: 1, nome: 'maria'},
...
E na ordem que desejamos.
*/