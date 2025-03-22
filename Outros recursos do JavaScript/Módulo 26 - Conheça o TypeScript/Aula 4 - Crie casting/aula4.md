Neste momento, você criará os casting. Dê play na videoaula para:

- dominar as técnicas de conversão de tipos no TypeScrip;
- evitar erros de conversão de tipos e problemas de segurança.

## Palavra reservada “as”

Apesar da forte tipagem que o TypeScript nos fornece, podemos fazer com que um tipo seja entendido como outro tipo no compilador do TypeScript. Por exemplo, podemos tratar um número como se fosse uma string e para isso, utilizamos a palavra reservada **as**:

```
  const nome: string = 10 as string;
```

O exemplo acima é uma má prática, afinal um nome não é um número. 
Esse recurso deve ser utilizado com cautela e apenas em casos onde não conhecemos o tipo do dado que vamos receber, o que pode acontecer em integrações a APIs.
