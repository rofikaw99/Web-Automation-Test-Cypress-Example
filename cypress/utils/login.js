Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
/// <reference types="Cypress" />
import userData from '../fixtures/data/user.json'
import loginPage from '../model/Login/login_page'

Cypress.Commands.add('loginDashboard', function () {
  cy.visit('/')
  cy.get(loginPage.usernameInput).type(userData.email)
  cy.get(loginPage.passwordInput).type(userData.password)
  cy.get(loginPage.loginBtn).click()
  cy.url().should('include', '/Home')
})
