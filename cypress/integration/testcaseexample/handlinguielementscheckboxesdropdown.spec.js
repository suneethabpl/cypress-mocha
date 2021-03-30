describe('verify checkboxes and dropdowns', () => {
    it('hobbies check boxes', () => {
        cy.visit("http://demo.automationtesting.in/Register.html")
        //after launched website then by default checkboxes are not selected so,
        //select hobbies checkboxes and also checked the value of teh checkboxes as soon as i checked checkboxes
        // for example the value of the checkbox is cricket or not. 
        //get the checkbox element by css selector and use check method to select the checkbox and then
        //verify some validation using should method and be.checked condition. means after checking the checkbox 
        //it will verify , it is checked or not. if the checkbox is already checked then teh condition become true. then 
        //assertion will passed. 
        // cy.get('#checkbox1').check().should('be.checked')
        //after taht create one more assertion to check teh value of teh checkbox is cricket or not.
        //for that add one more condition is and method. and() is enchancing multiple validations. 
        //and has 2 parameters. one is have.value condition and second is expecting the value of teh checkbox.
        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket');
        cy.get('#checkbox2').check().should('be.checked').and('have.value', 'Movies');
        cy.get('#checkbox3').check().should('be.checked').and('have.value', 'Hockey');
        //note--i have selected each checkbox and then verify the status whetehr it iis checked or not 
        //after that verify teh value of teh checkbox here we do positive validation and then 
        //after doing this again uncheck the particular checkboxes.
        //for that we do negative validation so, used condition as .not.be.checked 
        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        //select multiple checkboxes by using single statment.for that in inspect, we checked 
        //only type attribute is same in all 3 checkboxes ans rest of attributes are different. 

        //below, get returns 3 checkboxes by using coomon attribute of css selector
        cy.get('input[type=checkbox]').check(['Cricket', 'Hockey', 'Movies'])
        //above , we noticed selected 3 checkboxes.
    });

    it('skills dropdown', () => {
        //get the dropdown element by id of css selector and then select the value from dropdown
        // by using select() with value argument as Android.
        //verify the value of the option is Android or not , as soon as select the value from dropdown 
        //we have to handle this when we can see selec tag in dropdown
        cy.get("#Skills").select('Android').should('have.value', 'Android')
    });

    it('language listbox/kind of dropdown  multiple select', () => {
        //if there is no select tag for dropdown then we can handle with another way. 
        //here multiple select in languages dropdown 

        cy.get("#msdd").click();//first click on the language dropdown.
        //and then it gives all the options in it.
        //for that in inspect we can see same class in all anchor tag which is inside of all list item tag. 
        //so, the class is common locator for all the class.
        cy.get('.ui-corner-all').contains('English').click();
        //there are english,japaneese in options of dropdown. 
        //so,i selected english and click on it to select it in dropdwn. 
        // done same as Dutch. 
        cy.get('.ui-corner-all').contains('Dutch').click();
        //note---perform click action on the element, and then rest of the option are poulated
        //all those optoions by writing a common locator to able to point all the options that is contains same class name
        //and then we select the english and dutch by using contains().
    });

    it('select country serachable dropdown', () => {
        //note--perform clcik on it and then provide some value by giving/typing, 
        //and tehn press enter and then we can see it is selected. it does not have select tag.
        cy.get('[role="combobox"]').click({force:true});
        //after perform clcik action on the select country serachable dropdown
        //and then we can get the textbox which is inside dropdown.
        //and tehn type which i want to select the country in the textbox.
        //later press enter key from keyboard to select the particular country which i typed India
        //for that, so, pass enter in type method
        cy.get('.select2-search__field').type('India').type('{enter}');
    })

    //note---got this error by running this steps of test cases.
    //Timed out retrying after 4050ms: cy.click() failed because this element:
    //<span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-labelledby="select2-country-container">...</span>
    //is being covered by another element:
    //<li list-select="" class="ng-scope">...</li>
    //Fix this problem, or use {force: true} to disable error checking.

    //resolved this error 
    //    cy.get('[role="combobox"]').click();//here normal clcik is not working
    //so, use {force:true} even though before element(languages listbox) is covering to another element(select languages dropdown) 

    //note---when ever we select tag in dropdown that is static dropdown. so, we handle the static 
    //dropdown and other dropdowns like multi select and searchable dropdown.

});