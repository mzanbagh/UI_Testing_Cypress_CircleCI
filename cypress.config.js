const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    },
    baseUrl:'https://www.cgtrader.com/3d-print-models/hobby-diy/other/m-jet-60-3d-printable-jet-drive-for-electric-surfboards',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      name: "jet",
      share_button : ".stats-info__share-button > .btn",
      price_obj : '#product-price-final',
      price : "$10.00"
    },
  },
});
