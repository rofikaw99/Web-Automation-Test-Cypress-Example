import faker from 'faker';

const email = faker.internet.email();
const password = faker.internet.password();
const nickname = faker.name.firstName();
const randomDate = faker.date.past();
const formattedDate = randomDate.toISOString().slice(0, 10);

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://www.ruangmom.com/signup');
  });

  it('Registrasion with option "Merencanakan Pernikahan"', () => {
    cy.wait(1000);
    cy.get('h1.infograph__title')
      .contains('Hi Mom, yuk buat akun Ruangmom!')
      .should('exist');
  
    cy.get('button.ant-btn.ant-btn-primary.ant-btn-round.ant-btn-lg')
      .contains('Daftar menggunakan e-mail')
      .click({ force: true }); // Menambahkan opsi force: true
  
    // Fill in the registration form
    cy.get('span.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_email[autocomplete="email"][placeholder="Alamat email"][type="text"][data-__meta="[object Object]"][data-__field="[object Object]"].ant-input.ant-input-lg[value=""]').type(email);
    cy.get('span.ant-input-password.ant-input-password-large.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_password[autocomplete="new-password"][placeholder="Kata Sandi"][type="password"][data-__meta="[object Object]"][data-__field="[object Object]"].ant-input.ant-input-lg').type('abcde123');
    cy.get('span.ant-input-password.ant-input-password-large.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_confirm_password').type('abcde123');
    cy.get('span.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_nick_name').type(nickname);
    cy.get('input[type="radio"].ant-radio-input[value="3"]').check();
  
    // Click on the "Daftar" button
    cy.get('button.ant-btn.my-3.ant-btn-primary.ant-btn-round.ant-btn-lg.ant-btn-block')
      .contains('Daftar')
      .click({ force: true }); // Menambahkan opsi force: true
    // Perform assertions or navigate to the next page but unautorizhed
  }); 
  
  it.only('Registrasion with option "Sedang Hasil"', () => {
    cy.wait(1000);
    cy.get('h1.infograph__title')
      .contains('Hi Mom, yuk buat akun Ruangmom!')
      .should('exist');
  
    cy.get('button.ant-btn.ant-btn-primary.ant-btn-round.ant-btn-lg')
      .contains('Daftar menggunakan e-mail')
      .click({ force: true }); // Menambahkan opsi force: true
  
    // Fill in the registration form
    cy.get('span.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_email[autocomplete="email"][placeholder="Alamat email"][type="text"][data-__meta="[object Object]"][data-__field="[object Object]"].ant-input.ant-input-lg[value=""]').type(email);
    cy.get('span.ant-input-password.ant-input-password-large.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_password[autocomplete="new-password"][placeholder="Kata Sandi"][type="password"][data-__meta="[object Object]"][data-__field="[object Object]"].ant-input.ant-input-lg').type('abcde123');
    cy.get('span.ant-input-password.ant-input-password-large.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_confirm_password').type('abcde123');
    cy.get('span.ant-input-affix-wrapper.ant-input-affix-wrapper-lg input#form_daftar_nick_name').type(nickname);
    cy.get('input.ant-radio-input[value="2"][type="radio"]').check();
    cy.get('#form_daftar_pregnant_start_period').click();
    cy.get('input.ant-calendar-input').click().type(formattedDate);
  
    // Click on the "Daftar" button
    cy.get('button.ant-btn.my-3.ant-btn-primary.ant-btn-round.ant-btn-lg.ant-btn-block')
      .contains('Daftar')
      .click({ force: true }); // Menambahkan opsi force: true
    // Perform assertions or navigate to the next page but unautorizhed
  }); 
});
