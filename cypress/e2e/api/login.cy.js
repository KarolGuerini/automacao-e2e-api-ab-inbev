describe('API - Login', () => {
  it('Deve logar com usuário válido', () => {
    const apiUrl = Cypress.env('apiUrl')

    cy.request('POST', `${apiUrl}/login`, {
      email: "fulano@qa.com",
      password: "teste"
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.message).to.eq('Login realizado com sucesso')
      expect(res.body.authorization).to.exist
    })
  })
})