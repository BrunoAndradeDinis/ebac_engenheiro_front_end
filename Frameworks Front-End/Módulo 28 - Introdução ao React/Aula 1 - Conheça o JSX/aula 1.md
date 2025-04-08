Estamos iniciando a nossa primeira aula. Nesse momento, dê play na videoaula para:

- compreender o que é JSX e como ele é usado para criar elementos de interface do usuário no React;
- utilizar fragmentos em JSX para envolver múltiplos elementos sem a necessidade de uma div ou outro contêiner;
- explorar como as expressões JSX condicionais funcionam.

## Sobre o ReactJS

O **ReactJS** é uma biblioteca para construção de interfaces web. Ele foi criado pelo Facebook (Meta) em 2013. Ele é hoje o principal framework no mundo Front-End. Empresas como Microsoft, Netflix, Amazon, AirBnb fazem uso desta tecnologia. Além de aplicativos para web, podemos criar aplicativos para Android e iOS com uma variante do **React**, o **React Native**.

O **React** trabalha com uma sintaxe própria chamada **JSX**. Esta sintaxe junta o JavaScript com XML, que é basicamente uma estrutura de tags, parecida com o HTML. Os componentes **React** são funções JavaScript que retornam uma estrutura de tags, também chamada de **Elemento React**.

## Exemplo JSX - Componente

```
function Titulo() {
  const nome = “Lucas”;

  return ( <h1>Bem-vindo, {nome}</h1> )
}
export default Titulo
```

Podemos escrever código JavaScript dentro da estrutura de tags, com o uso das chaves {}. O código acima, é um exemplo de componente e pode ser utilizado por qualquer outro arquivo .jsx que o importe.

Caso precisemos exportar mais de uma tag, é necessário incluir num wrapper uma tag que irá encapsular todo o conteúdo:

```
  function Titulo() {
    const nome = “Lucas”;
    return (
      <div>
        <h1>Bem-vindo, {nome}</h1>
      </div> )
  }

  export default Titulo
```

Para não inserirmos a div em tudo, o React disponibiliza **fragments**, que são tags vazias, apenas para encapsulamento:

```
 function Titulo() {
    const nome = “Lucas”;
    return (
      <>
        <h1>Bem-vindo, {nome}</h1>
      </>)
  }

  export default Titulo
```

## Códigos do módulo

Para consultar o código do projeto desenvolvido durante o módulo acesse o [link](https://github.com/ogiansouza/github_perfil). 