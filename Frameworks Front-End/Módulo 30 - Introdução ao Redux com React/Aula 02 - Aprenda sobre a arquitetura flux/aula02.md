## Aprenda sobre a arquitetura flux

Estamos iniciando a nossa segunda aula. Nesse momento, dê play na videoaula para:

- entender a estrutura fundamental da arquitetura Flux;
- compreender por que o Redux foi criado e qual foi a motivação por trás dessa biblioteca para o gerenciamento de estado;
- reconhecer os problemas que o Redux visa resolver, como o controle de estado em aplicações complexas;
- dominar o conceito de fluxo de dados unidirecional no Redux, em que as ações são disparadas pelos usuários, manipuladas pela Store (história) para atualizar o estado da aplicação e refletidas nas visualizações.

### Pilares

A arquitetura Flux foi desenvolvida pelo time do Facebook (Meta) e adotada no produto de chat da rede social. A partir da concepção da arquitetura, tivemos a criação de uma biblioteca de mesmo nome, porém atualmente ela não é utilizado e é considerada obsoleta, mas os conceitos do Flux continuam relevantes.

Com a arquitetura Flux separamos nossa aplicação em **três** pilares:

1. **Store:** responsável por armazenar e alterar o estado da aplicação;
2. **Dispatcher:** responsável por gerenciar ações e enviar as ações ao Store;
3. **View/UI:** a interface, a tela em si, onde teremos a interação com o usuário, que irá fazer alguma ação que altere afete o estado.

### Fluxo

<table>
  <th>Estado inicial </th>
  <th>Ui Renderizada -></th>
  <th>Interação do usuário -></th>
  <th>Atualização do estado -></th>
  <th>UI renderizada com o novo estado</th>
</table>


### Links úteis

- [Flux](https://facebook.github.io/flux/)