import { Endereco } from './model/Endereco.js';
import { Agencia } from './model/Agencia.js';
import { Cliente } from './model/Cliente.js';
import { Conta } from './model/conta.js';

let endAg = new Endereco('PE', "Recife, "São Josée, "Rua da Guia", 1000, "305", "50080-090");
let agSoftex = new Agencia("Softex", 1234, "81932126877", "agsoftex@banco.com", endAg);
let endEgito = new Endereco('PE', "Recife", "Boa Viagem", "Rua Setubal", 1234, 50800-090);
let cliEgito = new Cliente("Egito", );
let contaEgito = new Conta("cliEgito", 1001, agSoftex, 5000.00);

contaEgito.depositar(100);
contaEgito.sacar(200);

console.log(contaEgito);