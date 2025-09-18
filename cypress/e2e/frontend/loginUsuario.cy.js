describe('Login de Usuário no Frontend', () => {

  it('Deve realizar login com sucesso', () => {
    cy.loginFrontendAdmin()
    cy.url().should('include', '/home')
    cy.contains('Bem Vindo').should('be.visible')
  })
})
