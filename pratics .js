let DATA ="secret informations";
class user{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data =",DATA);
    }
}



let student1 = new user("nainsi","abc@email.com");
let student2 = new user("aman","aman@gmail.com");