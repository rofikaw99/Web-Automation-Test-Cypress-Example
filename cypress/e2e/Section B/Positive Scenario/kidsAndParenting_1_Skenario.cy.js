Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  /// <reference types="Cypress" />
  describe('Login', () => {
    beforeEach(() => {
      cy.visit('https://www.ruangmom.com/login');
      cy.get('input.ant-input.ant-input-lg#form_login_email').type('rofikawaludin436@gmail.com');
      cy.get('input#form_login_password').type('abcde123');
      cy.wait(100)
      cy.get('button.ant-btn.my-3.ant-btn-primary.ant-btn-round.ant-btn-lg.ant-btn-block')
      .contains('Masuk')
      .click({ force: true });
      cy.wait(1000)
      cy.get('button.ant-btn.my-3.ant-btn-primary.ant-btn-round.ant-btn-lg.ant-btn-block')
      .contains('Masuk')
      .click({ force: true });
      cy.wait(4000)
    
    })
    it('user want to access"Pelajari tumbuh kembang sesuai usia anak 10 bulan"', () => {
        cy.url().should('eq', 'https://www.ruangmom.com/kids-and-parenting');
  
        cy.get('a[href="https://www.ruangmom.com/perkembangan-bayi-10-bulan.html"].progress-permonth__link')
        .as('link')
        .should('be.visible')
        .then(($link) => {
          const href = $link.attr('href');
          cy.visit(href);
        });
      
        cy.url().should('eq', 'https://www.ruangmom.com/perkembangan-bayi-10-bulan.html');
      
        cy.get('h1.article-title.charter-bold')
         .should('contain', 'Perkembangan Bayi 10 Bulan: Si Kecil Merespons Ketika Dipanggil Namanya');  
    })
  })
    