describe('Cadastro de Produto no Frontend', () => {
  beforeEach(() => {
    cy.loginFrontendAdmin()
  })

  it('Deve cadastrar um novo produto com sucesso', () => {
    const produtoNome = `Mouse da Maria QA ${Date.now()}`
    const preco = '99'
    const descricao = 'Mouse para QA'
    const quantidade = '10'

    cy.cadastrarProdutoFrontend(produtoNome, preco, descricao, quantidade)
    cy.validarCadastroProduto(produtoNome)
  })
})


