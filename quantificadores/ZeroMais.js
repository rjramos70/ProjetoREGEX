const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// * -> zero ou mais
// O caracter antes do asterisco poderá não se repetir ou ter várias repetições
const regex = /fogo*/gi

// Saída no console: [ 'fogo', 'FOGOOOOOO' ]
console.log(texto1.match(regex))

// Saída no console: [ 'fog' ]
console.log(texto2.match(regex))