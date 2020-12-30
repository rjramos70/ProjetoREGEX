const texto = `1,2,3,4,5,6,a.b c!d?e	-
f_g`

// Pegar todos os número dentro do texto
// Saída no console: [ '1', '2', '3', '4', '5', '6' ]
console.log(texto.match(/\d/g))	// Números [0-9]

// Pega tudo que não é número
// Saída no console: [ ',',  ',', ',',  ',', ',', ',', 'a', '.', 'b', ' ', 'c', '!', 'd', '?', 'e', '\t', '-', '\n', 'f', '_', 'g' ]
console.log(texto.match(/\D/g))	// Não números [^0-9]

// Pega os caracteres que abrange [a-zA-Z0-9_]
// Saída no console: [ '1', '2', '3', '4', '5', '6', 'a', 'b', 'c', 'd', 'e', 'f', '_', 'g' ]
console.log(texto.match(/\w/g))	// Caracteres [a-zA-Z0-9_]

// Pega os caracteres fora do range [^a-zA-Z0-9_]
// Saída no console: [ ',',  ',', ',',  ',', ',',  ',', '.',  ' ', '!',  '?', '\t', '-', '\n' ]
console.log(texto.match(/\W/g))	// Não caracteres [^a-zA-Z0-9_]

// Saída no console: [ ' ', '\t', '\n' ]
console.log(texto.match(/\s/g))	// Espaços [ \t\n\r\f ]

// Saída no console: [ '1', ',', '2', ',', '3', ',', '4', ',', '5', ',', '6', ',', 'a', '.', 'b', 'c', '!', 'd', '?', 'e', '-', 'f', '_', 'g' ]
console.log(texto.match(/\S/g))	// Não espaços [^\t\n\r\f ]

// \b \B: Bordas de palavras
