import 'cypress-file-upload';

describe('File Upload Test', () => {
    it('Should upload file using "Choose File" button and "Upload" button', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
    
        cy.readFile('cypress/files/test-file.txt').then((fileContent) => {
          cy.get('#file-upload').attachFile({
            fileContent: fileContent.toString(),
            fileName: 'test-file.txt',
            mimeType: 'text/plain',
          });
        });
    
        cy.get('#file-submit').click();
    
        cy.get('#content').should('contain', 'File Uploaded!');
      });

      it('Should upload file using drag and drop', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
      
        const fileContent = 'This is the content of the file.';
        const fileName = 'test-file.txt';
        const mimeType = 'text/plain';
      
        // Create a file object
        const file = new File([fileContent], fileName, { type: mimeType });
      
        cy.get('#drag-drop-upload').trigger('dragover', { dataTransfer: {} })
          .trigger('drop', { dataTransfer: { files: [file] } });
      
        cy.get('span[data-dz-name]').should('contain', fileName);
      });
      
      it.skip('Should display error message when uploading disallowed file //erroronconfigurationwhenrun', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
      
        cy.get('#file-upload').attachFile('cypress/files/unallowed-file.exe', { mimeType: 'application/octet-stream' });
      
        cy.get('#file-submit').click();
        cy.get('.example > h3').should('contain', 'Internal Server Error');
      });               

      it('Should display the uploaded file name', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
    
        cy.readFile('cypress/files/test-file.txt').then((fileContent) => {
          cy.get('#file-upload').attachFile({
            fileContent: fileContent.toString(),
            fileName: 'test-file.txt',
            mimeType: 'text/plain',
          });
        });
    
        cy.get('#file-submit').click();
    
        cy.get('#uploaded-files').should('contain', 'test-file.txt');
      });
  });