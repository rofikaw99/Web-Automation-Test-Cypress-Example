const { defineConfig } = require('cypress');
const webpack = require('@cypress/webpack-preprocessor');
const path = require('path');

module.exports = defineConfig({
  chromeWebSecurity: false,
  fixturesFolder: "cypress/fixtures",
  e2e: {
    // specPattern: 'cypress/integration/**/*.spec.js', // Ubah sesuai dengan pola spesifikasi E2E Anda
    setupNodeEvents(on, config) {
      path.resolve(__dirname, './cypress/support');
      require('cypress-mochawesome-reporter/plugin')(on);
      on(
        'file:preprocessor',
        webpack({
          webpackOptions: {
            resolve: {
              alias: {
                '@Support': path.resolve('cypress/support/'),
                '@Fixtures': path.resolve('cypress/fixtures/'),
                '@Utils': path.resolve('cypress/utils/'),
              },
            },
          },
        })
      );
      // Konfigurasi plugin khusus untuk E2E
      // require('./cypress/plugins/index.js')(on, config);
    },
    paths: {
      '@components': 'cypress/support',
    },
    supportFile: false,
    chromeWebSecurity: false,
  },
  component: {
    // specPattern: 'cypress/component/**/*.spec.js', // Ubah sesuai dengan pola spesifikasi Komponen Anda
    setupNodeEvents(on, config) {
      // Konfigurasi plugin khusus untuk Komponen
    },
    supportFile: false
  },
  video: false,
  downloadsFolder: 'cypress/downloads',
});
