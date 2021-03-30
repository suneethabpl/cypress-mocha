describe('custoCommandSuite', () => {
    it('login to e-commerce application to add,edit,delete customer', () => {
        cy.login('admin@yourstore.com', 'admin');
        cy.title().should('not.be.equal', 'Dashboard / nopCommerce administration');
        cy.login('admin@yourstore.com', 'admin123');
        cy.title().should('be.equal', 'Your store. Login');
    });

    it('add customer after sucessfully login', () => {
        cy.login('admin@yourstore.com', 'admin');
        cy.log("Adding customer...........")
    });


    it('editcustomer  after sucessfully login', () => {
        cy.login('admin@yourstore.com', 'admin');
        cy.log("Editing customer...........")
    });


    it('delete customer  after sucessfully login', () => {
        cy.login('admin@yourstore.com', 'admin');
        cy.log("Deleting customer...........")
    });
});