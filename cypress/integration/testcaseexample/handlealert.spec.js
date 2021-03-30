

describe('handle alert', () => {
    it('Alerts', function () {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#HTML9 > div.widget-content > button").click();

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Press a button!');
        })
    });
});




