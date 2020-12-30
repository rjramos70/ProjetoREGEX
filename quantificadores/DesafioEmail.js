const texto = `
Os e-mails dos convidados são:
	- fulano@cod3r.com.br
	- xico@gmail.com
	- joao@empresa.info.br
	- maria_silva@registro.br
	- rafa.sampaio@yahoo.com
	- renato.ramos@empresa.brasileira.cinematografica.profissional.br
`
// Resolução Aluno
console.log(texto.match(/[\w\.?]+@[\w]+[\.\w]*/g))

// Resolução Professor
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))
