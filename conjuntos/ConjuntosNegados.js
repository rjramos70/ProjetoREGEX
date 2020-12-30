const texto = '1,2,3,a.b c!d?e[f'

// Pega tudo que não é número entre 0 e 9
// Saída no console: [ ',', ',', ',', 'a', '.', 'b', ' ', 'c', '!', 'd', '?', 'e', '[', 'f' ]
console.log(texto.match(/\D/g))

// Pega tudo que não é número entre 0 e 9
// Saída no console: [ ',', ',', ',', 'a', '.', 'b', ' ', 'c', '!', 'd', '?', 'e', '[', 'f' ]
console.log(texto.match(/[^0-9]/g))

// Pega tudo que não é número entre 0 e 9
// Saída no console: [ ',', ',', ',', 'a', '.', 'b', ' ', 'c', '!', 'd', '?', 'e', '[', 'f' ]
console.log(texto.match(/[^\d]/g))

// Lista de caracteres que não deve aparecer no resultado
// Saída no console: [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(texto.match(/[^\d!\?\[\s,\.]/g))


const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

// Saída no console: [ '1', '2' ]
console.log(texto2.match(/[^!-/:-@\s]/g))
