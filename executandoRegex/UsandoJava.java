import java.util.regex.*;

public class UsandoJava {
    public static void main(String[] args) {
        String texto = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";

        // Cria o padrão para letras
        Pattern patternLetras = Pattern.compile("[a-f]");

        // Cria um matcher para quando a expressão regular encontrar algo
        Matcher matcher = patternLetras.matcher(texto);

        // Faz um looping enquando tiver itens encontrados
        while (matcher.find()){
            System.out.printf("Posicoes: %s, %s\tValor: %s%n",
                matcher.start(), matcher.end(), matcher.group());
        }

        // Método que faz o replaceAll já passando a expressão regular
        System.out.println(texto.replaceAll("[7-9]", "Achei"));
    }
}