const employee = {
    calTax() {
        console.log("tax rate is 10%");
    },
};
const karanarjun = {
    salary: 50000,
};
karanarjun.__proto__ =employee;//reference to an object
//class in js
//class is a program code template for creating objects.
// objects will have some state(variable)&some bheaviour (functions)inside it.
//class myclass{
  //  constructor(){...}
    //myMethod(){...}
//}
//let my obj =new myclass()