describe('UI Element', () => {
    it('verify inputbox and radio buttons', () => {
        cy.visit("http://demo.guru99.com/test/newtours/");
        cy.url().should('include', 'newtours')
        cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("mercury");
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("mercury");
        cy.get('input[name=submit]').should('be.visible').click();
        cy.title().should('eq', 'Login: Mercury Tours')
        cy.get('td>a[href="reservation.php"]').click();
        cy.title().should('eq', 'Find a Flight: Mercury Tours:')
        cy.get('input[value="roundtrip"]').should('be.visible').should('be.checked')
        cy.get('input[value="oneway"]').should('be.visible').should('not.be.checked').click();
        cy.get('[name="findFlights"]').should('be.visible').click();
        cy.title().should('eq', 'Find a Flight: Mercury Tours:')
    });
});