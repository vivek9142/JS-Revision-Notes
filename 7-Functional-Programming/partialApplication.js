// 9-  Partial Application
// it is similar to currying but slightly different

/*it is a way ot partially apply a function with a smaller number of
parameters it means taking a function, applying some of its arguments into the function so it remembers
those parameters.
And then it uses closures to later on be called with all the rest of the arguments.
*/
// const multiply = (a,b,) => a*b;
// const curriedMultiply = a => b => a*b;
// const curriedMultiplyBy5 = curriedMultiply(5);

/*
We can say that the code below is, well, it uses partial application.
But what if we had A, B and C that we're using, that we want to multiply?
So we have three numbers now, three arguments?


Well, partial application says, hey, I want to apply, let's say, a portion of the parameters,
for example, a and then the next time I call that function, I want to apply the rest of the arguments.
*/


const multiply = (a,b,c) => a*b;
const curriedMultiply = a => b => c=>  a*b*c;
const curriedMultiplyBy5 = curriedMultiply(5);

curriedMultiplyBy5(3);
curriedMultiplyBy5(3);
curriedMultiplyBy5(3);


/*
Partial application says, no, no, no.
What I want you to do is I want you to call the function once and then apply the rest of the arguments.
To it, so that means on the second call, I expect all the arguments.
So how do we do that?
*/

//whereas partial application multiply is this - call one any params not all of them and 
//execute the rest of paramter wth a function
const partialMultiplyBy5 = multiply.bind(null,5);
partialMultiplyBy5(4,10); //200
//but curry expects one args at a time inside the function to call it