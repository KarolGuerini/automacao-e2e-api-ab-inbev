const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev',
    supportFile: 'cypress/support/e2e.js',
    env: {
      apiUrl: 'https://serverest.dev',
      adminEmail: 'fulano@qa.com',
      adminPassword: 'teste' ,
      invalidEmail: 'usuario_invalido@teste.com',
      invalidPassword: 'senhaErrada'
    }
  }
})