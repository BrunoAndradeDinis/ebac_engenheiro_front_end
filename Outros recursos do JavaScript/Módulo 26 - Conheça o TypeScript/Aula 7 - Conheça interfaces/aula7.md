Neste momento, você compreenderá a interface. Dê play na videoaula para:

- compreender o conceito de interfaces e seu uso na programação;
- implementar interfaces em classes;
- entender a flexibilidade das interfaces.

## Sobre as interfaces

Uma outra nova funcionalidade que temos no TypeScript é a Interface. Ela já existe em linguagens de back-end. Uma interface basicamente é um contrato, onde temos que seguir algumas regras para que seja satisfeito. Por exemplo, um veículo, obrigatoriamente precisa ter a capacidade de acelerar e frear.

Na programação orientada a objetos só é permitido a herança de uma classe, ou seja, não podemos herdar de mais de uma classe, porém com as interfaces podemos implementar várias.

Escrevemos uma interface assim:

```
  interface IVeiculo {
    acelerar: () => boolean;
    frear: () => boolean;
    velocidadeMaxima: number;
  }
```

Para implementar a interface IVeiculo, precisamos fazer a implementação dos métodos frear, acelerar e definir uma propriedade velocidadeMaxima que contenha um número:

```
  class Carro implements IVeiculo {
    velocidadeMaxima = 120;
    acelerar() {..};
    frear() {..};
  };
```
