// No início...

// Um byte (8 bites) - 256 caracteres
// Símbolos, Pontuação, A-Z, a-z, 0-9

// Dois bytes (16 bites) - 65500+ caracteres
// +Simbolos, +Pontuação, A-Z, a-z, 0-9

// Atualmente...

// Unicode
// Quantidade de bytes variável - Expansível
// Suporta mais de 1 milhão de caracteres
// Atualmente tem mais de 100.000 caracteres atribuidos

// Tabela do Unicode
// https://unicode-table.com/pt

const texto = 'aʬc௵d'

// Referenciando usandi o código na tabela Unicode
// Saída no console: [ 'ʬ', '௵' ]
console.log(texto.match(/\u02AC|\u0BF5/g))

