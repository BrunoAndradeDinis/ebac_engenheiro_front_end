Estamos iniciando a nossa segunda aula. Nesse momento, dê play na videoaula para: 

- entender a dinâmica de importação e exportação em React;
- criar componentes em React, que são essenciais para a construção de interfaces de usuário reutilizáveis e modulares;
- praticar a estruturação de projetos React, organizando componentes em pastas e arquivos.

## Sobre os componentes

Um componente é basicamente uma função JavaScript que retorna um elemento React. Para utilizar um componente, importamos ele no arquivo que irá fazer o uso e depois disso escrevemos ele como um tag:

```
  import Titulo from './components/Titulo.jsx';
  function App(){
    return(
      <Titulo />
    )
  }
```

Por convenção, os nomes das funções e dos componentes começa com a inicial **maiúscula**, esta é a recomendação. Além disso, os componentes podem receber **propriedades**, também chamada de **props**, que são, basicamente, atributos incluídos na tag do componente:
```
  <Titulo nome = "Maria" />
```

Para acessar uma propriedade:
```
  function Titulo(props){
    return(
      <h1>Olá, {props.nome}</h1>
    )
  }
```