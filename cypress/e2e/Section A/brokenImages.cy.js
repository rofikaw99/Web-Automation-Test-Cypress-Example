describe.only('Broken Images Test', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/broken_images');
    });
  
    it.only('Should detect broken images', () => {
      let brokenImageCount = 0; // Variabel untuk menghitung jumlah gambar yang rusak
  
      cy.get('img').each(($img) => {
        cy.request({
          url: $img.prop('src'),
          failOnStatusCode: false,
        }).then((response) => {
          if (response.status === 404) {
            brokenImageCount++; // Meningkatkan hitungan jika gambar rusak
          }
        });
      }).then(() => {
        cy.log(`Number of broken images: ${brokenImageCount}`); // Menampilkan jumlah gambar yang rusak
      });
    });
  });