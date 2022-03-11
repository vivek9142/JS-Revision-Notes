/*
let's say you have a function called A and it's an empty function 
    function a(){}

if I do, a DOT has owned property.
    a.hasOwnProperty('bind') //false
And I say, well, remember what I said, all functions have call, apply and bind, right?

If I do, let's say.Call.
    a.hasOwnProperty('call') //false
I get false.

What if I do bind no false for that or about, let's say, apply?
    a.hasOwnProperty('apply') //false
No, not for that.

What about name?
Remember how he said name is an optional field for a function?
a.hasOwnProperty('name') //true


The name of the function is a itself but our call and apply.Are not as part of the property.
You see this diagram that I showed you initially where a function is a special type of object, it's
a callable object where we have code that can be invoked, we have an optional name field, as we just
saw, and we also have properties that we can add to the function because, well, it's an object.

And then I told you that we have call apply and bind as properties.
Technically, this wasn't 100 percent correct, because these properties aren't exactly on the multiplied
by five func.

Function instead, what do you think it is?
Well, it's up here, it's up the prototype chain and don't worry, I'll explain this diagram a little
bit better.
*/

function multiplyBy5(num){
    return num*5
}

/*
So I'm going to create a function, multiply by five that takes a number.
And this number will well return num times five.
So multiply by five if I go up the prototype chain.
We'll have our function, our base function that all functions get created from, remember, we've created
a function from this base function over here.And now this base function.

I can capture it by right clicking and saying store as global variable as temp one, if I do temp one
dot properties, I see all these properties that comes with this function.

I have apply bind call.I have lenth, I have name because remember the name is well it's an empty name, 
it's the base function with no name, but I have all these properties and methods on it and up the 
prototype chain you can see object over here.*/


/*
Multiplied by five, which is a callable object that has code that is invaluable, it has a name that's
optional, it can have some properties.

It also has this __proto__ as well as a prototype property, and that __proto__ links up to this function.
Which once again, is a callable object, a special type of object that has its own code, it has properties,

but it also has this property called Prototyp that the __proto__ links to.
And that's where call apply and bind live.

And as a matter of fact, __proto__ actually lives inside
of this object.
    multiplyBy5.__proto__

we'll do multiply by five __proto__ which is a pointer, it points to the function dot prototype.
So I get this native function.

So the native function is function.prototype.

    multiplyBy5.prototype

This is the same because multiplied by five .__proto__ points to the prototype function.prototype (base function).

__proto__ is simply a reference or a pointer to up the chain prototype object,
*/

const array = []
array.hasOwnProperty('map') //false
array.__proto__.hasOwnProperty('map') //true
Array.prototype //all func related to Array 
array.__proto__ // all func rel to the array
/*
And if I do array.__proto__.

We get the base array, so array.__proto__ is pointing to the father Array.prototype prototype*/