import { TIPOTRANSACAO } from "./tipoTransacao.js";
import { Transacao } from "./transacao.js";

export class Conta{
    constructor(cliente, num, agencia, saldo){
        this.saldo = saldo;
        this.cliente = cliente;
        this.num = num;
        this.agencia = agencia;
        this.dataCriacao = new Data().toLocalDataString();
        this.saldo = saldo;
        this.status = true;
        this.transacoes = [];
    }
}

// Proximos passos

// depositar da conta
depositar(valor){
    this.saldo += valor;
    let trans = new Transacao(TIPOTRANSACAO.creditar, new Date().toLocaleDateString(), valor, null, '+');
    this.transacoes.push(trans);
}

// sacar da conta
sacar(valor){
    if (this.saldo >= valor) {
        this.saldo -= valor;
        let trans = new Transacao(TIPOTRANSACAO.debitar, new Date().toLocaleDateString(), valor, null, '-');
        this.transacoes.push(trans);
    }   else {
        console.log('saldo insuficiente');
    }
    this.saldo -= valor;
    let trans = new Transacao(TIPOTRANSACAO.debitar, new Date().toLocaleDateString(), valor, null, '-');
    this.transacoes.push(trans);
}
