# 📱 Cadastro de Contatos 

Este projeto tem como objetivo criar uma interface simples e intuitiva para cadastrar contatos, incluindo nome e telefone, e exibir os dados em uma tabela logo abaixo. O sistema é composto por três arquivos principais: um arquivo HTML para estruturação, um arquivo CSS para estilização e um arquivo JavaScript para manipulação da lógica do cadastro. 

## 🗂️ Estrutura do Projeto

- **`index.html`**: Arquivo HTML que contém a estrutura da página e o formulário de cadastro. 
- **`style.css`**: Arquivo CSS responsável pela estilização da página, incluindo cores, fontes e layout. 
- **`main.js`**: Arquivo JavaScript que contém a lógica para manipulação dos dados do formulário e inserção dos contatos na tabela. 

## ⚙️ Tecnologias Utilizadas

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)  

---

## 🚀 Como Usar

### 1. 🖥️ Estrutura da Página

A página contém um formulário simples com dois campos:  
- **Nome**: Campo de texto para o nome do contato. 
- **Telefone**: Campo de telefone para inserir o número de telefone. 

Após preencher os campos, ao clicar no botão **Cadastrar**, o nome e telefone são adicionados à tabela de contatos na parte inferior da página. 

### 2. 💾 Funcionalidade de Cadastro

- Ao clicar no botão **Cadastrar**, os dados do formulário são enviados e inseridos na tabela logo abaixo.
- Cada novo contato será inserido como a primeira linha da tabela. 
- Após o cadastro, os campos de nome e telefone são limpos, e o foco é automaticamente direcionado ao campo de **Nome**. 
- Em caso de ter algum telefone igual, ele notifica um alerta solicitando a alteração para um número diferente, visto que este já exista na lista de contatos.

---

## 🔧 Como Rodar

### Passos:

1. Clone o repositório ou baixe os arquivos. 
2. Abra o arquivo `index.html` em seu navegador. 
3. Preencha os campos do formulário e clique em **Cadastrar**. 
4. Verifique a tabela abaixo do formulário para ver o contato cadastrado. 

---

## 💡 Descrição do Código

### **HTML** (`index.html`)

- O código HTML cria a estrutura da página, incluindo um formulário e uma tabela onde os contatos serão exibidos. 
- O formulário utiliza os atributos `name`, `id` e `required` para garantir que os campos sejam preenchidos corretamente. 
- A tabela começa vazia, e as linhas são dinamicamente adicionadas via JavaScript. 

### **CSS** (`style.css`)

- Utiliza variáveis CSS para definir cores e fontes de forma centralizada, facilitando a manutenção do projeto. 
- O layout é organizado de forma flexível, com centralização do conteúdo e campos de formulário com bordas arredondadas.
- A tabela é estilizada com bordas sutis e células com espaçamento adequado para facilitar a leitura. 🖋️

### **JavaScript** (`main.js`)

- Manipula o formulário para inserir novos contatos na tabela. 
- Evita o recarregamento da página após o envio do formulário com o método `e.preventDefault()`. 
- Valida se os campos estão preenchidos antes de adicionar os dados à tabela. 
- Após a inserção, limpa os campos de entrada e move o foco para o campo de nome, agilizando o processo de cadastro de novos contatos. 
- Faz uma validação de números, caso exista um número igual ele não permite a duplicidade, com base no array de números
- Atualiza a quantidade de contatos que tem, com base nos números de contatos.

---

## 👀 Demonstração

Para visualizar uma prévia do projeto, [clique aqui](https://cadastro-de-contatos-gamma.vercel.app/) 👈

---

## 👨‍💻 Autor

[<img src="https://avatars.githubusercontent.com/u/55500337?s=400&u=9e2efd802fb544effcef3d0f63f446628cf0c714&v=4" width=115><br><sub>Bruno de Andrade</sub>](https://github.com/BrunoAndradeDinis)|
| :---: |