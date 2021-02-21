//page object model is a design pattern where page objects are sepearated from Automation test scripts.
//Advantage of POM==Reusability,Maintainability
//we will create a sepearte classes for every page in your applications,
//those classes are having only locators(object identifiers).
//then i will use those classes in out test cases/scripts.
//for example, login page elements will be part of loginPage class. 
class loginPage{
    visit(){
        cy.visit("https://admin-demo.nopcommerce.com/login");
    }
    fillEmail(value){
       const field= cy.get('[id=Email]')
       field.clear();
       field.type(value);//whatever value we are getting as a parameter the same value i passed.
        //this is actual action method which we have created in the page object class.
        //the page object class have action methods which includes the page elements now. 
        return this
        //retur this means this particular method is belongs to this particular login page. 
        //so later we will create one object of this login page in our actual test from there
        // we will call this method so, this is represnting the class in js.
    }

    fillPassword(value){
        const field= cy.get('[id=Password]')
        field.clear();
        field.type(value);
        return this
    }

    submit(){
       const button= cy.get('[type=submit]');
       button.click();
    }


}
export default loginPage;