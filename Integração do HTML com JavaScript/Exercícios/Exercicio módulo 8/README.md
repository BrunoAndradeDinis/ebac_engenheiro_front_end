#  Cadastro de Contatos

Este projeto tem como objetivo criar uma interface simples para cadastrar contatos, incluindo nome e telefone, e exibir os dados em uma tabela logo abaixo. O sistema é composto por três arquivos principais: um arquivo HTML para estruturação, um arquivo CSS para estilização e um arquivo JavaScript para manipulação da lógica do cadastro.

## Estrutura do Projeto

- `index.html`: Arquivo HTML que contém a estrutura da página e o formulário de cadastro.
- `style.css`: Arquivo CSS responsável pela estilização da página, incluindo cores, fontes e layout.
- `main.js`: Arquivo JavaScript que contém a lógica para manipulação dos dados do formulário e inserção dos contatos na tabela.

##  Tecnologias Utilizadas
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

<br>
## Como Usar

### 1. Estrutura da Página

A página contém um formulário simples com dois campos:  
- **Nome**: Campo de texto para o nome do contato.
- **Telefone**: Campo de telefone para inserir o número de telefone.

Após preencher os campos, ao clicar no botão **Cadastrar**, o nome e telefone são adicionados à tabela de contatos na parte inferior da página.

### 2. Funcionalidade de Cadastro

- O formulário envia os dados para a tabela quando o botão **Cadastrar** é clicado.
- Cada novo contato é inserido na primeira linha da tabela.
- Após o cadastro, os campos de nome e telefone são limpos, e o foco é dado novamente ao campo de nome.

### 3. Responsividade

O layout é responsivo e adapta-se a diferentes tamanhos de tela, garantindo uma boa experiência em dispositivos móveis e desktops.

## Como Rodar

### Pré-requisitos

Certifique-se de que os arquivos estão na mesma pasta ou em um servidor local. Não há dependências externas além de uma conexão à internet para carregar o Google Fonts.

### Passos

1. Clone o repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` em seu navegador.
3. Preencha os campos do formulário e clique em **Cadastrar**.
4. Verifique a tabela abaixo do formulário para ver o contato cadastrado.

## Descrição do Código

### HTML (`index.html`)

- O código HTML cria a estrutura da página, incluindo um formulário e uma tabela onde os contatos serão exibidos.
- O formulário utiliza os atributos `name`, `id` e `required` para garantir que os campos sejam preenchidos corretamente.
- A tabela começa vazia, e as linhas são dinamicamente adicionadas via JavaScript.

### CSS (`style.css`)

- As variáveis CSS são usadas para definir cores e fontes de forma centralizada, facilitando a manutenção do projeto.
- O layout é organizado de forma flexível, com a centralização do conteúdo, campos de formulário com bordas arredondadas e um botão de cadastro estilizado.
- A tabela de contatos é organizada com bordas sutis, e as células possuem um espaçamento adequado para facilitar a leitura.

### JavaScript (`main.js`)

- O JavaScript manipula o formulário para inserir novos contatos na tabela.
- Quando o formulário é enviado, a página não recarrega graças ao método `e.preventDefault()`.
- O código valida se os campos estão preenchidos antes de adicionar os dados à tabela.
- Após a inserção, os campos de entrada são limpos e o foco é movido para o campo de nome para agilizar o cadastro de novos contatos.

## Author
Autor
| [<img src="https://avatars.githubusercontent.com/u/55500337?s=400&u=9e2efd802fb544effcef3d0f63f446628cf0c714&v=4" width=115><br><sub>Bruno de Andrade</sub>](https://github.com/BrunoAndradeDinis) |
| :---: |