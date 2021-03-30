//note--check value present anywhere in the table. 
//check value present in specific row and column.
//check value presence based on condition by iterating rows. 
describe('webtable suite', () => {
    it('check the value present anywhere in the table', () => {
        cy.visit("https://testautomationpractice.blogspot.com/");
        //after visit the site, get table by using tag along with attribute
        //and then verify table has/contains 'Learn Selenium' in td(table data).
        //contanis method has 2 arguments. one is exact location for example table data 
        //and other is what is the text here example 'Learn Selenium'
        //'Learn Selenium' is in td.
        //contains('td', 'Learn Selenium') means any of td tag should contain  'Learn Selenium'.
        //should('be.visible') means it should be visible anywhere in the table.
        cy.get('table[name="BookTable"]').contains('td', 'Learn Selenium').should('be.visible');
    });

    it('check the value present specific row and column in the table', () => {
        cy.visit("https://testautomationpractice.blogspot.com/");
        //after visit the site, get table by using tag along with attribute
        //and then we will  extract which is second row, third column exact from table
        //this is css selector #HTML1 > div.widget-content > table > tbody > tr:nth-child(2) > td:nth-child(3)
        //our own css selector ::== table[name="BookTable"] > tbody > tr:nth-child(2) > td:nth-child(3)
        //it is exactly specify the second row and third column. 
        //contains('Selenium') means Selenium this value presents in specif row and column. 
        cy.get('table[name="BookTable"] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible');
    });

    it('check value presence based on condition by iterating rows', () => {
        cy.visit("https://testautomationpractice.blogspot.com/");
        //i will get author from each and evry row to check where is Amod in author column.
        //if i found author name is Amod then  verify the book Master in java is written by Amod
        //that is conditional based validation by iterating row

        //verify the book name "Master in Java" whose author is Amod
        //table[name="BookTable"] to catpture particular table 
        // table[name="BookTable"]>tbody>tr>td:nth-child(2)to capture author column for evry row.

        // extract teh column values by using table[name="BookTable"]>tbody>tr>td:nth-child(1) this css selector
        //in each method which is in javascript, it has 3 parameters. first variable is element as  $e, second value/variable/parameter is index. index is variable ,
        //it start from 1. and every iteration teh index value automatically increased. 
        //third value/variable is $list. multiple rows and single column whoch is author column (whole list)stored in $list variable.
        //from this $list , extract the first element that is stored in e. 
        //index represents the row. it starts from 1.
        cy.get('table[name="BookTable"]>tbody>tr>td:nth-child(2)').each(($e, index, $list) => {
            //and then will extract the text from the element $e.
            const text = $e.text();
            if (text.includes("Amod")) {
                //if the author is Amod then i need to capture book name is written by Amod,
                //for that get the entire first column and then eq(index) means it repeat multiple 
                //times.evrytime index will be 1,2,3,4,5...   until we get Amod.
                //if the author is not matched then it will go up and get teh another element from the list 
                //and index will be increasing.
                //use eq(index) because we want same row to cature bookname. 
                cy.get('table[name="BookTable"]>tbody>tr>td:nth-child(1)').eq(index).then(function (bname) {
                    //above line means it will directly go to the first column,based on the index, it will go to particular row
                    //then it will capture the  bookname.
                    const bookName = bname.text()
                    //and then verify the bookname is Master In Java or not. 
                    expect(bookName).to.equal("Master In Java");
                })
            }
        })



    })


})

