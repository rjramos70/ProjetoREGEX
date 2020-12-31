const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

// Seleciona palavras que começam com a palavra 'dia'
// Saída no console: [ 'diatonico', 'diafragma' ]
console.log(texto1.match(/\bdia\w+/gi))

// Seleciona palavras que terminam com a palavra 'dia'
// Saída no console: [ 'media', 'wikipedia', 'bom_dia', 'melodia' ]
console.log(texto1.match(/\w+dia\b/gi))

// Seleciona palavras que tem a palavra 'dia' no meio da palavra
// Saída no console: [ 'radial' ]
console.log(texto1.match(/\w+dia\w+/gi))

// Seleciona somente a palavra 'dia'
// Saída no console: [ 'dia' ]
console.log(texto1.match(/\bdia\b/gi))

// Borda é não \w, que é [^A-Za-z0-9_]... temos problemas com acentos!
const texto2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'

// Saída no console: [ 'dia', 'dia', 'dia', 'dia' ]
console.log(texto2.match(/\bdia\b/gi))

// Um forma de resolver o problema da expressão acima
// Saída no console: [ 'dia', 'diatônico', 'diafragma,', 'média', 'wikipédia', 'bom-dia', 'melodia', 'radial' ]
console.log(texto2.match(/(\S*)?dia(\S*)/gi))   // a vírgula entra!

// Saída no console: [ 'dia', 'diatônico', 'diafragma', 'média', 'wikipédia', 'bom-dia', 'melodia', 'radial' ]
console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi))   // a vírgula não entra!


