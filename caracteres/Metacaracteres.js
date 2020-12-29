// Lista de alguns metacaracteres
// . ? * + - ^ $ | [ ] { } ( ) \ :

const texto = '1,2,3,4,5,6,a.b c!d?e'

// Expressão regular que utiliza o ponto como literal
const regexPonto = /\./g

// Saída no console: [ '1,2,3,4,5,6,a', 'b c!d?e' ]
console.log(texto.split(regexPonto))

// Expressão Regular para símbolos
const regexSimbolos = /,|\.|\?|!| /g

// Saída no console: ['1', '2', '3', '4','5', '6', 'a', 'b','c', 'd', 'e']
console.log(texto.split(regexSimbolos))


