texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

# Cria o Regex
regexNove = Regexp::new('9')

# Executa saída no Console
puts regexNove.match(texto)

# Outro modo de declarar uma Expressão Regular
regexNove = %r{4}
puts regexNove.match(texto)

# Outro modo de usar o Regex comparando com o texto passado depois de =.
p regexNove =~ '894'

# Regex para letras de 'a' até 'f'
regexLetras = /[a-f]/
puts texto.scan(regexLetras).join(', ')

# Faz o Split do Array com base no Regex que passamos
puts texto.split(/,/).join(' > ')

# Imprime o Arrays com as Vogais
print texto.split(/[aeiou]/)





