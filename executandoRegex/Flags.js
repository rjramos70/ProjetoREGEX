// g - global
// i - ignore case 

const texto = 'Carlos assinou o abaixo-assinado.'

// Sem usar a flag global
console.log(texto.match(/C|ab/))

// Usando a flag global 'i'
console.log(texto.match(/c|ab/i))

// Sem usar a flag global
console.log(texto.match(/c|ab/))

// Usa flag global e sem case sensitive
console.log(texto.match(/ab|c/gi))
