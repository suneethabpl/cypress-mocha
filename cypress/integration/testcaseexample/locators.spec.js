describe('locating elements', function () {
    it('verify types of locators', function () {
        cy.visit("https://demo.nopcommerce.com/")//open the url
        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch")//search box
        cy.get("[type='submit']").click()//clcik on search button to go to product page to see the product and click on the add to cart button on the product page to go to product detail page 
        cy.get(".product-box-add-to-cart-button[value='Add to cart']").click();//click on the add to cart to go to product detail page. in the product detail page , this product has a minimum quantity of 2. so, we try to clear it and add new value.
        cy.get("#product_enteredQuantity_4").clear().type(3);//quantity
        cy.get("#add-to-cart-button-4").click()//Add to cart button after providing quantity
        cy.wait(5000);//wait 5seconds/5000milliseconds to see shopping cart link 
        cy.get("#topcartlink a span.cart-label").click()//to click on shopping cart link 
        cy.wait(3000);
        cy.get(".product-unit-price").contains('$1,800.00')//verify valid unit price of the product/validation point
    })
})