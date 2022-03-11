/*
the definition of polymorphism is actually heavily debated, there's many interpretation of what
it means, but the idea is the ability to call the same method on different objects and each object
responding in different way.

That is polymorphism, for example, in myself and Oger class, let's say that they each have different
ways of attacking.

For example, the elf attacks with let's call this cry and it's going to return.
Attack with this dot cry.
And then let's say that the ogre has attack.
But the ogre doesn't really accept a parameter instead is just going to return.
Are like a part.

we can also do the method overloading add super.attack() in function attack
to call the parent class attack method and add some lines to base attack function 
*/

class Character{
    constructor(name,weapon){
        this.name = name;
        this.weapon = weapon;
    }
     attack(){
        return 'attack with ' + this.name;
    }
}

class Elf extends Character {
    constructor(name,weapon,type){
        super(name,weapon)
        this.type = type
    }
    attack(cry){
        return 'attack with'+cry;
    }
}



class Ogre extends Character {
    constructor(name,weapon,color){
        super(name,weapon);
        this.color = color;
    }
    attack(){
        //method overloading here for character class attack method
        super.attack();
        return 'arghhhhhh';
    }
    makeFort(){
        return 'strongest fort in the world made';
    }
}
const dolby = new Elf('Dolby', 'cloth','house')

dolby.attack('weee'); //attack with weee

const Shrek = new Ogre('Shrek','club','green')

Shrek.attack(); //arghhhhh

//after method overloading in Ogre class Shrek.attack() will give
/*
attack with Shrek
arghhhh
*/