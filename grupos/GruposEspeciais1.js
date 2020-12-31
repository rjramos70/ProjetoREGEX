const texto = 'João é calmo, mas no transito fica bem nervoso.'

// Pega todas as palavras, inclusive as acentuadas devido ao range À-ú
// Saída no console: [ 'João', 'é', 'calmo', 'mas', 'no', 'transito', 'fica', 'bem', 'nervoso' ]
console.log(texto.match(/[\wÀ-ú]+/gi))

// POSITIVE lookahead (verifica o que tem de positivo a frente para tentar resolver o que tem antes).
// Saída no console: [ 'calmo' ]
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi))

// Quero todas as palavras que tem um .(ponto) logo a sua frente
// Saída no console: [ 'nervoso' ]
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi))

// Quero todas as palavras que vem antes de uma ','(virgula) e a palavra 'mas'
// Saída no console: [ 'calmo' ]
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi))


// NEGATIVE lookahead 
// Quero todas as palavras que não estejam antes de ','(virgula)
// Saída no console: [ 'João', 'mas', 'no', 'transito', 'fica', 'bem', 'nervoso' ]
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi))

// Saída no console: [ 'João ', 'é ', 'mas ', 'no ', 'transito ', 'fica ', 'bem ', 'nervoso.' ]
// OBS: Como a única palavra que tem uma virgula a sua frente é 'calmo', não foi mostrada
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))

