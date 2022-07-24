

//Getting the list of ements with all method in protractor
var url="https://juliemr.github.io/protractor-demo/";
describe('ng repeater test', function(){
    function add(a,b){ 
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();
    
    }
    
it('ng repeater test for angular app', function(){
browser.get(url);
add(1,3);
add(1,3);
add(1,3);
add(1,3);
add(1,3);
                   
element.all(by.repeater('result in memory')).count(). then(function(text){

                                                                          console.log(text+ "Are the total number of row on webpage"); 
                                                                         })
element.all(by.repeater('result in memory')).each(function(item){

                                                                  item.element(by.css("td:nth-child(3)")).getText().then(function(text){
                                                                   console.log(text);
                                                                   var i=0;
                                                                   var count=0;
                                                                   var Sum=count+text;
                                                                   console.log(Sum);

                                                                 })
})

})
})


