import faker from 'faker';

const email = faker.internet.email();
const password = faker.internet.password();
const nickname = faker.name.firstName();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://www.ruangmom.com/signup');
  });
  it('Registrasion when all field is empty', () => {
    cy.wait(1000);
    cy.get('h1.infograph__title')
      .contains('Hi Mom, yuk buat akun Ruangmom!')
      .should('exist');
  
    cy.get('button.ant-btn.ant-btn-primary.ant-btn-round.ant-btn-lg')
      .contains('Daftar menggunakan e-mail')
      .click({ force: true }); // Menambahkan opsi force: true
  
    // Fill in the registration form
    cy.get('span.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_email[autocomplete="email"][placeholder="Alamat email"][type="text"][data-__meta="[object Object]"][data-__field="[object Object]"].ant-input.ant-input-lg[value=""]').clear().type('{selectall}{backspace}');
    cy.get('span.ant-input-password.ant-input-password-large.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_password[autocomplete="new-password"][placeholder="Kata Sandi"][type="password"][data-__meta="[object Object]"][data-__field="[object Object]"].ant-input.ant-input-lg').clear().type('{selectall}{backspace}');
    cy.get('span.ant-input-password.ant-input-password-large.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_confirm_password').clear().type('{selectall}{backspace}');
    cy.get('span.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_nick_name').clear().type('{selectall}{backspace}');
  
    // Click on the "Daftar" button
    cy.get('button.ant-btn.my-3.ant-btn-primary.ant-btn-round.ant-btn-lg.ant-btn-block')
      .contains('Daftar')
      .click({ force: true }); // Menambahkan opsi force: true
    cy.contains('div.ant-form-explain', 'Email Salah')
    cy.contains('div.ant-form-explain', 'Kata Sandi Salah')
    cy.contains('div.ant-form-explain', 'Nama panggilan harus di isi');
    cy.contains('div.ant-form-explain', 'Pilih status Mom saat ini');  
  });

  it('Registrasion with wrong email format', () => {
    cy.wait(1000);
    cy.get('h1.infograph__title')
      .contains('Hi Mom, yuk buat akun Ruangmom!')
      .should('exist');
  
    cy.get('button.ant-btn.ant-btn-primary.ant-btn-round.ant-btn-lg')
      .contains('Daftar menggunakan e-mail')
      .click({ force: true }); // Menambahkan opsi force: true
  
    // Fill in the registration form
    cy.get('span.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_email[autocomplete="email"][placeholder="Alamat email"][type="text"][data-__meta="[object Object]"][data-__field="[object Object]"].ant-input.ant-input-lg[value=""]').type('wrong email format');
    cy.get('span.ant-input-password.ant-input-password-large.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_password[autocomplete="new-password"][placeholder="Kata Sandi"][type="password"][data-__meta="[object Object]"][data-__field="[object Object]"].ant-input.ant-input-lg').type('abcde123');
    cy.get('span.ant-input-password.ant-input-password-large.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_confirm_password').type('abcde123');
    cy.get('span.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_nick_name').type(nickname);
    cy.get('input[type="radio"].ant-radio-input[value="3"]').check();
  
    // Click on the "Daftar" button
    cy.get('button.ant-btn.my-3.ant-btn-primary.ant-btn-round.ant-btn-lg.ant-btn-block')
      .contains('Daftar')
      .click({ force: true }); // Menambahkan opsi force: true
    cy.get('div.ant-form-explain').invoke('text').then((text) => {
        // Use the 'text' variable here to access the text content
        // of the <div> element.
        console.log(text); // Output: Format email tidak valid!
      });
  });  

  it('Registrasion when password is not combination between letters and numbers', () => {
    cy.wait(1000);
    cy.get('h1.infograph__title')
      .contains('Hi Mom, yuk buat akun Ruangmom!')
      .should('exist');
  
    cy.get('button.ant-btn.ant-btn-primary.ant-btn-round.ant-btn-lg')
      .contains('Daftar menggunakan e-mail')
      .click({ force: true }); // Menambahkan opsi force: true
  
    // Fill in the registration form
    cy.get('span.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_email[autocomplete="email"][placeholder="Alamat email"][type="text"][data-__meta="[object Object]"][data-__field="[object Object]"].ant-input.ant-input-lg[value=""]').type(email);
    cy.get('span.ant-input-password.ant-input-password-large.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_password[autocomplete="new-password"][placeholder="Kata Sandi"][type="password"][data-__meta="[object Object]"][data-__field="[object Object]"].ant-input.ant-input-lg').type('abcderofikiniitu');
    cy.get('span.ant-input-password.ant-input-password-large.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_confirm_password').type('abcderofikiniitu');
    cy.get('span.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_nick_name').type(nickname);
    cy.get('input[type="radio"].ant-radio-input[value="3"]').check();
  
    // Click on the "Daftar" button
    cy.get('button.ant-btn.my-3.ant-btn-primary.ant-btn-round.ant-btn-lg.ant-btn-block')
      .contains('Daftar')
      .click({ force: true }); // Menambahkan opsi force: true
    cy.contains('div.ant-form-explain', '6-30 karakter, kombinasi huruf dan angka, spesial karakter tidak diperkenankan');
  });

  it('Registrasion when password is not combination between 6 and 30 char', () => {
    cy.wait(1000);
    cy.get('h1.infograph__title')
      .contains('Hi Mom, yuk buat akun Ruangmom!')
      .should('exist');
  
    cy.get('button.ant-btn.ant-btn-primary.ant-btn-round.ant-btn-lg')
      .contains('Daftar menggunakan e-mail')
      .click({ force: true }); // Menambahkan opsi force: true
  
    // Fill in the registration form
    cy.get('span.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_email[autocomplete="email"][placeholder="Alamat email"][type="text"][data-__meta="[object Object]"][data-__field="[object Object]"].ant-input.ant-input-lg[value=""]').type(email);
    cy.get('span.ant-input-password.ant-input-password-large.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_password[autocomplete="new-password"][placeholder="Kata Sandi"][type="password"][data-__meta="[object Object]"][data-__field="[object Object]"].ant-input.ant-input-lg').type('ab1');
    cy.get('span.ant-input-password.ant-input-password-large.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_confirm_password').type('ab1');
    cy.get('span.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_nick_name').type(nickname);
    cy.get('input[type="radio"].ant-radio-input[value="3"]').check();
  
    // Click on the "Daftar" button
    cy.get('button.ant-btn.my-3.ant-btn-primary.ant-btn-round.ant-btn-lg.ant-btn-block')
      .contains('Daftar')
      .click({ force: true }); // Menambahkan opsi force: true
    cy.contains('div.ant-form-explain', '6-30 karakter, kombinasi huruf dan angka, spesial karakter tidak diperkenankan');
  });

  it('Registrasion when password contain special char', () => {
    cy.wait(1000);
    cy.get('h1.infograph__title')
      .contains('Hi Mom, yuk buat akun Ruangmom!')
      .should('exist');
  
    cy.get('button.ant-btn.ant-btn-primary.ant-btn-round.ant-btn-lg')
      .contains('Daftar menggunakan e-mail')
      .click({ force: true }); // Menambahkan opsi force: true
  
    // Fill in the registration form
    cy.get('span.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_email[autocomplete="email"][placeholder="Alamat email"][type="text"][data-__meta="[object Object]"][data-__field="[object Object]"].ant-input.ant-input-lg[value=""]').type(email);
    cy.get('span.ant-input-password.ant-input-password-large.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_password[autocomplete="new-password"][placeholder="Kata Sandi"][type="password"][data-__meta="[object Object]"][data-__field="[object Object]"].ant-input.ant-input-lg').type('ab123456^');
    cy.get('span.ant-input-password.ant-input-password-large.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_confirm_password').type('ab123456^');
    cy.get('span.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_nick_name').type(nickname);
    cy.get('input[type="radio"].ant-radio-input[value="3"]').check();
  
    // Click on the "Daftar" button
    cy.get('button.ant-btn.my-3.ant-btn-primary.ant-btn-round.ant-btn-lg.ant-btn-block')
      .contains('Daftar')
      .click({ force: true }); // Menambahkan opsi force: true
    cy.contains('div.ant-form-explain', '6-30 karakter, kombinasi huruf dan angka, spesial karakter tidak diperkenankan');
  });

  it('Registrasion when password not match', () => {
    cy.wait(1000);
    cy.get('h1.infograph__title')
      .contains('Hi Mom, yuk buat akun Ruangmom!')
      .should('exist');
  
    cy.get('button.ant-btn.ant-btn-primary.ant-btn-round.ant-btn-lg')
      .contains('Daftar menggunakan e-mail')
      .click({ force: true }); // Menambahkan opsi force: true
  
    // Fill in the registration form
    cy.get('span.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_email[autocomplete="email"][placeholder="Alamat email"][type="text"][data-__meta="[object Object]"][data-__field="[object Object]"].ant-input.ant-input-lg[value=""]').type(email);
    cy.get('span.ant-input-password.ant-input-password-large.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_password[autocomplete="new-password"][placeholder="Kata Sandi"][type="password"][data-__meta="[object Object]"][data-__field="[object Object]"].ant-input.ant-input-lg').type(password);
    cy.get('span.ant-input-password.ant-input-password-large.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_confirm_password').type('abcde123');
    cy.get('span.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_nick_name').type(nickname);
    cy.get('input[type="radio"].ant-radio-input[value="3"]').check();
  
    // Click on the "Daftar" button
    cy.get('button.ant-btn.my-3.ant-btn-primary.ant-btn-round.ant-btn-lg.ant-btn-block')
      .contains('Daftar')
      .click({ force: true }); // Menambahkan opsi force: true
    cy.contains('div.ant-form-explain', 'Konfirmasi kata sandi tidak sesuai');
  });
});
