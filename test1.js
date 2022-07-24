describe('Test001 LOcators 02', function(){

it('Test001Tc01',function(){
    browser.wait
   // browser.get("https:www.google.com")

browser.get("https://juliemr.github.io/protractor-demo/");
//element function for finding and intracting with DOM element 
element(by.model('first')).sendKeys('2').then(function(){

    browser.sleep(6000);
});
element(by.model('second')).sendKeys('8').then(function(){
    browser.sleep(6000);  
})
element(by.id('gobutton')).click().then(function(){
    browser.sleep(6000);  
    
})
expect(element(by.css("h2[class='ng-binding']")).getText()).toBe('10');
element(by.css("h2[class='ng-binding']")).getText().then(function(text){
//If you are retriving from the browser protractor will not take care of it synchronization/
    console.log(text);
})

//real output will disply only when we resolve the promice
//if not resllved : It is not guarentee sequence on execution 
});
});