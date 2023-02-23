Well, inheritance is an object getting access to the properties and methods of another object.
So what I'm saying here is that the array object, again, remember, everything is an object and the
array object gets access to the properties and methods of the object.

In JavaScript, and same with functions through this chain that we call prototype inheritance functions,
get access to the methods and properties of objects.

Now, let's demonstrate this in code.
There's a special way that we can actually see this chain, this prototype whole inheritance and JavaScript,

if I create an array here, let's say array, just an empty array,

    const array = []

and in another line use this - 

    array.__proto__

I get this thing, it looks like an array and if I open it up.I have all 
this reduce push pop map methods that arrays get.

What happened here.

In this new array was created from, yes, this big array box over here, what we call a constructor,
this array created our array variable that contained, well, an empty array.

And I did __proto__ to go up the prototype chain and get into this array.

So by that theory, if I go up the prototype chain, I should get an object.
Right.

If I go back and do array that __proto__ and then go up the prototype type chain again.

    array.__proto__.__proto__

I get the object or what we call the base object, this is the object that everything in JavaScript
gets created from, including functions and including arrays, and we see that we have some properties
on here.

For example, we had the two string method over here, which means that anything that is a descendant
of an object will get the two string method.

So that means that an array.

Such as our array over here has the two string method on it.
Look at that because of this prototype chain, remember what I said initially, an object gets access
to the properties and methods of another object through the prototype chain.

Let's further this example.

This time around, let's create a function function A and this function as well is just empty.

    function a(){

    }

Once again, if I go up the prototype chain.

    a.__proto__

What do you think we'll get?

I get this F over here, a native function, and this is our base function where all functions are created
from so that if I go up the prototype chain again.
What do you think will get?

    a.__proto__.__proto__

Yes, we go back to that object, that base object that all objects come from.


All right, one last example, let's say I create an object.

Object one, and this is going to be an empty object, but let's refresh to make sure that we haven't
declared it before.

    const obj1 = {}

Now, if I do object.__proto__, what do you think will happen?

        obj1.__proto__

Well, we get the base object again.

This base object is this one over here, right, I created from this object my own object variable and
that inherits has a prototype chain up to this base object.

And this is what prototypal inheritance is.


Other Lang like C,C sharp,Java,etc uses something called classical inheritance.
JavaScript uses Prototyp inheritance.

Now, even though in JavaScript we do have the class keyword and it's something that we're going to
talk about in the object oriented programming section of the course in JavaScript.
This is what we call syntactic sugar.

There's actually no classes in JavaScript.

We only have prototype inheritance.