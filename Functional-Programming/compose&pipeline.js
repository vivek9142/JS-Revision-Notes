//12- compose and pipeline

//compose
/*Is the idea that any sort of data transformation
It's kind of like a conveyor belt, right in a factory.
We have data that gets processed by a function that outputs some sort of data and that data gets processed
by another function that outputs that data in a new form and so on and so forth.

Comparability is a system design principle that deals with this relationship of components, how we
can compose different components of a factory that works on, let's say, a conveyor belt and a highly

composable system provides components that can be selected and assembled in various combinations, just

like an assembly line.
It's easy to move pieces around to get the desired output based on the user's specific requirements.


data => fn --> data --> fn -->
*/

const compose  = (f,g) => (data) => f(g(data))

const multiplyBy3 = num => num*3;
const makePositive = num => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiplyBy3,makePositive);

multiplyBy3AndAbsolute(-50);

/*
compose ability is a system design principle that deals with the relationship between components.
These are the components.\
That can be selected and assembled in various combinations.
*/


//pipe - runs funcs from left to right while compose goes from right to left


const pipe  = (f,g) => (data) => g(f(data))

const multiplyBy3 = num => num*3;
const makePositive = num => Math.abs(num);
const multiplyBy3AndAbsolute = pipe(multiplyBy3,makePositive);

multiplyBy3AndAbsolute(-50);

/* fn1(fn2(fn3(50))) 
compose(fn1,fn2,fn3)(50)
in compose - goes from fn3 take input send the output to  fn2 take input from f2 andosends output to 
fn1 and fn1 gives the output

pipe(fn3,fn2,fn1)(50)
in pipe - it goes from left to right so f3 - fn1 n give the output.

both of these give the same output in thisa case since theire order of execution in funcs are same (f3-f2-f1)
*/






//13- arity

/*
This is our last term that you might hear a lot in functional programming, and
that is Arity 
It simply means the number of arguments a function takes.
if we look at compose func it has arity of 3
in multiplyBy3 has arity of 1

why am I teaching you this?

Because in functional programming, although this isn't a solid rule, it usually is a good practice
and a good idea that a fewer number of parameters there are in a function, the easier it is to use
that function.

Why is that?
Well, because you can do more interesting things and makes functions more flexible, we can use things
like hurry or we can use functions and something like compose and pipe and compose these functions together.
The more parameters a function has, the harder it is to really compose it with other function.
It doesn't mean it's impossible, but it does become a little bit more difficult.


However, as a personal preference, I like to stick to one or two parameters when it comes to functions
because if you're using a functional programming paradigm, it does help make your function more reusable.
*/