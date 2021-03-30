//welcome dummy api example
// There are following public apis
// #	Route	Method	Type	Full route	Description	Details
// 1	/employee	GET	JSON	http://dummy.restapiexample.com/api/v1/employees	Get all employee data	Details
// 2	/employee/{id}	GET	JSON	http://dummy.restapiexample.com/api/v1/employee/1	Get a single employee data	Details
// 3	/create	POST	JSON	http://dummy.restapiexample.com/api/v1/create	Create new record in database	Details
// 4	/update/{id}	PUT	JSON	http://dummy.restapiexample.com/api/v1/update/21	Update an employee record	Details
// 5	/delete/{id}	DELETE	JSON	http://dummy.restapiexample.com/api/v1/delete/2	Delete an employee record	Details

describe('API Testing', () => {
    Cypress.config('baseUrl', 'http://dummy.restapiexample.com/api/v1')
    it('GET-read', () => {
        // cy.request("GET",'http://dummy.restapiexample.com/api/v1/employees');
        // cy.request() takes http command as the first argument. second argument is url. 

        //we can see if test passed and if we press f12 or inspect to see console.
        //in console you can not see response,request data, only see DevTools failed to load SourceMap: Could not load content for http://localhost:57550/__cypress/runner/popper.js.map: HTTP error: status code 404, net::ERR_HTTP_RESPONSE_CODE_FAILURE
        //so, i go to/clcik to  setting symbol which is nect to 3dots  on same output page, go to preferances and enable(does not select)2 options. those are Enable JavaScript source maps. Enable CSS source maps.
        //then we can not see 404 error in console. 

        //when we click on the request on the left side of the o/p page then we can see 
        //[[[o/p in console===Command:  request
        // cypress_runner.js:197715 Request:  
        // {Request Body: null, Request Headers: {…}, Request URL: "http://dummy.restapiexample.com/api/v1/employees", Response Body: "{"status":"success","data":[{"id":"1","employee_na…"85600","employee_age":"23","profile_image":""}]}", Response Headers: {…}, …}
        // Request Body: null
        // Request Headers: {Connection: "keep-alive", user-agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) App…hrome/87.0.4280.141 Electron/11.2.3 Safari/537.36", accept: "*/*", accept-encoding: "gzip, deflate"}
        // Request URL: "http://dummy.restapiexample.com/api/v1/employees"
        // Response Body: "{"status":"success","data":[{"id":"1","employee_name":"Tiger Nixon","employee_salary":"320800","employee_age":"61","profile_image":""},{"id":"2","employee_name":"Garrett Winters","employee_salary":"170750","employee_age":"63","profile_image":""},{"id":"3","employee_name":"Ashton Cox","employee_salary":"86000","employee_age":"66","profile_image":""},{"id":"4","employee_name":"Cedric Kelly","employee_salary":"433060","employee_age":"22","profile_image":""},{"id":"5","employee_name":"Airi Satou","employee_salary":"162700","employee_age":"33","profile_image":""},{"id":"6","employee_name":"Brielle Williamson","employee_salary":"372000","employee_age":"61","profile_image":""},{"id":"7","employee_name":"Herrod Chandler","employee_salary":"137500","employee_age":"59","profile_image":""},{"id":"8","employee_name":"Rhona Davidson","employee_salary":"327900","employee_age":"55","profile_image":""},{"id":"9","employee_name":"Colleen Hurst","employee_salary":"205500","employee_age":"39","profile_image":""},{"id":"10","employee_name":"Sonya Frost","employee_salary":"103600","employee_age":"23","profile_image":""},{"id":"11","employee_name":"Jena Gaines","employee_salary":"90560","employee_age":"30","profile_image":""},{"id":"12","employee_name":"Quinn Flynn","employee_salary":"342000","employee_age":"22","profile_image":""},{"id":"13","employee_name":"Charde Marshall","employee_salary":"470600","employee_age":"36","profile_image":""},{"id":"14","employee_name":"Haley Kennedy","employee_salary":"313500","employee_age":"43","profile_image":""},{"id":"15","employee_name":"Tatyana Fitzpatrick","employee_salary":"385750","employee_age":"19","profile_image":""},{"id":"16","employee_name":"Michael Silva","employee_salary":"198500","employee_age":"66","profile_image":""},{"id":"17","employee_name":"Paul Byrd","employee_salary":"725000","employee_age":"64","profile_image":""},{"id":"18","employee_name":"Gloria Little","employee_salary":"237500","employee_age":"59","profile_image":""},{"id":"19","employee_name":"Bradley Greer","employee_salary":"132000","employee_age":"41","profile_image":""},{"id":"20","employee_name":"Dai Rios","employee_salary":"217500","employee_age":"35","profile_image":""},{"id":"21","employee_name":"Jenette Caldwell","employee_salary":"345000","employee_age":"30","profile_image":""},{"id":"22","employee_name":"Yuri Berry","employee_salary":"675000","employee_age":"40","profile_image":""},{"id":"23","employee_name":"Caesar Vance","employee_salary":"106450","employee_age":"21","profile_image":""},{"id":"24","employee_name":"Doris Wilder","employee_salary":"85600","employee_age":"23","profile_image":""}]}"
        // Response Headers: {access-control-allow-origin: "*", access-control-expose-headers: "Content-Type, X-Requested-With, X-authentication, X-client", cache-control: "max-age=31536000", content-encoding: "gzip", content-type: "application/json;charset=utf-8", …}
        // Response Status: 200
        // __proto__: Object
        // cypress_runner.js:197715 Yielded:  
        // {status: 200, duration: 37, body: {…}, headers: {…}}
        // body:
        // data: Array(24)
        // 0: {id: "1", employee_name: "Tiger Nixon", employee_]]]

        //then check status is 200 or not.

        // cy.request("GET", 'http://dummy.restapiexample.com/api/v1/employees').then((response) => {
        cy.request("GET", '/employees').then((response) => {
            //verify the status
            expect(response).to.have.property('status', 200);
            //verify the body
            //in console, we can see under Yielded:, under status body: {status: "success", data: Array(24)}
            expect(response.body.data).to.have.length(24)
        })
    });

    it('POST-create', () => {
        const item = { "name": "test", "salary": "123", "age": "23" }
        // cy.request('POST','http://dummy.restapiexample.com/api/v1/create');
        // cy.request('POST', '/create', item)
        //give url and then we pass the body for that go to dummy api page and click on the details in the post method.
        //we can sample json data like 	{"name":"test","salary":"123","age":"23"}
        //create variable and pass the json data.
        //instead of retyping url everytime, lets pull the url out and stored them in base url.
        //but if we update the base url in cypress.json then all the other scripts would be failed.
        //so, instead we will override the base url only for this file(apitestingHTTP.spec.js). 

        //verify the item we added is now present in data 
        // cy.request('POST', '/create', item).its('body').its('data').should('deep.eq',item)
        //above assertion is faild because 
        //Actual:    {name: "test", salary: "123", age: "23", id: 9514}
        // cypress_runner.js:197715 Expected:  {name: "test", salary: "123", age: "23"}
        cy.request('POST', '/create', item).its('body').its('data').should('include', { name: 'test' });
        //now passed. o/p like
        //Command:   assert
        // cypress_runner.js:197715 Actual:    test
        // cypress_runner.js:197715 Expected:  test
        // cypress_runner.js:197715 Message:   expected { Object (name, salary, ...) } to have property name of test
    });


    it('PUT-update', () => {
        // const item = { "name": "test", "salary": "123", "age": "23" }
        const item = { "name": "test" }
        // cy.request('PUT','http://dummy.restapiexample.com/api/v1/update/21')
        //we need to pass id in PUT reguest where we need to pass body in POST request.
        // cy.request('PUT','/update/1',item)
        //we can also give above line as cy.request({method:'PUT',url:'/update/1',body:item})
        cy.request({ method: 'PUT', url: '/update/1', body: item })
        //here we pass 1 is id

        //give url and then we pass the id for that go to dummy api page and click on the details in the put method.
        //we can sample json data like 	
        //create variable and pass the json data.
    });
});