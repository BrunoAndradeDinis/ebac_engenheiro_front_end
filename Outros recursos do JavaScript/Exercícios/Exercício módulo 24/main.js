function AkumaNoMi(nome, tipo, modelo, lvlPoder) {
  this.nome = nome;
  this.tipo = tipo;
  let _lvlPoder = lvlPoder;
  this.modelo = modelo;

  this.getPoder = () => {
    return _lvlPoder;
  };

  this.setPoder = (valor) => {
    if (typeof valor === "number") _lvlPoder = valor;
  };

  this.mostrarHabilidade = () => {
    console.log(
      `${this.nome}, ela é do tipo ${this.tipo}  modelo ${this.modelo} e esse é o nível de seu poder: ${_lvlPoder}`
    );
  };

  this.aumentoDeLvlDePoder = () => {
    const novoLvlPoder = _lvlPoder * 1.2;
    console.log(novoLvlPoder)
    _lvlPoder = novoLvlPoder;
  };
}

function Paramecia(nome) {
  AkumaNoMi.call(this, nome, "Paramecia", "Borracha", 200);

  this.aumentoDeLvlDePoder = () => {
    const novoLvlPoder = this.getPoder() * 1.2;
    console.log(novoLvlPoder)
    this.setPoder(novoLvlPoder);
  };

  this.mostrarHabilidade = () => {
    console.log(
      `${this.nome}, ela é do tipo ${this.tipo} modelo ${
        this.modelo
      }: Aumenta as habilidades físicas do usuário, e esse é o nível de seu poder: ${this.getPoder()}`
    );
    console.log(
      `Tipo ${this.tipo}: Quem as come ganha o poder de modificar sua estrutura corporal, produzir substâncias e manipular essas substâncias e o ambiente`
    );
  };
}

function Zoan(nome) {
  AkumaNoMi.call(this, nome, "Zoan", "Fenix", 180);

  this.aumentoDeLvlDePoder = () => {
    const novoLvlPoder = this.getPoder() * 1.3;
    console.log(novoLvlPoder)
    this.setPoder(novoLvlPoder);
  };

  this.mostrarHabilidade = () => {
    console.log(
      `${this.nome}, ela é do tipo ${this.tipo} modelo ${
        this.modelo
      }: Aumenta as habilidades físicas do usuário, e esse é o nível de seu poder: ${this.getPoder()}`
    );
    console.log(
      `Tipo ${this.tipo}: Quem come uma Akuma no Mi do tipo Zoan ganha o poder de modificar sua estrutura corporal, transformando-se parcial ou totalmente em um animal, adquirindo suas habilidades, força e instintos naturais. Existem três formas: Humana (aparência normal), Híbrida (mistura de humano e animal) e Animal (transformação completa).`
    );
  };
}

function Logia(nome) {
  AkumaNoMi.call(this, nome, "Logia", "Fenix", 220);

  this.aumentoDeLvlDePoder = () => {
    const novoLvlPoder = this.getPoder() * 1.5;
    console.log(novoLvlPoder)
    this.setPoder(novoLvlPoder);
  };

  this.mostrarHabilidade = () => {
    console.log(
      `${this.nome}, ela é do tipo ${this.tipo} modelo ${
        this.modelo
      }: Aumenta as habilidades físicas do usuário, e esse é o nível de seu poder: ${this.getPoder()}`
    );
    console.log(
      `Tipo ${this.tipo}: Quem as come ganha o poder de se transforma em um elemento natural, ganhando suas propriedades. Existem três habilidades: Intangibilidade (corpo se torna o elemento), Produção (gera a substância) e Manipulação (controla o ambiente com o elemento).`
    );
  };
}

const akumaNoMi1 = new Paramecia("Gomu Gomu no Mi")
const akumaNoMi2 = new Zoan("Tori Tori no Mi")
const akumaNoMi3 = new Logia("Mera Mera no Mi")

console.log(akumaNoMi1.getPoder())
console.log(akumaNoMi2.getPoder())
console.log(akumaNoMi3.getPoder())

// aumento
akumaNoMi1.aumentoDeLvlDePoder()
akumaNoMi2.aumentoDeLvlDePoder()
akumaNoMi3.aumentoDeLvlDePoder()

akumaNoMi1.mostrarHabilidade()
akumaNoMi2.mostrarHabilidade()
akumaNoMi3.mostrarHabilidade()
