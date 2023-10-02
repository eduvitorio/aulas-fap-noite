// Objeto Material: Carro
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    acelerar: function(velocidade) {
    console.log(`Acelerando para ${velocidade} km/h.`);
    },
    frear: function() {
    console.log("Freando o carro.");
    },
    ligarFarol: function() {
    console.log("Farol ligado.");
    }
};

  // Objeto Material: Celular
const celular = {
    marca: "Samsung",
    modelo: "Galaxy S21",
    ano: 2021,
    fazerLigacao: function(numero) {
    console.log(`Ligando para o número ${numero}.`);
    },
    enviarMensagem: function(contato, mensagem) {
    console.log(`Enviando mensagem para ${contato}: ${mensagem}`);
    },
    ligarBluetooth: function() {
    console.log("Bluetooth ligado.");
    }
};

  // Objeto Abstrato: Pessoa
const pessoa = {
    nome: "João",
    idade: 30,
    genero: "Masculino",
    apresentar: function() {
    console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou do gênero ${this.genero}.`);
    },
    comer: function() {
    console.log("Estou comendo.");
    },
    dormir: function() {
    console.log("Estou dormindo.");
    }
};

  // Objeto Abstrato: Conta Bancária
const contaBancaria = {
    numero: "123456",
    saldo: 1000,
    tipo: "Corrente",
    consultarSaldo: function() {
    console.log(`Seu saldo é R$ ${this.saldo}.`);
    },
    depositar: function(valor) {
    this.saldo += valor;
    console.log(`Depósito de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}.`);
    },
    sacar: function(valor) {
    if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}.`);
    } else {
        console.log("Saldo insuficiente para realizar o saque.");
    }
    }
};

  // Demonstrando as características e ações dos objetos
console.log("Carro:");
console.log(carro);
carro.acelerar(60);
carro.ligarFarol();

console.log("\nCelular:");
console.log(celular);
celular.fazerLigacao("123456789");
celular.enviarMensagem("Amigo", "Olá, como vai?");
celular.ligarBluetooth();

console.log("\nPessoa:");
console.log(pessoa);
pessoa.apresentar();
pessoa.comer();
pessoa.dormir();

console.log(contaBancaria);
contaBancaria.consultarSaldo();
contaBancaria.depositar(500);
contaBancaria.sacar(300);
contaBancaria.sacar(800);
