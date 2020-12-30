const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// + -> um ou mais ocorrência de determinado caractere
// O caracter antes do sinal de mais pode se repetir uma ou mais vezes
const regex = /fogo+/gi

// Saída no console: [ 'fogo', 'FOGOOOOOO' ]
console.log(texto1.match(regex))

// Saída no console: null
console.log(texto2.match(regex))

const texto3 = 'Os números: 0123456789.'

// Trás todos os números separados como um Array de elementos
// Saída no console: [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
console.log(texto3.match(/[0-9]/g))

// Trás todos os números como sendo um só elemento
// Saída no console: [ '0123456789' ]
console.log(texto3.match(/[0-9]+/g))

// Usando shorthand....
// Trás todos os números separados como um Array de elementos
// Saída no console: [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
console.log(texto3.match(/[\d]/g))

// Trás todos os números como sendo um só elemento
// Saída no console: [ '0123456789' ]
console.log(texto3.match(/\d+/g))