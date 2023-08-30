try {
    function calcularSoma (valor1, valor2, valor3, valor4) {
        var soma = valor1 + valor2 + valor3 + valor4
    documento.write('o resultado da soma é: ' + soma)
    }

    calcularSoma(5, 7, 3, 10)
    document.write('Sem erro')

}catch (erro){
    document.write(teve um erro pra chegar aqui')
    console.log('O erro foi esse: ' + erro.message)
    console.log('O erro foi esse: ' + erro.console)
    }




    