describe('fixtures testSuite', function () {
    it('fixturestest', () => {
        cy.visit("https://admin-demo.nopcommerce.com/login")
        cy.get("input[name=Email]").clear();
        cy.get("input[name=Email]").type("admin@yourstore.com");
        cy.get("input[name=Password]").clear();
        cy.get("input[name=Password]").type("admin");
        cy.get('input[type=submit]').click()
    });
})



