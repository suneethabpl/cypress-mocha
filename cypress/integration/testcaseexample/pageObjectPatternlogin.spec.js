import loginPage from '../pageObjects/loginPage'

describe('POModelTest suite', () => {
    it('valid login test', () => {
        const lp = new loginPage();
        lp.visit();
        lp.fillEmail("admin@yourstore.com");
        lp.fillPassword("admin");
        lp.submit();
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
    });
});


 