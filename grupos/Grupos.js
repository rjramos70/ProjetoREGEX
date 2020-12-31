const texto1 = 'O José Simão é muito engraçado... hehehehehe'

// Expressão para buscar dentro do texto quantos 'he' existirem juntos
// Saída no console: [ 'hehehehehe' ]   // Não importa quantas vezes se repita.
console.log(texto1.match(/(he)+/g))

const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag'

// Expressão para pegar todas as URLs
console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))

// Resolução de Renato (Não somente usando grupos)
console.log(texto2.match(/(http:\/\/)?(w{3}\.)?[\w]+[\.\w]*/g))
