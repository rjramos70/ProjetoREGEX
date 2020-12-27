const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9')   // Cria o Regex que é o número 9

console.log('Métodos da RegexExp...')   // Imprime um texto no console

// Procura dentro do parêmetro, nossa constante 'texto' se existe
// a nossa Regex, que é se existe o número 9 dentro do nosso texto.
// O retorno é TRUE caso positivo, e FALSE caso negativo.
console.log(regexNove.test(texto))

console.log(regexNove.exec(texto))  // Vai executar esta expressão regular dentro do texto

const regexLetras = /[a-f]/g    // Todas as letras entre 'a' e 'f'
console.log('Métodos da string...')
console.log(texto.match(regexLetras))
console.log(texto.search(regexLetras))  // busca no texto onde inicia o regex
console.log(texto.replace(regexLetras, 'Achei'))    // Se quiser substituir um elemento onde o Regex identificou por outro.
console.log(texto.split(regexLetras))   // separa os elementos com base no Regex e cria um Array

// Control + Option + n para executar

