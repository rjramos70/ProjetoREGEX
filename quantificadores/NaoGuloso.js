const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

// Por padrão os quantificadores SÃO gulosos (greedy)...
// Saída no console: [ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]
console.log(texto.match(/<div>.+<\/div>/g))

// Saída no console: [ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]
console.log(texto.match(/<div>.*<\/div>/g))

// Saída no console: [ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]
console.log(texto.match(/<div>.{0,100}<\/div>/g))


// Quantificadores NÃO gulosos (lazy)...
// Saída no console: [ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]
console.log(texto.match(/<div>.+?<\/div>/g))

// Saída no console: [ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]
console.log(texto.match(/<div>.*?<\/div>/g))

// Saída no console: [ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]
console.log(texto.match(/<div>.{0,100}?<\/div>/g))
