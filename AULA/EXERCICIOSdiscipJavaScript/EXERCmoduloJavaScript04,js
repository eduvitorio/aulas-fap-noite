const calcularDivisao = () => {
try {
    const numero1 = parseFloat(prompt("Digite o primeiro número:"));
    const numero2 = parseFloat(prompt("Digite o segundo número:"));

    if (isNaN(numero1) || isNaN(numero2)) {
    throw new Error("Um ou ambos os valores não são números válidos.");
    }

    const resultado = numero1 / numero2;
    console.log(`O resultado da divisão é: ${resultado}`);
} catch (error) {
    console.error("Ocorreu um erro:", error.message);
} finally {
    console.log("Operação concluída.");
}
};

calcularDivisao();
