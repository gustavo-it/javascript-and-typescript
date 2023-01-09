// Babel e "can i use"
// Babel é um compilador de código
// Nele você pode o seu código e o babel vai reescrever
// adaptando para os navegadores mais antigos.

// Para saber se o navegador consegue rodar o seu código, você
// pode utilizar o site https://caniuse.com/
// Basta digitir o que você vai usar e ele vai te dizer em quais
// navegadores ele irá rodar.

/* 
Instalação do npm no linux

1° -> sudo apt-get install npm

2° -> na pasta do projeto aplique o comando npm init -y

Será gerado um arquivo chamado "packege.json"
Esse arquivo ira gerenciar quais pacotes do node precisamos para
o nosso projeto.

Instalando o babel
npm install --save-dev @babel/cli @babel/preset-env @babel/core
*/

const nome = 'Maria';
const obj = {nome};
const novoObjs = {...obj};
console.log(novoObjs);

/* 
Convertendo o código acima para um código mais antigo
com ajuda do babel

npx babel nome_do_arquivo.js -o bundle.js --presets=@babel/env

Para que o arquivo seja atualizado automaticamente quando você fizer
uma mudança no código. Você pode ir até o arquivo package.json e
adicionar uma chave em baixo de test:
    "babel": "babel ./nome_do_seu_arquivo.js -o ./bundle.js --presets=@babel/env -w"

Para executar o código coloque o código a seguir no terminal:
npm run babel
*/