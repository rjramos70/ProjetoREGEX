const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// ? -> zero ou um (opcional)
// O caracter antes da interrogação se torna opcional, neste exemplo a letra 'o'
const regex = /fogo?/gi

// Saída no console: [ 'fogo', 'FOGO' ]
console.log(texto1.match(regex))

// Saída no console: [ 'fog' ]
console.log(texto2.match(regex))