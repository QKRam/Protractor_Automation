
//repeater - ng-repeat can be use
var url="https://juliemr.github.io/protractor-demo/";
describe('ng repeater test', function(){
it('ng repeater test for angular app', function(){
browser.get(url);

element(by.model('first')).sendKeys('2').then(function(){

    browser.sleep(6000);
});
element(by.model('second')).sendKeys('8').then(function(){
    browser.sleep(6000);  
})
element(by.id('gobutton')).click().then(function(){
    browser.sleep(6000);  

    
})
element(by.repeater('result in memory')).element(by.css("td:nth-child(3)")).getText().then(function(text)
{
  console.log(text);  
})

})


})