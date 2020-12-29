const texto = 'Bom\ndia'
const texto2 = 'Bom\tdia'

// Vamos executar uma expressão e verificar se o ponto identifica o \n
// Saída no console: [ 'B', 'o', 'm', 'd', 'i', 'a' ]
console.log(texto.match(/./gi))

// Agora ao substituirmos o '\n' por '\t' e executarmos
// Saída no console: [ 'B',  'o', 'm', '\t', 'd', 'i', 'a' ]
console.log(texto2.match(/./gi))

// Podemos quebrar pela TAB (\t)
// Saída no console: [ 'Bom', 'dia' ]
console.log(texto.match(/.../gi))
// Saída no console: [ 'Bom', '\tdi' ]
console.log(texto2.match(/.../gi))

// Agora se quisermos pegar quatro caracteres em sequência usando 4 pontos
// Saída no console: null   // porque o ponto não identifica o '\n' quebrando a sequência
console.log(texto.match(/..../gi))

// dotall - Algumas linguagens te um flag /./s, mas JavaScript não tem!




