//callObj.js
const { browser } = require('protractor');
const { isTypedArray } = require('util/types');
var obj1= require('./beforeTestObj');
var obj2=require('./datadrive');
const using = require('jasmine-data-provider');
const { assert } = require('console');


describe('Calculator Test', function(){
    beforeEach(function(){

        obj1.getRepo();
    })
  //using block is used to get data , and here in data 
  //data = strore actual data
  //Description strores sub jet name

using(obj2.dataDriven, function(data, description){
    it('Calculator Test 001'+description,function(){

        obj1.first.sendKeys(data.firstNum).then(function(){
    
            browser.sleep(4000);
        })
        obj1.second.sendKeys(data.SecondNum).then(function(){
    
            browser.sleep(4000);
        })
        obj1.goButton.click().then(function(){
    
            browser.sleep(4000);
        })

          expect( obj1.result.getText()).toBe((data.reult));
      

})




})


})