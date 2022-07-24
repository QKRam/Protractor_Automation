
describe('Cal tet', function(){
it('Cal tes', function(){


    browser.get('https://juliemr.github.io/protractor-demo/');
    element(by.model("first")).sendKeys("12");
    element(by.model("second")).sendKeys("2").then(function(){

        browser.sleep(5000);
        element(by.id("gobutton")).click();

    });
    
//this.result=element(by.css("h2[class='ng-binding']"));
})

})