const textoUmaLinha = '...' // aspas simples ou duplas

const textoMultiplasLinhas = `
    linha 1
    linha 2
    linha 3
`   // será usado crases

// cuidado com o tab! Pois pode estar gerando 3 espaços em branco.
console.log('   '.match(/\s/g))