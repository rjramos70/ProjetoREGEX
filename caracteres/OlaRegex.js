const texto = 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.'

// g = global, pesquisa em todo o texto
// i = ignora case sensitive
const regex = /casa/gi

console.log(texto.match(regex))

// Busca o literal exato no texto que é passado no .match()
console.log(texto.match(/a b/))

// console.log(texto.match(/a c/))

// console.log(texto.match(/a a/))




