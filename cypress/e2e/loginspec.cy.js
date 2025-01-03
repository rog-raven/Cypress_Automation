describe('Complete Flow with Screenshots', () => {
    it('should take screenshots after every action', () => {
        // Visit the login page
        cy.visit('https://adactinhotelapp.com/');
        cy.screenshot('login-page'); // Take a screenshot of the login page

        // Perform login
        cy.get('#username').type('rograven');
        cy.get('#password').type('17XS72');
        cy.get('#login').click();
        // Take a screenshot after login
        cy.screenshot('after-login');

        // Fill out the hotel booking form
        // Add the remaining steps and screenshots here
    });
});