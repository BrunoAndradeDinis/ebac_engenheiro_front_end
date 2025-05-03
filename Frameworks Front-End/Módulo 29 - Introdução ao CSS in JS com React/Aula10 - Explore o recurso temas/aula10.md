Estamos iniciando a nossa última aula. Nesse momento, dê play na videoaula para:

- criar temas personalizados para uma aplicação React, permitindo a troca de estilos de forma dinâmica;
- integrar temas personalizados nos componentes da aplicação;
- implementar a alternância de temas na aplicação, permitindo que os usuários escolham entre diferentes estilos visuais.

## Sobre o tema

O recurso de temas do Styled Components nos permite configurar toda a parte visual em propriedades, como arquivos de configuração.
A partir disso podemos fazer trocas de temas, alterando cores, tamanho de fontes etc.

Um tema nada mais é do que um objeto:

```
export const meuTema = {
    corPrincipal: #111;
    corSecundaria: #333;
}
```

Para utilizar um tema no Styled Components, precisamos importar um componente chamado ThemeProvider e passar o tema a ser utilizado como propriedade.

O ThemeProvider deve ser o container de toda a aplicação:

```
    import { ThemeProvider } from ‘styled-components’
    import { meuTema } from ‘./tema’
    <ThemeProvider theme={meuTema}>
        // restante da aplicação
    </ThemeProvider>
```

Para utilizar uma propriedade configurada no arquivo do tema precisamos recorrer as props dentro do componente estilizado:

```
export const Titulo = styled.h1`
    font-size: 32px; color: ${(props) => props.theme.corPrincipal}
`
export const TituloSecundario = styled.h2`
    font-size: 24x;
    color: ${(props) => props.theme.corSecundaria}
`
```

## As

Os componentes criados com o Styled Components possuem uma propriedade chamada **as** (como), com essa propriedade podemos fazer com que um elemento mantenha a estilização mas a tag seja trocada. <br>
Considere um exemplo de um BotaoPerigo:

```
    <BotaoPerigo as=“a”>Não clique aqui</BotaoPerigo>
```

Assim podemos criar um elemento a, link do HTML, com a aparência do componente BotaoPerigo.
