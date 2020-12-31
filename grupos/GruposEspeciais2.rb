texto = 'supermercado superação hiperMERCADO'

# Palavras que começam com 'super' + letras e letras com acento
# Quero as palavras que tem como prefixo a palavra 'super'
# Saída no console: supermercado superação
puts texto.scan(/(?:super)[\wÀ-ú]+/i).join(' ')

# POSITIVE Lookbehind
# Saída no console: mercado ação
puts texto.scan(/(?<=super)[\wÀ-ú]+/i).join(' ')


# NEGATIVE Lookbehind
# Quero as palavras que não são precedidas da palavra 'super'
# Saída no console: MERCADO
puts texto.scan(/(?<!super)mercado/i).join(' ')

