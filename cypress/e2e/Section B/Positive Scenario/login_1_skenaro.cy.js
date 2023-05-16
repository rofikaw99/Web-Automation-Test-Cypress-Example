Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  /// <reference types="Cypress" />
  describe('Login', () => {
    beforeEach(() => {
      cy.visit('https://www.ruangmom.com/login')
    })
    it('Input Valid Username and Password should be success', () => {
      cy.get('input.ant-input.ant-input-lg#form_login_email').type('rofikawaludin436@gmail.com');
      cy.get('input#form_login_password').type('abcde123');
      cy.get('#root > div.ant-row > div > div > div > div > form > button > span')
      .click({ force: true });
      cy.wait(1000);
      cy.get('#root > div.ant-row > div > div > div > div > form > button > span')
      .click({ force: true });
      cy.wait(1000);
      cy.url().should('eq', 'https://www.ruangmom.com/kids-and-parenting');
      cy.wait(1000);
    })
  })
    