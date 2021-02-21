// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//customise command. 
//i want to use this customise command in my tests for that go to customCommands.spec.js. 
Cypress.Commands.add('login', (email, password) => {
    cy.visit("https://admin-demo.nopcommerce.com/login");
    // cy.get('input[name="Email"]').clear().type("admin@yourstore.com");
    cy.get('input[name="Email"]').clear();
    cy.get('input[name="Email"]').type("email");
    // cy.get('input[name="Password"]').clear().type("admin");
    cy.get('input[name="Password"]').clear();
    cy.get('input[name="Password"]').type("password");
    cy.get('input[type="submit"]').click();
})
//currently i create custome command for login so, here login is command name
//when execute this command, i need to pass two argument because login require to 2 parameters..
//i passed login script and remove hard code of email which is "admin@yourstore.com" and give email which is first parameter.
//i passed login script and remove hard code of password which is "admin" and give email which is second parameter.

