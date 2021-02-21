//note--in other automation tool, we have to write some additional commands to close particuler alert. 
//in cypress, it will automatically take care of alert windows. it will automatically close the alert window without any manual operations ,
//even no need to write any script to close the alert. but we need to write script/code by checking anything on the alert window.
// describe('handle alert', () => {
//     it('Alerts', function () {
//        cy.visit("http://mail.rediff.com/cgi-bin/login.cgi");
        {/* <iframe src="http://mail.rediff.com/cgi-bin/login.cgi" /> */ }
        // cy.visit("https://mail.rediff.com/");
        //         //after launch the website and then we need to go to go button.
        //         //so,get the sign-in button element by using type attribute
        //         //and tehn click on the sign-in button
        //         cy.get("#signin_info > a.signin").click();
        // cy.get('input[type="submit"]').click();
        //         // cy.get("input.signinbtn");
                // cy.get(".signinbtn").click();
        // cy.get("a.sign-in").click();
                // cy.get('input[title="Sign in"]').click();
                // cy.get(".signinbtn").contains("Sign in").click();
        //         // cy.on('window:alert', (str) => {
        //         //     expect(str).to.equal('Please enter a valid user name')
        //         // })
        //         // cy.visit("https://testautomationpractice.blogspot.com/")
        //         // cy.get("#HTML9 > div.widget-content > button").click();

//     })
// })
describe('handle alert', () => {
    it('Alerts', function () {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#HTML9 > div.widget-content > button").click();

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Press a button!');
        })
    });
});
//note-- handle the alters in cyprus and we don't have any special methods to work with the alerts.
//as soon as we got alert message on teh page , cyprus by default will close all the windows. cyprus will accept all windows.
// but if we want to verify something or some messages displayed on the alert windows then
//intentionally we have to rise an event and that event will capture the message into 
//some variable and then we have to compare taht message and there are 2 kinds of events
//we have especially for alert windows.one is window.alert() this is normal window. 
//if we have a multiple buttons like cancel,ok buttons then it has a confirmation alert window
//for that we use another event called window:all.
// });



