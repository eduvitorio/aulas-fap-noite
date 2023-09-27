// Simulação de uma função de conexão com o banco de dados
function conectarBancoDeDados() {
    // Simulando uma conexão bem-sucedida
    const conexaoBemSucedida = true;

    return new Promise((resolve, reject) => {
    if (conexaoBemSucedida) {
        resolve("Conexão com o banco de dados bem-sucedida! :)");
    } else {
        reject("Erro ao conectar ao banco de dados.");
    }
    });
}

  // Chamada da função para conectar ao banco de dados e tratar o resultado
conectarBancoDeDados()
    .then((mensagem) => {
    console.log(mensagem);
    })
    .catch((erro) => {
    console.error(erro);
    });
