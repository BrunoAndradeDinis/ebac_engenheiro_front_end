# Utilize eventos para manipular dados

Neste momento, você utilizará eventos para manipular dados. Dê play na videoaula para compreender como é possível utilizar eventos para manipular dados e como a reatividade do VueJs facilita a atualização automática dos elementos na tela.

## Eventos

Assim como não podemos alterar o HTML diretamente com innerHTML e innerText, também não podemos manipular eventos com addEventListener, ou diretamente no atributo dentro da tag HTML. Para isso utilizamos os eventos do VueJS, para criar um evento no VueJS utilizamos o @ antes do evento, por exemplo:
- `<input type=“text” @change=“” />`

A partir dos eventos do VueJS temos acesso ao objeto de evento numa arrow function. 

O objeto de evento é o mesmo do JavaScript, onde podemos acessar a propriedade target para recuperar as informações do elemento HTML:
- `<input  type=“text”  @change=“evento => funcaoTeste(evento)” />`

## Reatividade

Uma das melhores funcionalidades que os frameworks Front-End disponibilizam é a reatividade. A partir desse recurso, ao alterar o valor de alguma variável no JavaScript, o código HTML será atualizado automaticamente. 

Para usufruirmos dos recursos da reatividade, precisamos criar os valores dentro de um objeto especial criado pela função reactive, para o conjunto de dados reativos damos o nome de estado.

## Aplique estilos de forma condicional

Neste momento, você aplicará estilos de forma condicional. Dê play na videoaula para compreender como aplicar os estilos de forma condicional baseado em determinadas condições.

## Estilização condicional

Com o VueJS podemos adicionar classes a um elemento HTML a partir da satisfação de uma condição, assim como acontece com a renderização condicional. Para isso, utilizamos o atributo **:class** e no valor do atributo inserimos um objeto:
- `<h1 :class=“{ ‘error-msg’: hasError }”>  Ocorreu um erro </h1>`

No exemplo acima, inserimos num objeto, como chave a classe a ser inserida e como valor a condição. Caso a classe não tenha traço as aspas não são necessárias.

