describe('MyTestSuite', function () {
    it('Verify Title Of The Page-positive', function () {
        cy.visit('https://demo.nopcommerce.com/');
        //cy is predefine object which has all the methods in cypress.
        cy.title().should('eq', 'nopCommerce demo store');
        //should has 2 arguments.we verify equality operator  is first 
        //argument and expecting output is second argument we use should for assertion. 
        //i expect this test case is passed.
    })
    it('Verify Title Of The Page-negative', function () {
        cy.visit('https://demo.nopcommerce1.com/');
        //cy is predefine object which has all the methods in cypress.
        cy.title().should('eq', 'nopCommerce demo store');
        //should has 2 arguments.we verify equality operator  is first 
        //argument and expecting output is second argument we use should for assertion. 
        //i expect this test case is failed.
    })
})