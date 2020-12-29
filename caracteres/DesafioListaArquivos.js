const texto = 'lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3'

// Obter as referência .mp3 dentro do texto (total de 4 referências)
// Saída no console: [ '.mp3', '.mp3', '.mp3', '.mp3' ]
console.log(texto.match(/\.mp3/g))

// No fututo
// Saída no console: [ 'jazz.mp3', 'rock.mp3', 'podcast.mp3', 'blues.mp3' ]
console.log(texto.match(/\w+\.mp3/g))