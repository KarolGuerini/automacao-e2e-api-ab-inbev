describe('Cadastro de Usuário no Frontend', () => {

    it.only('Deve cadastrar um novo usuário', () => {
        const uniqueEmail = `mariaqa_${Date.now()}@teste.com`

        cy.cadastrarUsuarioFrontend('Maria QA', uniqueEmail, '54321')

        cy.contains('Cadastro realizado com sucesso').should('be.visible')
    })
})