# Crie componentes

## Componentes

Todos os componentes do VueJS possuem a extensão **.vue**.

Eles podem ser grandes, como o **App.vue** que é o componente principal ou menores que é o caso ideal. 

Com os componentes podemos criar nossas próprias tags que serão interpretadas pela VueJS.

## Importe componentes

Para importar e utilizar um componente no VueJS escrevemos:
```
  <script setup>  import MeuComponent from ‘./componentes/MeuComponente.vue’; </script> 
  <template>  <MeuComponent /> </template>
```
A importação deve ser a primeira escrita na tag script, após ela podemos escrever o código da nossa aplicação.

## Propriedades dos componentes

Assim como as tags possuem atributos, podemos receber atributos em nossos componentes, nesse caso chamamos de **propriedades**.

Para aceitar propriedades em um componente utilizamos a função defineProps:
```
    <script setup>  const props = defineProps([‘nome’, ‘temAcesso’]) 
    </script> 
    <template>  
      <h1>Olá {{ nome }}, você {{ temAcesso ? ‘possui’ : ‘não possui’ }} acesso.</h1> 
    </template>
```

Para informar um valor para a propriedade, seguimos a mesma abordagem das tags comuns, caso o valor da propriedade seja proveniente do JavaScript utilizamos o **bind** com dois-pontos:
- `<MeuComponente  nome=“John Doe”  :temAcesso=“verificaAcesso()” />`