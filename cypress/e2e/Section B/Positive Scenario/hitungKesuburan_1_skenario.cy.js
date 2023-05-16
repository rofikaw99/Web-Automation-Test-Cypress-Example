import faker from 'faker';

const currentDate = new Date();
const pastDate = faker.date.between(
  new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 7),
  new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1)
);

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
    it('user want to access "hitung kesuburan"', () => {
        cy.url().should('eq', 'https://www.ruangmom.com/kids-and-parenting');
        cy.get('a.nav-link[href="/pernikahan"]').click();
        cy.get('button.ant-btn:contains("Coba hitung")').click({ force: true });
        cy.get('input.ant-calendar-picker-input[placeholder="Pilih tanggal"]').invoke('val', pastDate.toISOString().split('T')[0]);
        cy.get('input.ant-input[placeholder="Isi dengan Angka 1 hingga 10"]').click({ force: true }).type(faker.random.number({ min: 1, max: 10 }), { delay: 0 });
        cy.get('div.ant-col.ant-form-item-control-wrapper input#period_calculator_siklusHaid')
        .should('exist')
        .click({ force: true })
        .type(faker.random.number({ min: 22, max: 40 }).toString(), { delay: 0 });                                                                                                    
        cy.get('button.ant-btn:contains("Hitung")').click({ force: true });
        
        //false redirect
        // cy.get('p').contains('Masa haid');
    });


    it('user want to access "hitung kesuburan"', () => {
        cy.url().should('eq', 'https://www.ruangmom.com/kids-and-parenting');
        cy.get('a.nav-link[href="/pernikahan"]').click();
        cy.get('button.ant-btn:contains("Coba hitung")').click({ force: true });
        cy.get('input.ant-calendar-picker-input[placeholder="Pilih tanggal"]').invoke('val', pastDate.toISOString().split('T')[0]);
        cy.get('input.ant-input[placeholder="Isi dengan Angka 1 hingga 10"]').click({ force: true }).type(faker.random.number({ min: 1, max: 10 }), { delay: 0 });
        cy.get('div.ant-col.ant-form-item-control-wrapper input#period_calculator_siklusHaid')
        .should('exist')
        .click({ force: true })
        .type(faker.random.number({ min: 22, max: 40 }).toString(), { delay: 0 });                                                                                                    
        cy.get('button.ant-btn:contains("Hitung")').click({ force: true });
    });
    
    it.only('user want to "hitung kesuburan" with valiod data', () => {
        cy.url().should('eq', 'https://www.ruangmom.com/kids-and-parenting');
        cy.get('a.nav-link[href="/pernikahan"]').click();
        cy.get('button.ant-btn:contains("Coba hitung")').click({ force: true });
        cy.get('input.ant-calendar-picker-input[placeholder="Pilih tanggal"]').invoke('val', pastDate.toISOString().split('T')[0]);
        cy.get('input.ant-input[placeholder="Isi dengan Angka 1 hingga 10"]').click({ force: true }).type(faker.random.number({ min: 11 }), { delay: 0 });
        cy.get('div.ant-col.ant-form-item-control-wrapper input#period_calculator_siklusHaid')
        .should('exist')
        .click({ force: true })
        .type(faker.random.number({ min: 22, max: 40 }).toString(), { delay: 0 });                                                                                                    
        cy.get('button.ant-btn:contains("Hitung")').click({ force: true });
        cy.contains('div.ant-form-explain', 'Isi dengan Angka 1 hingga 10')
        .should('be.visible');
    });
  })
    