Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  /// <reference types="Cypress" />
  describe('Login', () => {
    beforeEach(() => {
      cy.visit('https://www.ruangmom.com/login')
    })
    it('Input invalid Username and Password should be fail', () => {
      cy.get('input.ant-input.ant-input-lg#form_login_email').type('invalid@gmail.com');
      cy.get('input#form_login_password').type('invalidpassword1');
      cy.get('#root > div.ant-row > div > div > div > div > form > button > span')
      .click({ force: true });
      cy.wait(1000);
      cy.get('#root > div.ant-row > div > div > div > div > form > button > span')
      .click({ force: true });
      cy.wait(1000);
      cy.get('.ant-form-explain').should('contain', 'Data login yang anda masukkan salah');
    })
    it('Not input Username and Password should be fail', () => {
        cy.get('input.ant-input.ant-input-lg#form_login_email').clear().type('{selectall}{backspace}');
        cy.get('input#form_login_password').clear().type('{selectall}{backspace}');
        cy.get('#root > div.ant-row > div > div > div > div > form > button > span').click({ force: true });
        cy.wait(1000);
        cy.get('#root > div.ant-row > div > div > div > div > form > button > span').click({ force: true });
        cy.wait(1000);
        cy.get('.ant-form-explain').should('contain', 'Masukan email');
        cy.get('.ant-form-explain').should('contain', 'Kata Sandi harus di isi');
      });

    //sesedikit mungkin ngelakuin skenario ini, karena bisa impact ke blocking account
    it.skip('Input valid Username but Password should be fail', () => {
        cy.get('input.ant-input.ant-input-lg#form_login_email').type('rofikawaludin436@gmail.com');
        cy.get('input#form_login_password').type('invalidpassword1');
        cy.get('#root > div.ant-row > div > div > div > div > form > button > span')
        .click({ force: true });
        cy.wait(1000);
        cy.get('#root > div.ant-row > div > div > div > div > form > button > span')
        .click({ force: true });
        cy.wait(1000);
        cy.get('.ant-form-explain').should('contain', 'Data login yang anda masukkan salah');
      })
  })