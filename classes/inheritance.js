class Person {
    constructor(_name,_age){
        this.name = _name;
        this.age = _age;
    }

    describe(){
        console.log(`I am ${this.name} and
        I am ${this.age} years old`);
    }
}

class Programmer extends Person {
    //programmer prototype is person
    constructor(_name,_age,_yearsOfExp){
        //super calls the cons of Parent class
        super(_name,_age);
        this.yearsOfExp = _yearsOfExp;
    }

    code() {
        console.log(`${this.name} is coding`);
    }
}

let person1 = new Person('Jeff',45);
let prog2 = new Programmer('Dom',56,12);

console.log(person1);
console.log(prog2);

person1.describe();
prog2.describe();
// person1.code(); //give person1.code is not a function
prog2.code();


const programmers = [
    new Programmer('Dom',56,12),
    new Programmer('Jeff',24,3)
]
console.log(` for loop \n`);
for(let pr of programmers){
    
    pr.code();
}