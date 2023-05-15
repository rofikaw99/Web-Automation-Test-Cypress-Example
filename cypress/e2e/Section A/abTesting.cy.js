

describe('A/B Test', () => {
    it('Verifies the content of A/B Test page', () => {
      // Visit the URL
      cy.visit('https://the-internet.herokuapp.com/abtest');
  
      // Verify the page content
      cy.contains('Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).');
    });

    it('Verifies the content of A/B Test page', () => {
      // Visit the URL
      cy.visit('https://the-internet.herokuapp.com/abtest');
  
      // Verify the page content
      cy.contains('Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).');
    });
  });