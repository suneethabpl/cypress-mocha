describe('fixtures testSuite', function () {
    it('fixturestest', () => {
        cy.visit("https://admin-demo.nopcommerce.com/login")
        //after launch website, get the email textbox and give emil id as sai@yourstore.com
        cy.get("input[name=Email]").clear();
        cy.get("input[name=Email]").type("admin@yourstore.com");//email
        // cy.get("input[name=Email]").type(this.internalvariable.email);//email
        cy.get("input[name=Password]").clear();
        cy.get("input[name=Password]").type("admin");//password
        // cy.get("input[name=Password]").type(this.internalvariable.password);//password
        cy.get('input[type=submit]').click()//Signin
    });
})


// describe('fixtures testSuite', function () {
//     //i need to write before hook i want to write because i want to load the example.json file before 
//     //running our test. so need to use hook. 
//     before(() => {
//         // runs once before all tests(all it blocks) in the block
//         cy.fixture('example').then(function (data) {
//             //block
//             // isay here data means it is only access within the block 
//             //but the data variable is holding the data which comes from fixture file. 
//             //so, that data can be access only before block.
//             //if i want to access the data in other test cases in outside of the block then 
//             //we need to save this data variable into internal variable. so, i take internalvariable.
//             //this represents the class. 
//             //  this.internalvariable=data;
//             this.internalvariable = data;
//             //in above, use internalvariable anywhere outside of the block. data has file which is fixtures.
//             //finally, loading the fixture file, save the data in the data variable but the data is access only within block.
//             //so, i save the data in another variable which is internalvariable with this keyword. 
//             //this.internalvariable means it can access outside of the method/block. 

//         })
//     })

//     it('fixturestest', () => {
//         cy.visit("https://admin-demo.nopcommerce.com/login")
//         //after launch website, get the email textbox and give emil id as sai@yourstore.com
//         cy.get("input[name=Email]").clear();
//         cy.get("input[name=Email]").type(this.internalvariable.email);//email
//         cy.get("input[name=Password]").clear();
//         cy.get("input[name=Password]").type(this.internalvariable.password);//password
//         cy.get('input[type=submit]').click()//Signin
//     });
//     //note--always load the fixture files before starting our test. 
//     // and then we can read/use the data in our multiple tests.
//     //before block is under the describe suite.
//     //the fixture files for data driven test 
//     //means test with positiviely,negatively with invalid , valid data.
// })

