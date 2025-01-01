const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: "cypress/support/e2e.js", // Update path if needed
    baseUrl: "https://adactinhotelapp.com/", // Replace with your application's base URL
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});