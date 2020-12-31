const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'

// Na expressão, tudo que der match será armazenado, e o retrovisor é simplemente 
// referenciar ao item que deu match e ficou armazenado.

// Saída no console: [ '<b>Destaque</b>', '<strong>Forte</strong>', '<div>Conteudo</div>' ]
console.log(texto1.match(/<(\w+)>.*<\/\1>/g)) 

const texto2 = 'Lentamente é mente muito lenta.'

// Foram capturados dois grupos (lenta) e (mente), e depois usados os respectivos retrovidores 
// Saída no console: [ 'Lentamente é mente muito lenta.' ]
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi))

// O primeiro grupo (?:lenta) não será armazenado, porém o segundo grupo (mente) sim será armazenado
console.log(texto2.match(/(?:lenta)(mente).*\1/gi)) // ?: não guardo o valor

// Saída no console: [ 'Lentamente' ]
console.log(texto2.match(/(lenta)(mente)/gi))

// Saída no console: [ 'Lentamente', 'lenta' ]
console.log(texto2.match(/(lenta)(mente)?/gi))

// Alterar conteúdo com REPLACE
// OBS: Quando encontrar o match de (lenta)(mente), substituir com retrovisor 2 '$2' = mente
// Saída no console: mente é mente muito lenta.
console.log(texto2.replace(/(lenta)(mente)/gi, '$2'))

// OBS: Quando encontrar o match de (lenta)(mente), substituir com retrovisor 1 '$1' = Lenta
// Saída no console: Lenta é mente muito lenta.
console.log(texto2.replace(/(lenta)(mente)/gi, '$1'))

// Saída no console: ABCmenteDEF é mente muito lenta.
console.log(texto2.replace(/(lenta)(mente)/gi, 'ABC$2DEF'))


const texto3 = 'abcdefghijkll'

// Utiliza o retrovisor de número 12
// Saída no console: [ 'abcdefghijkll' ]
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g))