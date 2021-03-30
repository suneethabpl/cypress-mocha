describe('navigaton suite', () => {
    it('navigate to one page to another', function () {
        cy.visit("https://demo.nopcommerce.com/");
        //as soon as lounch my webpage, i will verify the title of the page. 
        cy.title().should('eq', 'nopCommerce demo store')
        //and then get register link by css class selector and verify it has Register link and click on it.
        cy.get(".ico-register").contains("Register").click();
        //and then verify title of the particular page. 
        cy.title().should('eq', 'nopCommerce demo store. Register');
        //later we go back to home page from register page. so it is back ward. 
        cy.go("back");
        cy.title().should('eq', 'nopCommerce demo store');//home
        //later we go forward to register page from home page. so it is forward. 
        cy.go('forward')
        cy.title().should('eq', 'nopCommerce demo store. Register')//Reg page
        //later we go back to home page from register page. so it is back ward. 
        cy.go(-1)//back
        cy.title().should('eq', 'nopCommerce demo store')//home
        //later we go forward to register page from home page. so it is forward. 
        cy.go(1)//forward
        cy.title().should('eq', 'nopCommerce demo store. Register')//Register
        //we can navigate multiple times.
        cy.reload();
    });
});