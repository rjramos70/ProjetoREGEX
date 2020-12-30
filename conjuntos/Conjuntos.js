// Conjuntos ou Classes de caracteres
const texto = '1,2,3,4,5,6,a.b c!d?e[f'

// para se definir uma classe (ou conjunto) de caracteres usa-se []
// Identifica qualquer um dos elementos  no conjunto
const regexPares = /[02468]/g

// Saída no console: [ '2', '4', '6' ]
console.log(texto.match(regexPares))

// Se forem colocados os mesmos número fora das colchetes retornaria NULL
// Saída no console: null   - Pois não existe a expressão literaria 02468
console.log(texto.match(/02468/g))

const texto2 = 'João não vai passear na moto.'

// Busca palavra que inicia com 'n' e que depois posssa ter 'a' ou 'ã'
// Saída no console: [ 'nã', 'na' ]
const regexComESemAcento = /n[aã]/g
console.log(texto2.match(regexComESemAcento))


