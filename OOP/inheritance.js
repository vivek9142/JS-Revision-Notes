/*
a core aspect of object oriented programming is inheritance, which means
passing knowledge down.
*/

// class Elf{
//     constructor(name,weapon){
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack(){
//         return 'attack with ' + this.weapon;
//     }
// }

// const fiona = new Elf('Fiona','stones');

/*
But let's say that I wanted to have a new player and this player is actually an ogre called Shrek.
The one thing I could do is to copy and paste this code and create an ogre class.

I mean, that's copy and pasting dry code that eventually we want to avoid, because as we keep copying

and pasting, copying and pasting, we just have repeat a code which gets messy.
So one option that we might have here is, well, let's just copy the elf and maybe we can extend it.
So, for example, if I want to copy Fiona, let's say Fiona over here, if I click run, I have this
elf class.
Or else, for instance, with all these properties.
Now,in order to copy what you already have, we can just do something like this, we can say Const
Bougere and Bougere is going to equal.
Well, let's clone Fiona.
*/
const ogre = {...fiona};
ogre.__proto__ //{}
fiona.__proto__ //Elf ()
ogre === fiona //false
ogre.attack() //TypeError: ogre.attack is undefined
/*

Oh, and I don't need a clone here, it should just be Oger.
I get false, these objects are not referencing the same place in memory, there are completely different
things, but I've also lost this chain, this prototype whole inheritance chain.
I can't even do Oger dot attack.
No, I don't have a tech.
So that's a problem, how can we extend this this work that we've currently had and this is where inheritance
comes in and it used to be really difficult to do with JavaScript before we had this class syntax,
*/


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

// const fiona = new Elf('Fiona','ninja stars');

/*
This is something called subclassing, an object oriented programming, that is we have a base class
or a super class and a subclass that is we want to inherit from the character class all these properties
and methods and create something new out of it, extended with health.
*/

// fiona //Elf {name:'Fiona', weapon:'ninja starts'}

const dolby = new Elf('Dolby', 'cloth','house')

/*
We have this special keyword called Super for Super Class and the super class we call like this.
And by doing inside of the constructor, the super call, it says, hey, call the superclass, what's
the super class of Alpha?
Well, that's character.It extends character.
So it goes up and calls the constructor so that we create this name and this dot weapon.
So in here we have to pass it name and weapon.
*/
dolby.attack(); //attack with cloth

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
shrek //Ogre {name: 'Shrek', weapon: 'club', color: 'green'}
shrek.makeFort(); //'strongest fort in the world made'

/*
Now, let's go over this one more time, 

when we do class Elf extends character, it means, hey, extend and set the prototype.
That is the __Proto__ to point to character.

So Elf now has a prototype chain up to character.
It's saying, hey, any time you run an instance of Elf like Dolby and it uses a property or a method
that I don't have, well then look up to character and tell me if character has.

The constructor is our own constructor just for the ELF class.
This is something that only gets run with enough, not with a character and in here.
We can't leave it as is.

But if we want to set any sort of property that is used in this keyword, we have to call super and
say, hey, call the constructor of our super class.
And then after that, I'll know what to do with this keyword.
*/