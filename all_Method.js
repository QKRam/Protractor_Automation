
//Getting the list of ements with all method in protractor
var url="https://juliemr.github.io/protractor-demo/";
describe('ng repeater test', function(){
it('ng repeater test for angular app', function(){
browser.get(url);
for(var i=0;i<=10;i++){

element(by.model('first')).sendKeys(i);

element(by.model('second')).sendKeys(i);

element(by.id('gobutton')).click().then(function(){
                                                    browser.sleep(1000);  
                                                   })
                      }
element.all(by.repeater('result in memory')).count(). then(function(text){

    console.log(text+ "Are the total number of row on webpage"); 
})
element.all(by.repeater('result in memory')).each(function(item){

    item.element(by.css("td:nth-child(3)")).getText().then(function(text){
        console.log(text);

    })
})

})


})