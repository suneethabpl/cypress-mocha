describe('custoCommandSuite', () => {
    it('login to e-commerce application to add,edit,delete customer', () => {
        //note--login,add customer
        //login,edit customer
        //login,delete customer
        // cy.visit("https://admin-demo.nopcommerce.com/login");
        // cy.get('input[name="Email"]').clear().type("admin@yourstore.com");
        // cy.get('input[name="Password"]').clear().type("admin");
        // cy.get('input[type="submit"]').click();
        cy.login('admin@yourstore.com', 'admin');//call the customise command to perform login//invalid
        cy.title().should('not.be.equal', 'Dashboard / nopCommerce administration');//after login, we verify the title of the page//valid
        cy.login('admin@yourstore.com', 'admin123');//call the customise command to perform login
        cy.title().should('be.equal', 'Your store. Login');//after login, we verify the title of the page//invalid
        //i want to login with multiple data like valid and invalid. in that case, we can call the command
        //multiple times with invalid,valid data that is become data driven test. so, we also use the customise command for data driven test 
        //means test with positiviely,negatively with invalid , valid data.
    });

    it('add customer after sucessfully login', () => {
        //login script
        // cy.visit("https://admin-demo.nopcommerce.com/login");
        // cy.get('input[name="Email"]').clear().type("admin@yourstore.com");
        // cy.get('input[name="Password"]').clear().type("admin");
        // cy.get('input[type="submit"]').click();
        cy.login('admin@yourstore.com', 'admin');//call the customise command to perform login

        //script for adding new customer
        cy.log("Adding customer...........")
    });


    it('editcustomer  after sucessfully login', () => {
        //login script
        // cy.visit("https://admin-demo.nopcommerce.com/login");
        // cy.get('input[name="Email"]').clear().type("admin@yourstore.com");
        // cy.get('input[name="Password"]').clear().type("admin");
        // cy.get('input[type="submit"]').click();
        cy.login('admin@yourstore.com', 'admin');//call the customise command to perform login

        //script for editing existing customer
        cy.log("Editing customer...........")
    });


    it('delete customer  after sucessfully login', () => {
        //login script
        // cy.visit("https://admin-demo.nopcommerce.com/login");
        // cy.get('input[name="Email"]').clear().type("admin@yourstore.com");
        // cy.get('input[name="Password"]').clear().type("admin");
        // cy.get('input[type="submit"]').click();
        cy.login('admin@yourstore.com', 'admin');//call the customise command to perform login

        //script for deleting existing new customer
        cy.log("Deleting customer...........")
    });
    //here login script is repeating every time. 
    //to avoid this i can write login script as single command. 
    //whenever i want to login , use that command. 
    //
});