describe('Drag and Drop Test', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
    });
  
    it('Should successfully drag and drop element to target', () => {
      cy.get('#column-a').as('source');
      cy.get('#column-b').as('target');
  
      cy.get('@source').drag('@target');
      cy.get('@target').should('contain', 'A');
    });
  });
  