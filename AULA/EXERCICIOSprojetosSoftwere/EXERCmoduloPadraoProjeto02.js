// Classe abstrata Veiculo
class Veiculo {
  constructor(modelo, marca, cor, numeroRodas) {
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
    this.numeroRodas = numeroRodas;
  }

  clone() {
    const clone = Object.create(Object.getPrototypeOf(this));
    return Object.assign(clone, this);
  }

  represent() {
    return `${this.modelo} ${this.marca} (${this.cor}), ${this.numeroRodas} rodas`;
  }
}

// Subclasse Carro
class Carro extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
    super(modelo, marca, cor, numeroRodas);
    this.numeroPortas = numeroPortas;
  }

  represent() {
    return `${super.represent()}, ${this.numeroPortas} portas`;
  }
}

// Subclasse Moto
class Moto extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas) {
    super(modelo, marca, cor, numeroRodas);
  }
}

// Classe Aplicacao
class Aplicacao {
  static criarVeiculos() {
    const veiculos = [];
    veiculos.push(new Carro("Civic", "Honda", "Prata", 4, 4));
    veiculos.push(new Carro("Gol", "Volkswagen", "Preto", 4, 2));
    veiculos.push(new Carro("Corolla", "Toyota", "Branco", 4, 4));
    veiculos.push(new Moto("Ninja", "Kawasaki", "Verde", 2));
    veiculos.push(new Moto("Harley Davidson", "Sportster", "Preto", 2));
    veiculos.push(new Moto("Scooter", "Honda", "Azul", 2));
    return veiculos;
  }

  static clonarVeiculos(veiculos) {
    return veiculos.map((veiculo) => veiculo.clone());
  }
}

// Criando veículos
const veiculos = Aplicacao.criarVeiculos();

// Clonando veículos
const clones = Aplicacao.clonarVeiculos(veiculos);

// Exibindo a representação de cada veículo
clones.forEach((veiculo) => {
  console.log(veiculo.represent());
});

/*
Neste código, criamos a classe abstrata Veiculo com os métodos clone e
`represent`, e em seguida, duas subclasses Carro e Moto que herdam de
`Veiculo`. A classe `Aplicacao` cria veículos e clona os veículos existentes. Em
seguida, exibimos a representação de cada veículo clonado. A função `clone` é usada 
para criar uma cópia do objeto, e a função represent é usada para obter uma
representação do veículo.
*/
