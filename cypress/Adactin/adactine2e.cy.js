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
        cy.get('#location').select('Sydney');
        cy.get('#hotels').select('Hotel Sunshine');
        cy.get('#room_type').select('Double');
        cy.get('#room_nos').select('3');
        cy.get('#datepick_in').clear().type('24/12/2024');
        cy.get('#datepick_out').clear().type('26/12/2024');
        cy.get('#adult_room').select('4 - Four');
        cy.get('#child_room').select('3 - Three');
        cy.get('#Submit').click();
        cy.screenshot('after-hotel-selection');

        // Confirm the booking
        cy.get('#radiobutton_0').click();
        cy.get('#continue').click();

        // Screenshot after confirmation
        cy.screenshot('after-confirmation');

        // Fill out payment details
        cy.get('#first_name').type('yaven');
        cy.get('#last_name').type('rog');
        cy.get('#address').type('address');
        cy.get('#cc_num').type('1234567890823456');
        cy.get('#cc_type').select('VISA');
        cy.get('#cc_exp_month').select('September');
        cy.get('#cc_exp_year').select('2028');
        cy.get('#cc_cvv').type('432');
        cy.get('#book_now').click();
        // Screenshot after payment
        cy.screenshot('after-payment');

        // Confirm and navigate back to login
        cy.wait(5000); // Ensure the process is completed

        cy.get('#my_itinerary').click();
        cy.screenshot('itinerary-page'); // Screenshot of itinerary page
        cy.get('#logout').click();

        cy.screenshot('back-to-login'); // Screenshot after redirecting to login
    });
});