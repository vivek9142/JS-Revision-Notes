// OOP3 -CONSTRUCTOR FUNCTIONS

/*
If I do Sam Dott name and I run this, I get a type error.
Can I read property name of undefined.

And that's because constructor functions. Are built like this,
and in order to use a constructor function, 
you need to use the new keyword in JavaScript.

So in here we would add new. And by adding new let's see what
happens.Look at that, that magically worked.

Why is that?

That is because the new keyword in JavaScript, 
which, by the way, a lot of people don't like, but
it's just the way things work.

So we're going to have to get used to it.

The new keyword automatically returns the object for us that we have here, 
and it creates the ELF constructor.

And any function that is invoked using the new keyword is called a constructor function


So as a rule, even though you don't need to you won't get a syntax error, as a rule, all constructor
functions should start with a capital letter to let other programmers know that you need to call this
function using the new keyword.
*/

function Elf(name,weapon){
    this.name = name;
    this.weapon = weapon;
}

const peter = new Elf('Peter','stones');
// peter.attack()
const sam = new Elf('Sam','fire');
// sam.attack();
sam.name;

/*
Let's show you how to create an elf using the constructor function that 
comes natively in JavaScript.That is the function constructor.

And this function constructor will have parameters of name and weapon, and then the last parameter
is what the function is actually going to be doing.

A function, constructor or constructor functions are simply that they 
allow us to use the new keyword.And create these objects for us.
*/

const Elf1 = new Function('name','weapon',
`this.name = name;
this.weapon = weapon;`)

const sarah = new Elf1('Sarah','fireworks')
sarah

/*
The interesting thing, though, is that when we use the new keyword.
Instead of this pointing to the window object like it usually does, the new keyword changes what this
is pointing to when a new execution context is created.

Instead, the new keyword will say, hey, I want you to point this to the object that we just created.
So that this now becomes Peter or Sam.And this is what happens if we remove new,
if we remove new and I click run, I cannot read property name of undefined.

And that's because without the new keyword, we are not creating this object, 
we are not returning an object and we're also not assigning this to the object that calls us.

So this new keyword does a ton for us behind the scenes in order for it to work.
So it's very important that we use the new keyword, which is why we want to use the capital letters
to indicate to other programmers, hey, we need to use the new keyword, otherwise it's not going to
work.

And why this is so powerful is that because this is a function, remember, every function in JavaScript
gets automatically a prototype property.

You remember the ones with capital letters that we can invoke with new well, this prototype
finally becomes useful.
*/


function Elf(name,weapon){
    this.name = name;
    this.weapon = weapon;
}
Elf.prototype.attack = function(){
    return 'attack with ' + this.weapon;
}

const peter = new Elf('Peter','stones');
// peter.attack()
const sam = new Elf('Sam','fire');
sam.attack();

/*
native constructor functions like the function comes with things like call, apply and bind arrays
come with things like map, reduce foreach because they're built out of the array constructor function.

In our case, we can add our own to the prototype.
So that now we can do Elf Dot Prototyp.
Which we have access to and say attack, so we're adding the attack method on the prototype, and if

I do function return attack with.
*/


/*
So to review.

We're able to use constructor functions instead of something like object to create to create this magical
function that creates a new object, returns a new object, and also modifies what this means to whatever
object calls us.

So instead of the global object, this is now going to point to the calling object, Peter and Sam,
but because this is a constructor function, we also have this prototype property that we can attach
things to so that when Peter attack gets called.

Well, Peter doesn't have.
Attack as its own method, but it's going to go up the prototype chain.
Remember, Dot Dot Proteau is going to point to prototype.

And this prototype is going to have the attack and now both Peter and Sam are able to use attack from
the same location in memory instead of us copying attack multiple places and multiple location in memory.

We just have it written once in memory.
And both of these elves are going to point to attack, which is in the same memory space.
*/