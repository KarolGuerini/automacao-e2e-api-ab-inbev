describe('API - Endpoint de Cadastro de Usuários', () => {

  it('Deve criar um usuário com sucesso', () => {
    const uniqueEmail = `mariaqa_${Date.now()}@teste.com`

    cy.apiCreateUser('QA Maria Do Bairro', uniqueEmail, '98765', 'true').then((res) => {
      expect(res.status).to.eq(201)
      expect(res.body).to.have.property('message', 'Cadastro realizado com sucesso')
      expect(res.body).to.have.property('_id')
      expect(res.body._id).to.not.be.empty
    })
  })
})