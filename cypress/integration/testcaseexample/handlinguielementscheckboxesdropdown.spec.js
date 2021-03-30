describe('verify checkboxes and dropdowns', () => {
    it('hobbies check boxes', () => {
        cy.visit("http://demo.automationtesting.in/Register.html")
        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket');
        cy.get('#checkbox2').check().should('be.checked').and('have.value', 'Movies');
        cy.get('#checkbox3').check().should('be.checked').and('have.value', 'Hockey');
        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')
        cy.get('input[type=checkbox]').check(['Cricket', 'Hockey', 'Movies'])
    });

    it('skills dropdown', () => {
        cy.get("#Skills").select('Android').should('have.value', 'Android')
    });

    it('language listbox/kind of dropdown  multiple select', () => {
        cy.get("#msdd").click();
        cy.get('.ui-corner-all').contains('English').click();
        cy.get('.ui-corner-all').contains('Dutch').click();
    });

    it('select country serachable dropdown', () => {
        cy.get('[role="combobox"]').click({force:true});
        cy.get('.select2-search__field').type('India').type('{enter}');
    })

});