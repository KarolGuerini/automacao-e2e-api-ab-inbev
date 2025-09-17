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

