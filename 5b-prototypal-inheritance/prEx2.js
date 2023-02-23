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
  // Don't do this, bad performance. Show with bind.
  lizard.__proto__ = dragon;

// this will loop over all properties of lizard and its inherited properties  
//   for(let prop in lizard){
//       console.log(prop);
//   }

//this will check for lizard own props not inherited ones through func
// and then print them 
  for(let prop in lizard){
    if(lizard.hasOwnProperty(prop)){
        console.log(prop);
    }
}

/*Because Lizard only has name and fight, the other properties are inherited from up the prototype chain.

So we're not actually copying these properties from the Dragon, as I said before, if the JavaScript
engine doesn't find the property on that object, it goes up the prototype chain.

For example, the has owned property is not part of Lizzard, so it goes up the prototype chain to Dragon
and then up to the base object and finds his own property and we're able to use it.

And the beauty is that JavaScript looks for you through the prototype chain automatically.
we dont have to use __proto_.__proto__ to find this , js findsit automatically
*/


/*
Well, this __proto__ , although we can use it here, you shouldn't really use it.
Actually, you should never use it.

It's bad for performance and there's different ways that we want to inherit when it comes to prototype
inheritance, something that we're really going to dive deep into when we talk about object oriented programming.

So we never want to manually assign the prototype chain and create that chain ourselves.
It's going to, well, mess up our JavaScript compiler pretty badly.
*/



/*
And by the way, whenever we get undefined on something, let's say in here I go, 

    lizard.aha()

And I run this, I get a type error.

Or if I go as a prop.

    lizard.aha

, I get undefined.

Whenever the JavaScript engine doesn't find anything up the prototype chain, we get these errors or
undefined because it goes all the way up to the base object.
And then what happens after we get to the base object?

    const obj = {}
    obj.__proto__ //base object
    obj.__proto__.__proto__ //null

We don't have something defined nor meant there's absolutely nothing there because of its prototypal
inheritance nature.
There's nothing there.
There's not some would call this a null pointer pointing to no, it's the end of the chain.
Sorry, I got nothing for you there.
Throw an error, throw on to find say something's wrong.
*/