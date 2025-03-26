# Trabalhe com listas

Neste momento, você trabalhará com listas. Dê play na videoaula para analisar como é possível utilizar o VueJs para manipular listas de elementos e facilitar sua renderização.


## Renderize listas

Para renderizar valores simples no VueJS utilizamos as chaves duplas {{ }}, porém isso não funciona para arrays. Para renderizar um array precisamos utilizar uma diretiva chamada **v-for**, que funciona como um **for in**, onde temos acesso a cada item do array: 
- `<ul>  <li v-for=“nome in nomes”>{{ nome }}</li> </ul>`

O v-for pode ser utilizado para qualquer elemento.