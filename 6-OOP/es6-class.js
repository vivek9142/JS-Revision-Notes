
// function Elf(name,weapon){
//     this.name = name;
//     this.weapon = weapon;
// }
// Elf.prototype.attack = function(){
//     return 'attack with ' + this.weapon;
// }

// const peter = new Elf('Peter','stones');
// // peter.attack()
// const sam = new Elf('Sam','fire');
// sam.attack();

class Elf{
    constructor(name,weapon){
        this.name = name;
        this.weapon = weapon;
    }
    attack(){
        return 'attack with ' + this.weapon;
    }
}

const peter = new Elf('Peter','stones');
console.log(peter instanceof Elf); //true
console.log(peter.attack())
const sam = new Elf('Sam','fire');
sam.attack();

/*
We finally have object oriented programming in JavaScript, right?
Well, not really.
You see, this is what we call syntactic sugar.
Underneath the hood in JavaScript, we're still using prototype inheritance, we're not using classes
like classes work in other languages.
This is the closest that JavaScript is going to get to classes underneath the hood.They're still using the new keyword with the prototype.
And you're thinking to yourself, well, why don't we just all this trouble, why didn't we just create
classes from the beginning and JavaScript?

Wouldn't it just make everything easier?

Now, as we'll find out?

Classes aren't necessarily the answer to everything, as we'll see when we get to functional programming.
But also there's an interesting story or quote behind why JavaScript doesn't have classes.
This is a quote from the creator, Brendan Eich of JavaScript.
If I had done classes in JavaScript back in 1995, I would have been told that it was too much like
Java or that JavaScript was competing with Java and I was under the marketing orders to make it look
like Java, but not make it too big for its britches.

So the interesting thing was that Brendan Eich was tasked with creating a language that would attract
Java developers that were really used to classes and object oriented programming concepts.
But at the same time, they wanted to create a competing language and for marketing purposes they could
make it the exact same.

So he had to be creative.
So he used prototype whole inheritance, which is quite different from how classes work and languages
like Java and C++.
*/