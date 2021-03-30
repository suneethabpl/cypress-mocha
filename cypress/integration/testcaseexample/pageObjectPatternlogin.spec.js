import loginPage from '../pageObjects/loginPage'

describe('POModelTest suite', () => {
    it('valid login test', () => {
        const lp = new loginPage();
        lp.visit();
        lp.fillEmail("admin@yourstore.com");
        lp.fillPassword("admin");
        lp.submit();
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
    });
});

//run all tests in terminal by using ./node_modules/.bin/cypress run
//for individual test give in terminal,./node_modules/.bin/cypress run --spec "cypress/integration/testcaseexample/pageObjectPatternlogin.spec.js"
//for that we give ./node_modules/.bin/cypress run --spec "here we paste the copy rlative path on the testcasename which is the leftside of the page"
//cypress provide dashboard feature which is tightly grouped with our github repositiories.
//git hub is basically github repositories where we can check in our code.
//we can also generate the dashboard inside the github  repository.
//for that, firstly, we got o terminal to open test runner by using ./node_modules/.bin/cypress open
//after open the test runner, from there we can configure our project in dashboard so
//basically dashboard is a cloud-based service and which is not locally saved so, 
//here cypress is provided dashboard service as a cloud service so we have to connect
//to the dashboard service by using a github account and once you run your test cases and 
//all the tests will be running inside of the dashboard and you will able to see the results even we can see the screenshot and recorded videos,
//everything will be saved in the dashboard itself and remember that the dashboard is not
//a local service. dashboard is a cloud-based service which is supported by cypress.
//in test runner window/popup, we can see Tests,Runs,Settings tabs. 
//so, we just click on the Runs tab to set up project to record. 
//once we setup the project, this project will be set up inside the github repository and 
//once we set up our project in github repository, it will give you project ID and also key value.
//when i click Run tabs in test runner window first time, 
//we can csee """"You could see test recordings here!
// Connect to Cypress Dashboard for free:
// Record test runs in CI and debug failed tests with ease
// Understand the health of your tests with test analytics
// Improve testing efficiency with parallelization, load balancing, and more
// After logging in, you'll see recorded test runs here and in your Cypress Dashboard.""""
//"connect to dashboard/set up project to record button" in the test runner windoe at run tab.
//click on dashboard/set up project to record to see "Log in to Dashboard button".
//after click on "Log in to Dashboard button", it will automatically connect to the dashboard page.
//it will automatically connect to login to the dashboard.
//we have to use github account so, use login with github
//and then click on Authorize cypress-io button, then we can see "you have sucessfully logged in to cypress".
//again go back on test runner window , we can see "login sucessful" and continue button.
//once you clcik continue button , give project name and give who is the project owner.
//we can clcik either private or public and then click "set up project button".
//later we get project id and command/key value. this particular command we have to use 
//to run our tests locally and in the dashboard , we can see the results recorded videos,screenshots everything.
//results are saved in the dashboard. in future also in the CI environment we can also use 
//the same command along with --record.. ./node_modules/.bin/cypress  run - - record - - key d638d689-79689-7979.
//by default the project ID will be added to your cypress dot json file and if we just go back to 
//your visual studio code editor, we have one configuration file  which is cypress.json
//just open the cypress.json file it will automatically added it one project ID so,
//this is unquie ID which is created for your project Cypress automation .

//note--we can see again login with github, we cans ee how may files have executed and whatever
//the test cases we have written inside the spec file , for all of them it will capture the 
//screenshot on failures and also it will capture the recorded videos of those tests, we can see passed test cases, failure testcases,
//along with we can also see the how much time they are taken and also we can see the logs
//in the output where exactly it is failure and scrennshots and recorded. 

//dashboard is basically cloud based service which is provided by cypress so 
//we can not see this report in the local system so, it is automatically generated in cloud environment. 
//we can use dashboard by using github/google accounts. 

//cypress integration with jenkins--
//in package.json file contains scripts command. 
//give this command in terminal to give all commands, giving this command as ./node_modules/.bin/cypress run
//we can see  "test": "echo \"Error: no test specified\" && exit 1" in package.json, in scripts commands.
//we can give any name instead of test. 
//we remove "echo \"Error: no test specified\" && exit 1" and paste this command  ./node_modules/.bin/cypress run which we normally run in 
//terminal. and then give npm run test in terminal to run all tests.


//even i don't want to give npm run test in terminal. it runs through jenkins. 
//for that give this in package.json
//we give terimnal now, npm run runtests --
//  "scripts": {
   // "test": "./node_modules/.bin/cypress run",
//    "runtests": "npm run test --"
 // },
//in above we give these  -- after npm run tests because here we take runtests which our own name.
 //if i have any issue to page load, to avoid it, we can give like this.
//  "scripts": {
   // "test": "./node_modules/.bin/cypress run --config pageLoadTimeout=100000",
//    "runtests": "npm run test --"
 // },

 //jenkins is basically continuoues integration tool. but i could not able to install jenkins. 

 