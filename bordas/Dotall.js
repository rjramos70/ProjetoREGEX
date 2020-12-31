const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

// Selecionar um texto que começa e termina com a letra 'r'
// Saída no console: null
// OBS: Retornou NULL porque o ponto não resolve o '\n'
console.log(texto.match(/^r.*r$/gi))    // problema do dotall

// Saída no console: [ 'Romário era um excelente jogador\n, mas hoje é um político questionador' ]
// OBS: Retornou todos os caracteres por a expressão [\s\S] pega espaço '\s' e tudo que não for 
//      espaço '\S'
console.log(texto.match(/^r[\s\S]*r$/gi))
