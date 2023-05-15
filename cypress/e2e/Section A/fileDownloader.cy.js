describe('File Downloader Test', () => {
  it('Should download file "TESTNGInterview.txt"', () => {
    cy.visit('https://the-internet.herokuapp.com/download');
    cy.contains('a', 'TESTNGInterview.txt').invoke('removeAttr', 'target').click();
    cy.readFile('cypress/downloads/TESTNGInterview.txt').should('exist');
  });

  it('Should download file "foto.png"', () => {
    cy.visit('https://the-internet.herokuapp.com/download');
    cy.contains('a', 'foto.png').invoke('removeAttr', 'target').click();
    cy.readFile('cypress/downloads/foto.png').should('exist');
  });

  it('Should download file "rose.jpg"', () => {
    cy.visit('https://the-internet.herokuapp.com/download');
    cy.contains('a', 'rose.jpg').invoke('removeAttr', 'target').click();
    cy.readFile('cypress/downloads/rose.jpg').should('exist');
  });
});
