const texto = 'áéíóú àèìòù âêîôû ç ãõ ü'

// Pega o intervalo desde À-ü
// Saída console: [ 'á', 'é', 'í', 'ó', 'ú', 'à', 'è', 'ì', 'ò', 'ù', 'â', 'ê', 'î', 'ô', 'û', 'ç', 'ã', 'õ', 'ü' ]
console.log(texto.match(/[À-ü]/g))
