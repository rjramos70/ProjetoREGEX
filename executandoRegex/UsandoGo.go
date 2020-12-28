package main // Definindo o pacote main

import (
	"bytes"
	"fmt"
	"regexp"
)

// Função principal do GO que será executado quando executarmos o arquivo/projeto
func main() {

	texto := "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f"

	// Cria a expressão regular ignorando o retorno de erro
	regex9, _ := regexp.Compile("9")

	// Formata a impressão na saída no console verificando se a expressão regular
	// existe no texto.
	fmt.Println(regex9.MatchString(texto))

	// Verifica se a String tem a expressão regular
	fmt.Println(regex9.FindString(texto))

	// Verifica se a String tem a expressão regular e trás o índice de onde foi encontrado
	fmt.Println(regex9.FindStringIndex(texto))

	// Cria a expressão regular para letras de 'a' até 'f' ignorando o retorno de erro
	regexLetras, _ := regexp.Compile("[a-f]")

	// Pesquisa e trás até 20 matches dentro do texto
	fmt.Println(regexLetras.FindAllString(texto, 20))
	// Pesquisa e trás até 2 matches dentro do texto
	fmt.Println(regexLetras.FindAllString(texto, 2))

	// Faz o replace usando a expressão regular
	fmt.Println(regexLetras.ReplaceAllString(texto, "Achei"))

	// Função que transforma o resultado achado na expressão regular em uppercase
	resultado := regexLetras.ReplaceAllFunc([]byte(texto), bytes.ToUpper)

	// Converte o Array de bytes para string para imprimir
	fmt.Println(string(resultado))

}
