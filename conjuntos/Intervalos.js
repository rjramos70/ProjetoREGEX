const texto = '1,2,3,4,5,6,a.b c!d?e[f'

// Pega todas as letras minusculas entre 'a' e 'z'
// Saída no console: [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(texto.match(/[a-z]/g))

// Pega todas as letras minusculas entre 'b' e 'd'
// Saída no console: [ 'b', 'c', 'd' ]
console.log(texto.match(/[b-d]/g))

// Pega todas os números num intervalo de '2' a '4'
// Saída no console: [ '2', '3', '4' ]
console.log(texto.match(/[2-4]/g))

// Pega intervalo de 'A' a 'Z', e de 1 a 3
// Saída no console: [ '1', '2', '3', 'a', 'b', 'c', 'd', 'e', '[', 'f' ]
// g : Busca globalmente em todo o texto; 
// i : Ignora maiuscula e minuscula
console.log(texto.match(/[A-z1-3]/gi))



