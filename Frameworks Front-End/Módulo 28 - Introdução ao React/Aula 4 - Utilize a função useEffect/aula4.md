Estamos iniciando a nossa terceira aula. Nesse momento, dê play na videoaula para: 

- assimilar o conceito de reatividade no React;
- iniciar e atualizar o estado;
- compreender como o estado pode afetar a renderização dos componentes;
- configurar e gerenciar eventos;
- passar argumentos para manipuladores de eventos.

## UseState

O estado de um componente é basicamente um valor que poderá ser alterado e esta alteração irá implicar em mudanças na interface, na UI. Pode ser um número de um contador que será incrementado, um nome que, ao usuário preencher o campo, será exibido instantaneamente, entre outros.

Para criar um estado no React utilizamos uma função chamada **useState**.

O useState é uma função que nos retornará um valor (estado) e uma função para alterar este valor:
- `const [nome, alteraNome] = useState(‘’);`

Dentro da função useState passamos o valor inicial, no caso uma string vazia.

Não podemos, nem devemos alterar o valor diretamente, como nome = “João”, isso fere os princípios de reatividade do React e caso utilizemos este valor dentro das tags em return, a UI pode não ser atualizada.

Costumamos nomear a função que altera o valor com set antes, por exemplo: **setNome**

## Sobre eventos
O React possui todos os eventos que o JavaScript possui, porém em **camelCase**:
- `<input type=“text” onChange={} />`

Dentro do evento podemos executar a função diretamente ou passar uma função.
- `<input type=“text” onChange={evento => setNome(evento.target.value)} />`

Ou com a função:
``` 
  function alterarNome(evento) { 
    setNome(evento.target.value); 
  } 
  
  <input type=“text” onChange={alterarNome} />
```