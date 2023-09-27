//Função tradicional sem parâmetros:
function saudacao() {
    console.log("Olá! Bem-vindo à calculadora.");
}

//Função tradicional com parâmetros e retorno:
function soma(a, b) {
    return a + b;
}

//Arrow function com parâmetros e retorno:
const multiplicacao = (a, b) => a * b;

//exemplo de uso dessas funções:
saudacao(); // Chama a função de saudação
console.log("Soma:", soma(10, 5)); // Chama a função de soma e imprime o resultado
console.log("Multiplicação:", multiplicacao(10, 5)); // Chama a função de multiplicação e imprime o resultado

