class Animal {
    constructor(name){
        this.name = name;
    }

    makeSound(){
        console.log('Generic Animal Sound!');
    }
}

class Dog extends Animal {
    constructor(name){
        super(name);
    }

    makeSound(){
        //this will call the parent class 
        //makeSound method 
        super.makeSound(); 
        console.log('Woof Woof');
    }
}
 
const a1 = new Animal('Dom');
const a2 = new Dog('Jeff');

a1.makeSound();
a2.makeSound();

/*It is checkign if the Dog class is having the makeSound
method if it is not having then it is going to the parent class method.
*/