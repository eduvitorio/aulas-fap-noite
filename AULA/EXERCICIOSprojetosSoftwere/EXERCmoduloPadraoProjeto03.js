// Classe base para o sanduíche
class Sanduiche {
  custo() {
    return 0;
  }

  descricao() {
    return "Sanduíche";
  }
}

// Frango Assado é um tipo de sanduíche
class FrangoAssado extends Sanduiche {
  custo() {
    return 4.5;
  }

  descricao() {
    return "Frango Assado";
  }
}

// Decorator para adicionar pepperoni
class Pepperoni extends Sanduiche {
  constructor(sanduiche) {
    super();
    this.sanduiche = sanduiche;
  }

  custo() {
    return this.sanduiche.custo() + 0.99;
  }

  descricao() {
    return this.sanduiche.descricao() + ", Pepperoni";
  }
}

// Decorator para adicionar queijo mussarela ralado
class QueijoMussarelaRalado extends Sanduiche {
  constructor(sanduiche) {
    super();
    this.sanduiche = sanduiche;
  }

  custo() {
    return this.sanduiche.custo() + 2.0;
  }

  descricao() {
    return this.sanduiche.descricao() + ", Queijo Mussarela Ralado";
  }
}

// Cria o sanduíche com os decoradores
let meuSanduiche = new FrangoAssado();
meuSanduiche = new Pepperoni(meuSanduiche);
meuSanduiche = new QueijoMussarelaRalado(meuSanduiche);

// Imprime a descrição e o custo do sanduíche
console.log(`${meuSanduiche.descricao()} custa $${meuSanduiche.custo().toFixed(2)}`);

// O resultado será:
Frango Assado, Pepperoni, Queijo Mussarela Ralado custa $7.49

/*
Neste exemplo, usamos classes para representar o sanduíche base (Sanduiche) e seus
ingredientes adicionais (FrangoAssado, Pepperoni e QueijoMussarelaRalado). 
Usamos o padrão Decorator para adicionar funcionalidades aos objetos sem modificar 
suas estruturas básicas.
*/
