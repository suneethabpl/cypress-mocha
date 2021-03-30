describe('UI Element', () => {
    it('verify inputbox and radio buttons', () => {
        cy.visit("http://demo.guru99.com/test/newtours/");//open the url chrome browser.
        cy.url().should('include', 'newtours')
        // cy.url() returns current page url and should is the conditional statments
        // here, value of the key , it should be part of the url.so,here verify the url should include newtours.
        cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("mercury");
        //get method to get you the element based on the css seletor. and then verify whether the
        //element is not visible or not and it is enabled or not.and then i will send the
        //value into the inputbox. be.visible,be.enabled are conditions of should method.once these conditions are satisfied
        //then give value/text to inputbox.
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("mercury");//check password like same as username
        //and then check whether signin is visible or not  and then clcik on it.
        cy.get('input[name=submit]').should('be.visible').click();//submit
        //after sucessfull submit and then capture the title of the page.
        // cy.title().should('eq','Find a flight:Mercury Tours:')//title verification
        cy.title().should('eq', 'Login: Mercury Tours')//title verification
        //  cy.title() returns give the title of the current page and eq is the condition and give expecting title as Find a flight:Mercury Tours:
        cy.get('td>a[href="reservation.php"]').click();
        cy.title().should('eq', 'Find a Flight: Mercury Tours:')//title verification
        // later interact with radiobutton, for that verify the status of radio button
        cy.get('input[value="roundtrip"]').should('be.visible').should('be.checked')//get the radio button selector and then 
        //verify it is visible and it is checked.
        //also verify the second the radio button, get the selector and verify it is visible or not and check it is not checked and then click on it to select the radio button.
        cy.get('input[value="oneway"]').should('be.visible').should('not.be.checked').click();
        //click on continue button for that get the selector and the verify it is visible or not and then click it.
        cy.get('[name="findFlights"]').should('be.visible').click();
        //later verify the title of current page and this page also have same title. 
        cy.title().should('eq', 'Find a Flight: Mercury Tours:')
        // note--how to interact with input boxes or text boxes, before providing value or value of typing the value, we can check whetehr 
        //it will check visible/enable or not. simmilarly, for the radio buttons, we checked , it is visible/checked or not
        //if i put any negative conditions , suppose i am expecting it is not selected then use condition not.be.checked and then select that radibutton via clcik().
        //after taht clcik on the continue button and verify the title verification.
    });
});