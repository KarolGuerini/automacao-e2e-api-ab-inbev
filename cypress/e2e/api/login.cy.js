describe('API - Login', () => {
  it('Deve logar com usuário válido', () => {
    const apiUrl = Cypress.env('apiUrl')

   cy.request({
      method: 'POST',
      url: `${apiUrl}/login`,
      body: {
        email: "fulano@qa.com",
        password: "teste"
      }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.message).to.eq('Login realizado com sucesso')
      expect(res.body.authorization).to.exist
    })
  })
it('Não deve logar com usuário inválido', () => {
    const apiUrl = Cypress.env('apiUrl')

    cy.request({
      method: 'POST',
      url: `${apiUrl}/login`,
      body: {
        email: "usuario_invalido@teste.com",
        password: "senhaErrada"
      },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(401)
      expect(res.body.message).to.eq('Email e/ou senha inválidos')
    })
  })
})