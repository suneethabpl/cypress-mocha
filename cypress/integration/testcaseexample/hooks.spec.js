
describe('HookTestSuite', () => {
    before(() => {
        cy.log("**********This is Set up block**********");
    })

    beforeEach(() => {
        cy.log("**********Tear down block**********");
    })

    afterEach(function () {
        cy.log("**********This is Log in block**********");
    })

    after(() => {
        cy.log("**********This is LOGOUT block**********");
    })


    it('searching', () => {
        cy.log("**********This is Searching Test **********");
    });
    it('advanced searching', () => {
        cy.log("**********This is Searching Test **********");
    });
    it('listing products', () => {
        cy.log("**********This is Listing Product Test **********");
    });
});