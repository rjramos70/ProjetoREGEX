const texto = 'Pedrinho (filho do Pedro Silva) é doutor no ABC!'

// Vamos verificar os valores de grupos dentro de conjuntos
// Saída no console: [ '(', 'a', ')', 'A', 'B', 'C' ]
// OBS: Podemos ver que grupo dentro de conjunto perde seu valor de conjunto.
console.log(texto.match(/[(abc)]/gi))   // Isso aqui não é um grupo

// Agora vamos colocar um conjunto dentro de um grupo
// Saída no console: [ 'a', 'A', 'B', 'C' ]
console.log(texto.match(/([abc])/gi)) 

// Agora vamos criar diretamente um grupo
// Saída no console: [ 'ABC' ]
console.log(texto.match(/(abc)/gi)) 

