describe('API - Endpoint de Login', () => {
  it('Deve logar com usuário válido', () => {
   cy.apiLoginAdmin().then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.message).to.eq('Login realizado com sucesso')
      expect(res.body.authorization).to.exist
    })
  })
it('Não deve logar com usuário inválido', () => {
    cy.apiLoginInvalid().then((res) => {
      expect(res.status).to.eq(401)
      expect(res.body.message).to.eq('Email e/ou senha inválidos')
    })
  })
})