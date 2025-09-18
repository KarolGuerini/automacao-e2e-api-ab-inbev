Cypress.Commands.add('apiLogin', () => {
  const apiUrl = Cypress.env('apiUrl')
  const email = Cypress.env('adminEmail')
  const password = Cypress.env('adminPassword')

  return cy.request({
    method: 'POST',
    url: `${apiUrl}/login`,
    body: { email, password }
  })
})

Cypress.Commands.add('apiLoginAdmin', () => {
  const apiUrl = Cypress.env('apiUrl')
  const email = Cypress.env('adminEmail')
  const password = Cypress.env('adminPassword')

  return cy.request({
    method: 'POST',
    url: `${apiUrl}/login`,
    body: { email, password }
  }).then((res) => {
    expect(res.status).to.eq(200)
    expect(res.body).to.have.property('authorization').and.not.be.empty
    return res.body.authorization
  })
})

Cypress.Commands.add('apiLoginInvalid', () => {
  const apiUrl = Cypress.env('apiUrl')
  const invalidEmail = Cypress.env('invalidEmail')
  const invalidPassword = Cypress.env('invalidPassword')

  return cy.request({
    method: 'POST',
    url: `${apiUrl}/login`,
    body: {
      email: invalidEmail,
      password: invalidPassword
    },
    failOnStatusCode: false
  }).then((res) => {
    return res
  })
})

Cypress.Commands.add('apiCreateUser', (nome, email, password, administrador = "true") => {
  const apiUrl = Cypress.env('apiUrl')

  return cy.request({
    method: 'POST',
    url: `${apiUrl}/usuarios`,
    body: {
      nome,
      email,
      password,
      administrador
    }
  }).then((res) => {
    return res
  })
})

Cypress.Commands.add('cadastrarUsuarioFrontend', (nome, email, senha) => {
  cy.visit('/cadastrarusuarios')
  cy.get('[data-testid="nome"]').type(nome)
  cy.get('[data-testid="email"]').type(email)
  cy.get('[data-testid="password"]').type(senha)
  cy.get('[data-testid="cadastrar"]').click()
})

Cypress.Commands.add('loginFrontendAdmin', () => {
  const email = Cypress.env('adminEmail')
  const password = Cypress.env('adminPassword')

  cy.visit('/')
  cy.get('[data-testid="email"]').type(email)
  cy.get('[data-testid="senha"]').type(password)
  cy.get('[data-testid="entrar"]').click()
})

Cypress.Commands.add('cadastrarProdutoFrontend', (nome, preco, descricao, quantidade) => {
  cy.get('[data-testid="cadastrar-produtos"]').click()   // precisa dos ()
  cy.get('[data-testid="nome"]').type(nome)
  cy.get('[data-testid="preco"]').type(preco)
  cy.get('[data-testid="descricao"]').type(descricao)//cy.get('[data-testid="descricao"]')
  cy.get('[data-testid="quantity"]').type(quantidade)
  cy.get('[data-testid="cadastarProdutos"]').click()
})

Cypress.Commands.add('validarCadastroProduto', (nomeProduto) => {
  cy.contains(nomeProduto).should('be.visible')
})

