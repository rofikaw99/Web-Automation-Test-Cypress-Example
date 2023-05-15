Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
/// <reference types="Cypress" />
import { faker } from '@faker-js/faker'
import userData from '../fixtures/data/user.json'
import userPage from '../../model/User/user'

Cypress.Commands.add('createUser', function () {
  cy.wait(5000)
  cy.get(userPage.employeeCode).type(`EP${faker.random.numeric(5)}`)
  cy.get(userPage.fullName).type(faker.name.fullName())
  cy.get(userPage.displayName).type(faker.name.lastName())
  cy.tab().type('{downArrow}{downArrow}{enter}')
  cy.tab().type('{downArrow}{downArrow}{enter}')
  cy.tab().type('{downArrow}{downArrow}{enter}{esc}')
  cy.get(userPage.phoneNumber).type(`08${faker.random.numeric(10)}`)
  cy.get(userPage.email).type(faker.internet.email())
  cy.get(userPage.password).type(userData.password)
  cy.get(userPage.passwordConfirmation).type(userData.password)
  cy.get(userPage.btnSave).click()
  cy.contains('Yes').click()
  cy.url().should('include', '/user')
})
