//note--i want to perform login before and after each test.
//when i specify a block of statments beforeeach , that block will execute multiple times before executing every test.
//when i specify a block of statments beforeeach , that block will execute multiple times  after completion of every test. 
//when i specify a block of statments before , those statments will execute only once before starting all the tests.
//when i specify a block of statments before , those statments will execute only once after completion of all the tests.
describe('HookTestSuite', () => {
    before(() => {
        // runs once before all tests(all it blocks) in the block
        cy.log("**********This is Set up block**********");
    })

    beforeEach(() => {
        // runs before each test in the block
        cy.log("**********Tear down block**********");
    })

    afterEach(function () {
        // runs after each test in the block
        cy.log("**********This is Log in block**********");
    })

    after(() => {
        // runs once after all tests in the block
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