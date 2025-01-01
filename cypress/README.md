
# **Cypress Automation Project**

This project automates end-to-end testing for web applications using Cypress. It includes test cases, configurations, and setup for running tests locally and in CI/CD pipelines.

---

## **Folder Structure**

```
cypress/
├── Adactin/                     # Test case folder
│   └── adactine2e.cy.js         # Test case file for Adactin
├── e2e/                         # Example test cases
├── fixtures/                    # Test data (e.g., example.json)
├── support/                     # Custom commands and hooks
│   ├── commands.js              # Custom Cypress commands
│   └── e2e.js                   # Test lifecycle hooks
cypress.config.js                # Cypress configuration file
```

---

## **Prerequisites**

Make sure you have the following installed:
1. [Node.js](https://nodejs.org/) (v16 or later)
2. [npm](https://www.npmjs.com/)
3. Cypress (installed via `npm`)

---

## **Getting Started**

### **Clone the Repository**
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### **Install Dependencies**
```bash
npm install
```

### **Run Cypress Locally**
#### Open Cypress Test Runner:
```bash
npx cypress open
```

#### Run Tests in Headless Mode:
```bash
npx cypress run --spec cypress/Adactin/adactine2e.cy.js
```

---

## **CI/CD Integration**

### **GitHub Actions Workflow**
The project includes a GitHub Actions workflow (`.github/workflows/cypress.yml`) for running tests in CI.

### **Workflow Triggers**
- **Push to `main` branch**: Automatically runs Cypress tests.
- **Pull requests**: Ensures tests pass before merging.

### **How to Set Up CI/CD**
1. Ensure the `.github/workflows/cypress.yml` file exists in your repository.
2. Push the changes to your GitHub repository.
3. Navigate to the **Actions** tab in your repository to view and monitor workflows.

---

## **Configuration**

### **Cypress Config File**
The `cypress.config.js` contains the project configuration:

```javascript
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: "cypress/support/e2e.js",
    baseUrl: "http://your-application-url.com",
    setupNodeEvents(on, config) {
      // Add node event listeners here
    },
  },
});
```

### **Environment Variables**
- Add sensitive information (e.g., API keys, URLs) to environment variables:
  ```bash
  export CYPRESS_BASE_URL=http://your-application-url.com
  ```
- Use them in the test cases with `Cypress.env('BASE_URL')`.

---

## **Test Data**

The test data is stored in the `fixtures` folder, e.g., `example.json`. Use `cy.fixture()` to load data into your tests:

```javascript
cy.fixture('example').then((data) => {
  cy.log(data.username);
});
```

---

## **Custom Commands**

Custom Cypress commands are located in `cypress/support/commands.js`. Example:

```javascript
Cypress.Commands.add("login", (username, password) => {
  cy.get("#username").type(username);
  cy.get("#password").type(password);
  cy.get("#login").click();
});
```

Use the command in tests:
```javascript
cy.login("testuser", "password123");
```

---

## **Reporting**

Cypress automatically generates:
1. **Screenshots** (on failure): Stored in `cypress/screenshots`.
2. **Videos**: Stored in `cypress/videos`.

---

## **Contributing**

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

---

## **License**

This project is licensed under the [MIT License](LICENSE).

---

## **Contact**

For issues or suggestions, please create an issue in the repository.
