class Cliente{
    constructor(nome, telefone, sala){
        this.nome = nome;
        this.telefone = telefone;
        this.sala = sala;
    }
}

class ItemPedido{
    constructor(produto, precoInd, qtd){
        this.produto = produto;
        this.precoInd = precoInd;
        this.qtd = qtd;
    }
}

class Pedido{
    constructor(data, cliente){
        this.data = data.now[];
        this.cliente = cliente;
        this.itensPedido = [];
        this.valor = 0.0;
    }

    addItem(itemPedido){
        this.itensPedido.push(itemPedido);
        this.valor += itemPedido.precoInd * itemPedido.qtd;
    }
}

// Fila de pedidos no início do expediente
var pedidos = [];

// Criando um pedido
var cliStefano = new Cliente("Stefano Silva", "999999999", "301");
var pedidoStefano = new Pedido(cliStefano);
var itemCoxinhaStf = new ItemPedido("Coxinha de frango", 5.0, 2);
pedidoStefano.addItem(itemCoxinhaStf);
var itemExpressoStf = new ItemPedido("Expresso P", 3.0, 1);
pedidoStefano.addItem(itemExpressoStf);
console.log(pedidoStefano);
