class Character{
    constructor(name,weapon){
        this.name = name;
        this.weapon = weapon;
    }
    attack(){
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Character {
    constructor(name,weapon,type){
        super(name,weapon)
        this.type = type
    }
}

const dolby = new Elf('Dolby', 'cloth','house')

dolby.attack();

class Ogre extends Character {
    constructor(name,weapon,color){
        super(name,weapon);
        this.color = color;
    }
    makeFort(){
        return 'strongest fort in the world made';
    }
}

const Shrek = new Ogre('Shrek','club','green')
shrek 
shrek.makeFort(); 

/*underneath the hood we just created the prototyype
js created Ogre.prototype.makeFort

Now the cool part about this beyond the fact that it just looks a lot cleaner, things just make sense,
and we're using some really important object oriented principles like classes and extending and creating
subclassing and using the new keyword to create instances.
We're also using underneath the hood the prototype inheritance of JavaScript to make these inheritance
prototype chains between our objects.
*/

console.log(Ogre.isPrototypeOf(Shrek)) //false
console.log(Ogre.prototype.isPrototypeOf(Shrek)) //true
console.log(Character.prototype.isPrototypeOf(Ogre));//false
console.log(Character.prototype.isPrototypeOf(Ogre.prototype));//true

console.log(dolby instanceof Elf) //true
console.log(dolby instanceof Character) //true

/*
So remember, that distinction instance is when we use the new keyword from a class, we create an instance
of a class instance is essentially creating a version of the class inheritance, which is what we do
with the key word.

Extents is inheriting something from a higher class inheritance.
And JavaScript doesn't actually copy our functionality.
It doesn't just simply copy whatever we have in character.

Instead, it simply links up the prototype chain.
So you're not creating copies and making things inefficient.
Instead, whenever it doesn't find something, let's say, on the Oger class, it's going to look up
to.

The ogre's superclass, which is character, so it's creating these efficient linking in JavaScript,
using prototype inheritance.
And I want to remind you, unlike other Class-Based languages, JavaScript is, well, just objects.
It's objects inheriting from objects.
That's it.

There are no technical classes.
*/