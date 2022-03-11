/*
Only functions have the prototype property.

Remember this, how __proto__ points to the prototype object.

Well, the thing that contains this prototype object is always a function.
*/

function multiplyBy5(num){
    return num*5
}

multiplyBy5.prototype


/*
And I'll do multiplied by five Dot Prototyp.

And look at that, I have a prototype now, this prototype itself is pretty empty.

When we create a function like this, this prototype we don't really use, it just gets created, but

we never really make use of it because prototypes, although they are a property on all functions,

the only time we really use prototypes is using what we call constructor functions, constructor functions.

They usually start with a capital letter and they contain the actual blueprint or prototype that we

use.

So, for example, if I do multiply by five dot underscore, underscore Proteau, which links to that

prototype, we already know that function dot prototype is going to equal exactly that.

If I do multiply by five and then up the chain again, which will be the object.

Constructor, Well, if I do object dot prototype, I get the same thing, but now you're asking yourself,

whoa, whoa, whoa, you just told me that prototype property's only exist on functions.

And this is where it gets a little bit tricky because this object is something we've talked about before.

It's the base object because if I do multiply by five prototype prototype and then one more time Proteau

will get no because we're past the space object.

But if I do type of object here, I get function.

What I know, I know super confusing type of object is a function because, well, it has the prototype

prop..

Remember when I talked about standard built in objects in JavaScript and we have all these things like

fundamental objects, like object function Bolian, we have no end dates, like no math, date string,

all with capital letters.

Well, if I click on object here, we see that this object.

Is the object constructor that creates the object wrapper.

Remember, in order for us to perform an action in a program, we have to have a function, right?

That's what a program does.

It stores data and we use functions to manipulate that data.

So when we do something like.

Const.

Object equals object underneath the hood, JavaScript has to create that object, and in order to create

that object, well, it uses this object constructor*/


/*
Everything in JavaScript is an object, and arrays and functions in JavaScript are objects they inherit

through the prototype chain from the base object.

You can go up the prototype chain looking for properties on this prototype property.

This prototype property also has the Proteau property inside of it that links higher up to the next

prototype chain.

Proteau always points to Prototyp, and we also remembered that only functions have the prototype property.*/