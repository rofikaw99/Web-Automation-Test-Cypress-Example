describe('Notification Message', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/notification_message_rendered');
    });
  
    it('Should display the notification message', () => {
        cy.contains('h3', 'Notification Message').should('be.visible');
    });
  
    it.skip('Should click on "Click here" link and verify the new message //because action unsuccessfully', () => {
      cy.get('a').contains('Click here').click();
  
      cy.get('div#flash').should('be.visible').and('contain', 'Action successful');
    });
  });
  