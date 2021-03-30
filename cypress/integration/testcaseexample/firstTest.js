describe('MyTestSuite', function () {
    it('Verify Title Of The Page-positive', function () {
        cy.visit('https://demo.nopcommerce.com/');
        cy.title().should('eq', 'nopCommerce demo store');
    })
    it('Verify Title Of The Page-negative', function () {
        cy.visit('https://demo.nopcommerce1.com/');
        cy.title().should('eq', 'nopCommerce demo store');
    })
})