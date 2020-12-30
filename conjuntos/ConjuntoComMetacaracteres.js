// Conjunto de elementos que representam metacaracteres
const texto = '.$+*?-'

// Saída no console: [ '.', '$', '+', '*', '?' ]
console.log(texto.match(/[+.?*$]/g))

// Dentro de um conjunto o ponto se comporta como o literal ponto, e não
// o coringa ponto para qualquer elemento.
// Saída no console: [ '.' ]
console.log(texto.match(/[.]/g))    // Não precisa de escape dentro do conjunto

// Nesta exemplo o '-' não esta sendo usado como o literal traço (hifen), mas sim 
// como intervalo entre $ até ?
// Saída no console: [ '.', '$', '+', '*', '?', '-' ]
console.log(texto.match(/[$-?]/g))  // Isso é um intervalo (range)

// NÃO funciona como intervalo (range)...
// Saída no console: [ '$', '?', '-' ]
console.log(texto.match(/[$\-?]/g)) 

// Saída no console: [ '?', '-' ]
console.log(texto.match(/[-?]/g)) 

// PODE PRECISAR de escape dentro de conjunto: - [ ] ^



