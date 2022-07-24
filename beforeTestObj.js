//beforeTestObj.js -Created a function ObjRepo which consist of object then object is export into test cases js file
const { Console } = require("console");

function objRepo(){

this.objColor='red';
this.objType='NULL';
this.first=element(by.model("first"));
this.second=element(by.model("second"));
this.goButton= element(by.id("gobutton"));

this.result=element(by.css("h2[class='ng-binding']"));

this.getRepo=function( ){

    //console.log("I am in metod");

    browser.get('https://juliemr.github.io/protractor-demo/');
}

}

//obj=new objRepo;
//obj.getRepo();
//To export obove object in other JS file use below systax
module.exports=new objRepo;

