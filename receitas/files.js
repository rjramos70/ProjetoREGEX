const fs = require('fs')

// ${__dirname} -> Pega o caminho absoluto do projeto
const read = nomeArquivo => {
    return fs.readFileSync(`${__dirname}/originais/${nomeArquivo}`, { encoding: 'utf-8'})
}

const write = (nomeArquivo, conteudo) => {
    const dirname = `${__dirname}/alterados`
    
    // Verifica se o diretório de saída existe
    if(!fs.existsSync(dirname)){
        // Caso não exista, criar o diretório
        fs.mkdirSync(dirname)
    }

    // Cria o arquivo passando o conteúdo com encoding 'utf-8s'
    fs.writeFileSync(`${dirname}/${nomeArquivo}`, conteudo, { encoding: 'utf-8' })
}

// Exporta os métodos para serem vistos pelos outros módulos
module.exports = { read, write }