# Integre o VueJS

Neste momento, você integrará o VueJs com o HTML. Dê play na videoaula para integrar o VueJs com o HTML e utilizar o JavaScript para criar interações dinâmicas.

## Double mustaches 

Com o VueJS podemos escrever um conteúdo criado pelo JavaScript dentro do HTML, sem utilizar o innerHTML ou innerText, na realidade não devemos utilizar essas abordagens, porque o VueJS gerencia o DOM de uma maneira diferente.

Para esses cenários utilizamos uma expressão conhecida como double mustaches {{ }}, onde inserimos dentro das chaves a variável, expressão ou função que retornará o conteúdo a ser inserido.

## Bind

Além de preencher textos de forma dinâmica, podemos atribuir valores dinâmicos às tags HTML, para isso utilizamos um conceito chamado **bind**, que possibilita a conexão do conteúdo HTML com as mudanças realizadas no JavaScript. Para criar um atributo dinâmico utilizando um recurso do VueJS chamado de **diretivas**, que nada mais são que atributos especiais nas tags.

A diretiva utilizada para preencher um atributo por meio do bind é o v-bind. 
Ele deverá ser inserido antes do nome do atributo, por exemplo, ao adicionar o endereço de uma imagem utilizaremos o atributo:
- `<img v-bind-src=“nomeDaVariavel” />`

O v-bind possui uma versão abreviada onde precisamos passar apenas dois pontos antes do nome do atributo, considerando o exemplo anterior, ficaria:
- ` <img :src=“nomeDaVariavel” />`