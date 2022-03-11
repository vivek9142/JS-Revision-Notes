//8 -Currying 
const multiply = (a,b) => a*b;

multiply(5,3);
/*
How can we use currying here?
Well, remember, we want to change the function from taking multiple parameters 
to taking a parameter at a time.
*/

const curriedMultiply = a => b => a*b;

curriedMultiply(5)(3);

/*
But why is this useful?
I can now create multiple utility functions out of this, for example, I can say const covid multiply
by five.

Which is going to equal this could multiply with the parameter of five so that now I've called this
function once and this function for the rest of its time, or at least this function is going to remember
this piece of data five, four well, forever until we finish running the program so that let's say
10 years from now, we finally remember, oh, we have this crude multiplied by five function.

I can use the multiply by five function.and multiply anything that we want by five, let's say four.
So if it's a function that gets called many, many times, we only run this part of the function once,
*/