describe('Forgot Password', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/forgot_password');
    });
  
    it('Should display the Forgot Password page', () => {
      cy.contains('h2', 'Forgot Password').should('be.visible');
      cy.contains('Please enter your email address').should('be.visible');
      cy.get('#email').should('be.visible');
      cy.get('#form_submit').should('be.visible').and('have.text', 'Retrieve Password');
    });
  
    it.only('Should retrieve password successfully', () => {
      const email = 'test@example.com';
  
      cy.get('#email').type(email);
      cy.get('#form_submit').click();
  
      cy.contains('Your e-mail\'s been sent!').should('be.visible');
      cy.contains('a', 'Retrieve Password').should('not.exist');
    });
  
    it('Should display error for invalid email', () => {
      const invalidEmail = 'invalidemail';
  
      cy.get('#email').type(invalidEmail);
      cy.get('#form_submit').click();
  
      cy.contains('Your e-mail\'s been sent!').should('not.exist');
      cy.contains('Invalid email address').should('be.visible');
    });
  });
  