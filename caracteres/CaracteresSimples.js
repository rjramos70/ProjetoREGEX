const texto = '1,2,3,4,5,6,a.b c!d?e'

// Regex que identifica a virgula
const regexVirgula = /,/

// Gera um arrays quebrando cada elemento quando identificar virgula no texto:
// Saída no console: [ '1', '2', '3', '4', '5', '6', 'a.b c!d?e' ]
console.log(texto.split(','))

// Agora vamos usar a expressão para identificar a primeira virgula dentro do texto
// Saída no console: [ ',', index: 1, input: '1,2,3,4,5,6,a.b c!d?e', groups: undefined ]
console.log(texto.match(regexVirgula))

// Agora vamos usar a expressão para identificar global todas as virgula dentro do texto
// Saída no console: [ ',', ',', ',', ',', ',', ',' ]
console.log(texto.match(/,/g))

// Pesquisa a letra A em todo o texto (global)
// Saída no console: null
console.log(texto.match(/A/g))

// Pesquisa a letra A em todo o texto (global) e sem case sensitive
// Saída no console: [ 'a' ]
console.log(texto.match(/A/gi))

// Pesquisa o número 2 em todo o texto (global)
// Saída no console: [ '2' ]
console.log(texto.match(/2/g))

// Pesquisa um conjunto de caracteres no texto
// Saída no console: ['b c!d', index: 14, input: '1,2,3,4,5,6,a.b c!d?e', groups: undefined ]
console.log(texto.match(/b c!d/))