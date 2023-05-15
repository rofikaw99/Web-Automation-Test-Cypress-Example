Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
/// <reference types="Cypress" />
import userData from '../../fixtures/data/user.json'
import loginPage from '../../model/Login/login_page'

describe('Login Sanity', () => {
  // beforeEach(() => {
  //   cy.visit('https://the-internet.herokuapp.com/basic_auth')
  //   auth: {
  //     username: 'admin',
  //     password: 'admin'
  //   }
  // })
  it.only('Input Valid Username and Password should be success', () => {
    cy.visit('https://the-internet.herokuapp.com/basic_auth', {
      auth: {
        username: 'admin',
        password: 'admin'
      }
    });

    // Assertion to verify successful login
    cy.contains('Congratulations! You must have the proper credentials.');
  });
})
