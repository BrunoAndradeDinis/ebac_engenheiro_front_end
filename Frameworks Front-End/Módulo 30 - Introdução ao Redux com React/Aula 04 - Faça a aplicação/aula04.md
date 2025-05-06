## Faça a aplicação

Estamos iniciando a nossa quarta aula. Nesse momento, dê play na videoaula para: 

- compreender a importância de criar uma cópia de um projeto para evitar plágio e permitir o desenvolvimento em sua própria conta;
- analisar a estrutura do projeto, incluindo os arquivos e pastas relevantes;
- preparar o projeto para integração com o Redux;
- reconhecer as áreas no projeto onde o Redux será integrado para gerenciar o estado de forma mais eficiente.

### Exemplo
Com o uso da arquitetura, temos o fluxo de dados sendo feito de forma **unilateral**, por exemplo, imagine uma loja virtual, os passos são:
1. Clique no botão “adicionar ao carrinho”; 
2. Action creator será disparada através do useDispatch; 
3. A Store irá enviar essa action para os reducers; 
4. O reducer correspondente irá acatar a mudança; 
5. Será adicionado um item ao array de carrinho; 
6. O estado será atualizado; 
7. Teremos a re-renderização do componente que conta os itens do carrinho, agora exibindo a nova quantidade.