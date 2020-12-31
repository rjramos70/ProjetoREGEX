const texto = 'supermercado hipermercado minimercado mercado'

// Saída no console: [ 'supermercado', 'hipermercado', 'minimercado', 'mercado' ]
console.log(texto.match(/(super|hiper|mini)?mercado/g))

// Grupo aninhado
// Saída no console: [ 'supermercado', 'hipermercado', 'minimercado', 'mercado' ]
console.log(texto.match(/((hi|su)per|mini)?mercado/g))
