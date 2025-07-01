class Parent{
    constructor(){
        this.fathersName = "Azad";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    fullName(){
        return this.name +" "+ this.fathersName;
    }
}

const baby = new Child("Ayat");
console.log(baby);
console.log(`Full Name: ${baby.fullName()}`);
const baby2 = new Child("Ahil");
console.log(baby2);
console.log(`Full Name: ${baby2.fullName()}`);