// . é um coringa, válido para uma só posição
const texto = '1,2,3,4,5,6,7,8,9,0'

// Usa o . (ponto) como coringa
// Saída no console: [ '1,2' ]
console.log(texto.match(/1.2/g))

// Saída no console: null
console.log(texto.match(/1..2/g))

// Saída no console: [ '1,2,' ]
console.log(texto.match(/1..,/g))


const notas = '8.3,7.1,8.8,10.0'

// Saída no console: [ '8.3', '8.8' ]
console.log(notas.match(/8../g))

// Saída no console: [ '8.3', '7.1', '8.8', '0.0' ]
console.log(notas.match(/.\../g))



