const texto = `
123456
cod3r
QUASE123!
#OpA1
#essaSenhaEGrande1234

#OpA1?
Foi123!
`
// Senha que tenha entre 6 e 20 caracteres
// Saída no console: [ '123456', 'QUASE123!', '#OpA1?', 'Foi123!' ]
console.log(texto.match(/^.{6,20}$/gm))

// Senha que tenha entre 6 e 20 caracteres e que tenha um caractere maiusculo.
// Saída no console: [ 'QUASE123!', '#OpA1?', 'Foi123!' ]
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm))

// Senha que tenha entre 6 e 20 caracteres, e que tenha pelo menos um caractere 
// maiusculo, um minusculo, um númeor e um dos caracteres dentro do conjunto.
// Saída no console: [ '#OpA1?', 'Foi123!' ]
console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$/gm))