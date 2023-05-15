describe('Dropdown List Test', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/dropdown');
    });
  
    it('Should select Option 1 from dropdown list', () => {
        cy.get('#dropdown').select('1');
        cy.get('#dropdown').should('have.value', '1');
      });

    it('Should select Option 2 from dropdown list', () => {
        cy.get('#dropdown').select('2');
        cy.get('#dropdown').should('have.value', '2');
      });

    it('Should verify the options in the dropdown list', () => {
        cy.get('#dropdown').should('have.length', 1);
        cy.get('#dropdown').should('contain', '1');
        cy.get('#dropdown').should('contain', '2');
      });  
  });