# Faça a renderização condicional

Neste momento, você realizará a renderização condicional. Dê play na videoaula para:

- realizar a renderização condicional de elementos com base em condições em VueJS;
- praticar a utilização de diretivas para controlar a renderização de conteúdo com base em condições específicas.

## Diretivas

Com o VueJS temos a possibilidade escrever condicionais dentro do HTML, **if, else if e else**.

Além disso podemos exibir ou ocultar um elemento a partir de uma condição.

Para condicionar a renderização de um elemento utilizamos a diretiva **v-if**, caso seja necessário verificar uma outra condição utilizamos o **v-else-if** e por último utilizamos a diretiva **v-else**, que irá tratar a expressão quando nenhuma condição for atendida.

Exemplo:
```
<span v-if=“idade >= 18”>Pode entrar</span> 
<span v-if=“estaAcompanhado”>Pode entrar</span> 
<span v-else>Não pode entrar</span>
```

Com o uso da diretiva **v-show** o VueJS irá controlar a propriedade display do estilo do elemento, porém ele ainda continuará presente no HTML. 

Portanto **v-if** condiciona a renderização, já o **v-show** condiciona a exibição:
- `<span v-show=“idade >= 18”>Pode entrar</span>` 