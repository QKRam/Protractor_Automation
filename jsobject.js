function car(){
this.color="Red";
this.engine=100;
this.brand="TATA";



this.getCarDetails=function(){

    console.log("TATA Car");
}
}
//var a= new car();
// To export the above we user below syntax in js
module.exports= new car(); //this will be availabe at globally in the code example

// a.getCarDetails();
// console.log(a.angine);