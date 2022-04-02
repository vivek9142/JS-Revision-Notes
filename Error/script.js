/* As you may know, in JavaScript, we have a native error constructor function, 
if I go error like this and my console, well, that's a function that we have a constructor function.
*/
new Error('gg')

/*
As you see over here, I get something printed out, but it's not really an er.
What we need to do instead is to throw an ER when we start throwing darts, that's when things get interesting.

In JavaScript we have the throw keyword and when we throw something, well your script that we're currently
running stops executing.
Or at least stops executing it, unless you're handling this through somehow, which will go over,
so when we do something like throw new error.
*/

throw new Error('uncaught error found')

/* We have
1 - Syntax Error
2 - Referential Error
3 - 
*/


function a(){
    const err = new Error('Error');
    return err
}
a() - //will return error in normal text not in console.err red state
a().stack // will give the error with stack trace in red color

/*
Well, in JavaScript, this is pretty much the system for errors.
This is our call stack, and as soon as an error happens on the call stack, we go to the execution
context underneath us and say, hey, is there a catch for us?

Is there something handling this?
No.

OK, then I'm going to keep going.Is there a catch?
Is this error handled anywhere in this part of the execution context?
No.

And if all the way through the call stack, there's nothing handling it, well, we're going to get
this on error function that runs inside of the browser.
That gives us that red text that we see in logs instead of the on air.
We have the process on uncaught exception.
*/

