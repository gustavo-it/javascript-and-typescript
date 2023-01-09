const path = require('path'); // CommonJS

module.exports = {
    mode: 'development',
    // Caminho do nosso arquivo de desenvolvimento (não vai para produção)
    entry: './src/index.js',
    output: {
        // caminho relativo da pasta public
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        // Nome do arquivo final que será renderizado no navegador
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map' // faz um mapeamento
};