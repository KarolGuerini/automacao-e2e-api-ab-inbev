# Automação de Testes com Cypress - Serverest

Este repositório contém a implementação de testes automatizados utilizando o framework **Cypress** com a linguagem **JavaScript** para testar o frontend e a API da aplicação [Serverest API](https://serverest.dev/) e [Serverest Front](https://front.serverest.dev/).

## Cenários de Teste

### API

1. **Criação de usuário**  
   - Envia requisição POST para criar um novo usuário.
   - Valida resposta com status 201 e mensagem de sucesso.

2. **Login na API**  
   - Envia requisição POST para realizar login com credenciais válidas.
   - Valida resposta com status 200 e token de autorização.
  
   - Envia requisição POST para realizar login com credenciais inválidas.
   - Valida resposta com status 401 e mensagem de erro.

3. **Criação e consulta de produto**  
   - Envia requisição POST para criar um novo produto.
   - Envia requisição GET para consultar o produto criado.
   - Valida resposta com status 200 e dados corretos do produto.

### FrontEnd

1. **Cadastro de usuário** 
   - Preenche os campos de cadastro com credenciais válidas.
   - Valida mensagem de cadastro com sucesso.

2. **Login no Frontend**  
   - Preenche os campos de login com credenciais válidas.
   - Valida que está na homepage.

3. **Criação e consulta de produto**  
   - Preenche os campos necessários para cadastro de produto.
   - Valida que o produto cadastrado está na lista de produtos.


## Tecnologias Utilizadas

- **Cypress**: Framework de testes end-to-end.
- **JavaScript**: Linguagem de programação.
- **Node.js**: Ambiente de execução JavaScript.

## Pre requisitos
Antes de rodar o projeto, você precisa ter instalado:

- Node.js
- Git
- Visual Studio Code

Verifique as versões:
node -v
npm -v


## Como Executar Localmente

1. Clone o repositório:

  - git clone https://github.com/KarolGuerini/automacao-e2e-api-ab-inbev.git

   
2. Instale as dependências:
   
   npm install

3. Execute os testes:
   
- Para rodar os testes no modo interativo:   **npm run cy:open**

- Para rodar os testes em modo headless:     **npm run cy:run**