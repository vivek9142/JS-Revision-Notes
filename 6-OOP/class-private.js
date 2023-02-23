/*
Attack I can still use and I can maybe by mistake reassign it to just false.
So that now if I call Shrek dot attack.
And I spelled correctly.

I get false.
I just went ahead and I've overridden everything.
That's not good, is it?

Well, other languages like Java actually have key words like private that make things private for us,
and they are methods that would only be able to be used inside of the class.
Now, you can actually solve this issue with something called week maps and JavaScript, but it's a
little hacky and well, we don't want to get into it because there's a proposal coming up.

And based on when you watch the video, this might already be implemented in JavaScript or it might
be a little bit different.

The ECMA script proposal is in stage three, so that is it's getting pretty close to being part of the
language and it's for class field declarations and there's a few changes that can happen in here.
For example, instead of having to call constructor on state that perhaps doesn't require parameters,
we can do something like age equals fifty four.

    #age=54

And this will be part of the state that we can use in other areas.
So in my attack I could say this dot h so we don't have to go through the constructor.
When we don't have parameters.

But the other thing is we can make things private if we add the pound sign like this, it says this
is a private variable.
And if I try and access age outside of this class, maybe as part of the instances here with Shrek or
Dobi, well, it's not going to lend me.
Now, for now, we're most likely the closest to doing something like this where we can have private
state, that is private data that can only be accessed inside of the class like this.
But private methods is something that we are still working towards.
*/

class Character{
    #age = 54;
    constructor(name,weapon){
        this.name = name;
        this.weapon = weapon;
    }
    private attack(){
        return 'attack with ' + this.#age;
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