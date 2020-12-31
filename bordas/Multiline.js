const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`

// Verificar no texto quantos '\n' tem no texto
// Saída no console: [ '\n', '\n', '\n', '\n' ]
console.log(texto.match(/\n/g))

// Saída no console: null
console.log(texto.match(/^(\w).+\1$/g))

// Usando a flag multiline
// Saída no console: [
//  'Leo é muito legal',
//  'Emanuel foi jogar em Sergipe',
//  'Bianca é casada com Habib'
// ]
console.log(texto.match(/^(\w).+\1$/gim))
