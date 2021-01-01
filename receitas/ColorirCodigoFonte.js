const aplicarCor = (txt, reg, cor) => {
    return txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`)
}

const files = require('./files');

// Carrega o arquivo
const texto = files.read('codigoFonte.html')

// Regex para extrair somente a parte do código que esta entre as tags <code></code>
const codeRegex = /<code>[\s\S]*<\/code>/i

// Usamos 'let' invés de 'const' porque vamos precisar alterar o código
let codigo = texto.match(codeRegex)[0]  // Pega somente o conteúdo entre <code></code>

// REGEXs
const regexCodigoEntreAspasDuplas = /(\".*\")/g
const regexPalavrasReservadas = /\b(package|public|class|static|if|else)\b/g
const regexTiposDeVariaveis = /\b(void|int|boolean|byte|short|long|float|double|char)\b/g
const regexComentariosMultiplasLinhas = /(\/\*[\s\S]*\*\/)/g
const regexComentariosDeUmaLinha = /(\/\/.*?\n)/g


// Extrai as Strings...
codigo = aplicarCor(codigo, regexCodigoEntreAspasDuplas, 'ce9178')  // Extrai texto entre aspas duplas (String...)
codigo = aplicarCor(codigo, regexPalavrasReservadas, 'd857cf')  // Extrai palavras reservadas
codigo = aplicarCor(codigo, regexTiposDeVariaveis, '1385e2')    // Extrai tipos de variáveis
codigo = aplicarCor(codigo, regexComentariosMultiplasLinhas, '267703')  // Extrai comentários de multiplas linhas
codigo = aplicarCor(codigo, regexComentariosDeUmaLinha, '267703')  // Extrai comentários de uma linha

const conteudoFinal = texto.replace(codeRegex, codigo)  // Substirui o codeRegex pelo 'codigo' alterado

// Cria o arquivo de saída
files.write('codigoFonte.html', conteudoFinal)