
describe('webtable suite', () => {
    it('check the value present anywhere in the table', () => {
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get('table[name="BookTable"]').contains('td', 'Learn Selenium').should('be.visible');
    });

    it('check the value present specific row and column in the table', () => {
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get('table[name="BookTable"] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible');
    });

    it('check value presence based on condition by iterating rows', () => {
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get('table[name="BookTable"]>tbody>tr>td:nth-child(2)').each(($e, index, $list) => {
            const text = $e.text();
            if (text.includes("Amod")) {
                cy.get('table[name="BookTable"]>tbody>tr>td:nth-child(1)').eq(index).then(function (bname) {
                    const bookName = bname.text()
                    expect(bookName).to.equal("Master In Java");
                })
            }
        })



    })


})

