/*
we can create our own prototypes, because I told you that __proto__ is something that
we shouldn't use, we should never do, __proto__ equals some type of an object because we should never
use this for performance reasons in our JavaScript code.

So what is a safe way to do this?

Well, let's create a human and this human will have a property that is, well, mortal.
A human is mortal should be true.And let's say out of that human we create let's say Socrates 
and Socrates should also be a human.It should inherit from this human.

And we can do that with object.create.
*/
let human = {
    mortal:true
}
let socrates = Object.create(human)
console.log(socrates);
/*
this is one of the ways that we can inherit from human.

So that I created object to create human, and that's going to equal Socrates so that if I do console.log
Socrates and I run.

Well, I get an empty object.

Let's add a property on Socrates, let's say Socrates has, let's say, age of forty five.
*/
socrates.age = 45
/*
I don't know how old Socrates was, but let's just say forty five.
Socrates is mortal.Because we've created using object to create a prototype chain up to human.

So if I do.Human dot is the prototype of Socrates we all get true human is prototype of Socrates we've inherited

from human.
*/
console.log(human.isPrototypeOf(socrates)); //true

/*
__proto__,they named it this way so that nobody accidentally messes with the prototype chain
*/