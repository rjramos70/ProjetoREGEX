const texto = 'ABC [abc] a-c 1234'

// Saída no console: [ 'a', 'b', 'c', 'a', 'c' ]
console.log(texto.match(/[a-c]/g))

// Esta expressão não trás um range, mas sim a expressão 'a-c'
// Saída no console: [ 'a-c' ]
console.log(texto.match(/a-c/g))    // não define um range

// Saída no console: [ 'A', 'B', 'C', '[', 'a', 'b', 'c', ']', 'a', 'c' ]
console.log(texto.match(/[A-z]/g))  // Intervalos usam a ordem da tabela UNICODE

// Tem que respeitar a ordem da tabela UNICODE
// https://unicode-table.com/pt/#basic-latin
// Saída no console: ERRO - SyntaxError: Invalid regular expression: /[a-Z]/: Range out of order in character class
// console.log(texto.match(/[a-Z]/g))
// console.log(texto.match(/[4-1]/g))

