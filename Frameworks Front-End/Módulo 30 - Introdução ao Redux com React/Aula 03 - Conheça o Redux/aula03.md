## Conheça o Redux

Estamos iniciando a nossa terceira aula. Nesse momento, dê play na videoaula para:

- entender o que é o Redux, sua origem e como ele se relaciona com o desenvolvimento de aplicações React;
- identificar os principais conceitos do Redux;
- familiarizar-se com os principais elementos do Redux;
- explorar a importância dos seletores;
- visualizar o fluxo de dados em uma aplicação Redux.

### Sobre o redux

O Redux é uma biblioteca para gestão de estado que implementa os conceitos da arquitetura Flux e pode ser utilizado junto com os _frameworks_ Front-End. Ele foi criado por um dos desenvolvedores que trabalharam no React, isso fez com que o seu uso fosse mais popular no ecossistema React.

### Funcionalidades e conceitos

O Redux nos traz alguns conceitos e funcionalidades como:

- **Actions:** são objetos literais onde possuímos uma propriedade chamada type que serve como identificador da ação e podemos ter uma propriedade, geralmente chamada de payload, onde iremos encontrar as informações da ação, por exemplo: ao criar um contato, no payload teremos os dados deste contato.
- **Action creators:** são funções que tem como retorno a action o podem receber o payload como argumento;
- **Reducer:** é uma função que recebe o estado inicial e action como argumentos, dentro dela será definido o que irá acontecer quando cada action for disparada.
- **RootReducer:** é a combinação dos reducers, geralmente em uma aplicação teremos mais de um reducer e eles serão combinados formando um RootReducer.
- **Store:** é o estado completo da aplicação e a responsável por alterar o estado;
- **Seletores:** são funções que utilizamos para extrair dados da Store.
- **Dispatch:** é a função disponibilizada pela Store que nos possibilita disparar as action creators, basicamente é uma função que receberá como argumento a invocação de outra função (action creator)

### Implementação

O Redux pode ser implementado de duas maneiras, aplicações mais antigas, legadas, poderão estar utilizando uma biblioteca chamada react-redux, atualmente a maneira recomendada de construir aplicações com o Redux é através do **Redux Toolkit.**

O Redux Toolkit facilita nosso trabalho criando as actions, action creators e também na configuração do Redux na aplicação. Além disso com o Redux Toolkit temos acesso a um módulo chamado Redux Toolkit Query, que é um middleware, intermediário, que irá controlar as requisições a API’s e já tratar essas requisições em um reducer separado, atividade que teríamos que fazer manualmente.

Apesar de utilizarmos o Redux Toolkit, o react-redux continua sendo relevante, mas apenas para acesso aos dados através do hook useSelector e disparo de ações utilizando o hook useDispatch, a configuração da Store e dos reducers é feita através do Redux Toolkit.
