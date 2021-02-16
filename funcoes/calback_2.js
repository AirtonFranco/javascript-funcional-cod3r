const fs = require('fs')
const path = require('path')

//concatena as rotas
const caminho = path.join(__dirname, 'dados.txt')

//pega o conteudo do arquivo
function exibirConteudo (err, conteudo) {
    console.log(conteudo.toString())
}

//exibe o conteudo do arquivo
fs.readFile(caminho, exibirConteudo)