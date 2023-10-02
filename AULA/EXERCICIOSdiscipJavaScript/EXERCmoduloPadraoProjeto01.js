// Interface para os produtos (Computadores)
class Computador {
    constructor(ram, hdd, cpu, type) {
      this.ram = ram;
      this.hdd = hdd;
      this.cpu = cpu;
      this.type = type;
    }
  
    getRAM() {
      return this.ram;
    }
  
    getHDD() {
      return this.hdd;
    }
  
    getCPU() {
      return this.cpu;
    }
  
    getType() {
      return this.type;
    }
  
    toString() {
      return `Tipo: ${this.type}, RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
    }
  }
  
  // Classe de computador tipo PC
  class PC extends Computador {
    constructor(ram, hdd, cpu) {
      super(ram, hdd, cpu, 'PC');
    }
  }
  
  // Classe de computador tipo Server
  class Server extends Computador {
    constructor(ram, hdd, cpu) {
      super(ram, hdd, cpu, 'Server');
    }
  }
  
  // Fábrica para criar instâncias do tipo abstrato da interface
  class ComputadorFactory {
    static criarComputador(ram, hdd, cpu, type) {
      if (type === 'PC') {
        return new PC(ram, hdd, cpu);
      } else if (type === 'Server') {
        return new Server(ram, hdd, cpu);
      } else {
        throw new Error('Tipo de computador inválido.');
      }
    }
  }
  
  // Exemplo de uso
  const pc = ComputadorFactory.criarComputador(8, 500, 3.2, 'PC');
  const server = ComputadorFactory.criarComputador(16, 1000, 2.8, 'Server');
  
  console.log(pc.toString());
  console.log(server.toString());
  
  // Neste exemplo, criamos uma interface Computador com os métodos e getters necessários. As classes PC e Server implementam essa interface. A fábrica ComputadorFactory cria instâncias de PC ou Server com base no tipo fornecido e retorna um objeto correspondente.
  // O método toString é implementado em cada classe para imprimir os atributos do computador. O exemplo de uso demonstra a criação de um PC e um servidor e a impressão de seus atributos usando o método toString.
  