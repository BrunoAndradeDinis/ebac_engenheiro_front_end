# Aplique estilos de forma condicional

Neste momento, você aplicará estilos de forma condicional. Dê play na videoaula para compreender como aplicar os estilos de forma condicional baseado em determinadas condições.

## Estilização condicional

Com o VueJS podemos adicionar classes a um elemento HTML a partir da satisfação de uma condição, assim como acontece com a renderização condicional.

Para isso, utilizamos o atributo :class e no valor do atributo inserimos um objeto:
- `<h1 :class=“{ ‘error-msg’: hasError }”>  Ocorreu um erro </h1>`

No exemplo acima, inserimos num objeto, como chave a classe a ser inserida e como valor a condição. Caso a classe não tenha traço as aspas não são necessárias.

