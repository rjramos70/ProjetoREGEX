const texto = '0 1 10 192 199 201 249 255 256 312 1010 1512'

// Criar uma Regex que pegue números entre 0-255
const regexNumerosEntre0e255 = /\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g
// \d{1,2}  -> Números com um a dois digitos, de 0 - 99
// 1\d{2}   -> Números que iniciam com '1' e mais dois números, de 100 - 199
// 2[0-4]\d -> Números que comecem com '2', que o segundo digito seja entre 0 e 4, e o último vá de 0 - 9, de 200 - 249
// 25[0-5]  -> Números que se iniam com 25, e que o terceiro digito seja entre 0 e 5, de 250 - 255

// Saída no console: [ '0',   '1', '10',  '192', '199', '201', '249', '255' ]
console.log(texto.match(regexNumerosEntre0e255))
