let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
      return 5
    },
    sing() {
      if (this.fire) {
        return `I am ${this.name}, the breather of fire`
      }
    }
  }
  
  let lizard = {
    name: 'Kiki',
    fight() {
      return 1
    }
  }
  
  const lizardFire =dragon.sing.bind(lizard)
  console.log(lizardFire())


/*we have initially bind the sing func of dragon in lizard and userd it
but now we have added new if cond if fire value is present and true then
only return string else not 

So what can we do here?

I mean, we could manually just add the property, but you can see how am 
I get more and more complicated here, right.

What if we had a big object and we want to borrow more than just one method.
We want to perhaps inherit a bunch of these properties for the lizard as 
well to make it all powerful.

And this is where prototype inheritance comes in.
*/

// Don't do this, bad performance. Show with bind.
lizard.__proto__ = dragon;

console.log(lizard.fire)//true
console.log(lizard.sing())//`I am Kiki, the breather of fire`

/*
So what we were able to do here is we are able to inherit through this prototype chain 
all the properties and methods of the dragon.

And override anything that we've already declared in our own object, 
so that is name and fight.

But as soon as we say something like sing well, the JavaScript engine is going to say, all right,
And then it's going to look through the properties and say, Hmm, I don't see sing here.

I'm going to go up the prototype chain because we've created that prototype chain up to Dragon and see,
Hey Dragon, do you have sing? And if Dragon has sing, then it's going to run it using.This code.

Now, what happens if we call something other than sing, maybe dance, and if I run?

I get no lizzard dance is not a function because we go up the prototype chain does 
drag and have dance.*/

dragon.isPrototypeOf(lizard);
/*the prototype chain of Dragon.
here is the original base object so that hypothetically I can use whatever
methods this base object has, if you remember our base object.

  const obj = {}

So if I go const object or a const dragon equals four now an empty object and I do .

  obj.__proto__

I get this base object and I have a few properties here, so if I do, let's say is a prototype of which
looks like comes with the base object, I should be able to use this right.

If I do 

  obj.isPrototypeOf(Object)

And in here I say, hey, another object whose prototype chain is to be checked.

So is Dragon a prototype of, let's say, lizard.

I run this.

Yepp, Dragon is a prototype of Lizzard.*/