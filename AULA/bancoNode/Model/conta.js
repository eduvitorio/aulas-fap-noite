import { Transacao } from "./transacao.js";
import { TIPOTRANS } from "./tipoTransacao.js";

export class Conta{
    constructor(cliente, numero, agencia, saldo){
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.dataCriacao = Date.now();
        this.saldo = saldo;
        this.status = true;
        this.transacoes = [];
    }
    // DEPOSITAR da CONTA
    depositar(valor){
        this.saldo += valor;
        let trans = new Transacao(TIPOTRANS, deposito, new Date().toLocaleDateString(), valor, null, '+');
        this.transacoes.push(trans); //Está colocando no final da fila de transações
    }

    // Sacar da Conta
    sacar(valor){
        if (this.saldo >= valor){
            let trans = new Transacao(TIPOTRANS.debito, new Date().toLocaleDateString(), valor, null, '+');
            this.transacoes.push(trans);
        
        }else{

        }
    }
}

