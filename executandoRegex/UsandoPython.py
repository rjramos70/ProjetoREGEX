import re

texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

# Cria a expressão regular (padrão)
pattern9 = re.compile('9')

# Executar o padrão usando nosso 'texto'
match1 = re.search(pattern9, texto)

# Imprime no console onde:
# match1.start() : Posição inicial onde foi encontrado
# match1.end() : Posição final onde foi encontrado
# match1.group(0) : Valor encontrado
print("Posicoes: {0}, {1}; Valor: {2} ".format(match1.start(), match1.end(), match1.group(0)))

# Usando a expressão regular para buscar todos dentro de um texto
valores = re.findall('[a-f]', texto)
print("Valores: {0}".format(valores))