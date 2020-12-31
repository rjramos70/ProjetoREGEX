const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

// Selecionar todas as letras 'r' do texto
// Saída no console: [ 'R', 'r', 'r', 'r', 'r' ]
console.log(texto.match(/r/gi))

// Selecionar a letra 'r' que esta no início da linha
// Saída no console: [ 'R' ]
console.log(texto.match(/^r/gi))    // ^ início da linha/string

// Selecionar a letra 'r' que esta no fim da linha
// Saída no console: [ 'r' ]
console.log(texto.match(/r$/gi))    // $ fim da linha/string

// Selecionar um texto que começa e termina com a letra 'r'
// Saída no console: null
// OBS: Retornou NULL porque o ponto não resolve o '\n'
console.log(texto.match(/^r.*r$/gi))    // problema do dotall
