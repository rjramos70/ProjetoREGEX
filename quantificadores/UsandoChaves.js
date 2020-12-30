const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.'

// para definir um quantificador usa-se {}

// Trás os números que tenham um ate dois digitos
// Saída no console: [ '12', '0',  '6', '9',  '21', '23', '45', '46' ]
console.log(texto.match(/\d{1,2}/g))

// Trás os números que tenham dois digitos
// Saída no console: [ '12', '21', '23', '45', '46' ]
console.log(texto.match(/[0-9]{2}/g))

// Trás os números que tenham um ou mais digitos
// Saída no console: [ '120', '6', '9',   '21', '23',  '45', '46' ]
console.log(texto.match(/\d{1,}/g)) // Quantificador guloso

// Quantificadores para palavras

// Saída no console: [ 'recebeu', 'apostan' ]
// OBS: A palavra 'milhões', que tem 7 digitos, não veio porque 'õ' não esta contida
//      no shorthand \w e com isso não foi considerada.
console.log(texto.match(/\w{7}/g)) // Palavras que tenham exatamente 7 digitos

// Saída no console: [ 'recebeu', 'milhões', 'apostando' ]
console.log(texto.match(/[\wõ]{7,}/g)) // Palavras que tenham 7 ou mais digitos

// Saída no console: [ 'recebeu', 'milhões', 'apostando' ]
// OBS: À-÷ -> Aceita todos os caracteres entre 'À' e '÷' (catacter de percente)
//      na tabela UNICODE.
console.log(texto.match(/[\wÀ-÷]{7,}/g)) // Palavras que tenham 7 ou mais digitos

// No futuro.... Bordas
// Saída no console: [ '6', '9', '21', '23', '45', '46' ]
console.log(texto.match(/\b\d{1,2}\b/g))

// Saída no console: [ 'recebeu', 'milhões' ]
console.log(texto.match(/\b[\wõ]{7}\b/g))