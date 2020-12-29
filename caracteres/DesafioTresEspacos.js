const texto = 'a   b'

// Primeira solução usando o literal ta qual o texto
console.log(texto.match(/a   b/))

// Segunda solução usando o \s no lugar do espaço
console.log(texto.match(/a\s\s\sb/))

// No futuro
console.log(texto.match(/a\s+b/))   // \s+  : Pode ter mais de um espaço entre 'a' e 'b'
console.log(texto.match(/a {3}b/))  // {3}  : Quantidade do caracter anterior declarado, nesse caso espaço
console.log(texto.match(/a\s{3}b/)) //\s{3} : Quantidade do caracter anterior declarado, nesse caso o \s (espaço)