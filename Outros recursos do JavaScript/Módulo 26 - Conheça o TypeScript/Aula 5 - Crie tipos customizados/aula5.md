Neste momento, você criará os tipos customizados. Dê play na videoaula para:

- compreender os conceitos de tipos customizados;
- criar e utilizar tipos customizados;
- aplicar tipos customizados.

## Crie seus próprios tipos

Além dos tipos básicos que o TypeScript possui, podemos criar nossos próprios tipos, considere:
```
  const profissional = {     
    nome: “Sabrina”,      
    idade: 30,      
    profissao: “designer” 
  }
```

A partir dessa estrutura já podemos criar um tipo: Profissional e toda variável do tipo Profissional deverá conter as propriedades definidas.

O tipo customizado ficaria:
```
  type Profissional = {     
    nome: string;     
    idade: number;     
    profissao: string; 
  } 
  
  const dev1: Profissional = {      
    nome: “bruno”,      
    idade: 28,      
    profissional: “dev front-end”,      
    salario: 5000 // não será válido pois essa propriedade não faz parte do tipo Profissional 
  }
```