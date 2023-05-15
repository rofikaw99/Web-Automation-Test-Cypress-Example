describe('Checkbox Test', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/checkboxes');
    });

    it('Should be able to toggle the first checkbox', () => {
      cy.get('[type="checkbox"]').first().check().should('be.checked');
      cy.get('[type="checkbox"]').first().uncheck().should('not.be.checked');
    });

    it('Should be able to toggle both checkboxes', () => {
        cy.get('[type="checkbox"]').first().check().should('be.checked');
        cy.get('[type="checkbox"]').eq(1).check().should('be.checked');
        cy.get('[type="checkbox"]').first().uncheck().should('not.be.checked');
        cy.get('[type="checkbox"]').eq(1).uncheck().should('not.be.checked');
      });

    it('Should be able to toggle the second checkbox', () => {
        cy.get('[type="checkbox"]').eq(1).check().should('be.checked');
        cy.get('[type="checkbox"]').eq(1).uncheck().should('not.be.checked');
      });
  });