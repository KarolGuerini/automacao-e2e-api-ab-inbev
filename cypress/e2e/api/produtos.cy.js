describe('API - Endpoint de Cadastro de Produtos', () => {
  let auth

  beforeEach(() => {
    cy.apiLoginAdmin().then((token) => {
      auth = token
    })
  })

  it('Deve criar um produto e validar sua consulta', () => {
    const apiUrl = Cypress.env('apiUrl')
    const produto = {
      nome: `Mouse MaryQA ${Date.now()}`,
      preco: 50,
      descricao: 'Mouse para QA',
      quantidade: 10
    }

    cy.request({
      method: 'POST',
      url: `${apiUrl}/produtos`,
      headers: { Authorization: auth },
      body: produto
    }).then((res) => {
      expect(res.status).to.eq(201)
      expect(res.body).to.have.property('message', 'Cadastro realizado com sucesso')
      expect(res.body).to.have.property('_id').and.not.be.empty

      const idProduto = res.body._id

      cy.request({
        method: 'GET',
        url: `${apiUrl}/produtos/${idProduto}`,
      }).then((resGet) => {
        expect(resGet.status).to.eq(200)
        expect(resGet.body).to.include({
          nome: produto.nome,
          preco: produto.preco,
          descricao: produto.descricao,
          quantidade: produto.quantidade
        })
      })
    })
  })
})