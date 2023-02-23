//7- Higher Order Functions and Closures +

//HOF - func that returns a func or takes func as a parameter
const hof = () => () => 5;
let ho = fn => fn(5);
ho(function a(x){return x;})

//Closure
/*
we create a closure whenever a function accesses a variable defined outside of the
immediate function scope, that is the scope of the parent.
And it's fairly easy to create a closure right.

We simply define a function inside another function and expose the inner function either by returning
it or passing it to another function so that we can use that variable.
*/
// const closure = function(){
//     let count = 0;
//     return function increment(){
//         count++;
//         return count;
//     }
// }

// const incrementFn = closure();
// incrementFn();

/*
And when it comes to functional programming, it doesn't mean we can't use closure's we can definitely
still use closures and they're very powerful, but we have to be careful that closure's only make a
function impure.

If we modified the closed over variable, if instead our increment.
Is just a get counter, for example, that returns the counter and let'
*/

const closure = function(){
    let count = 55;
    return function increment(){
        return count;
    }
}

const getCounter = closure();
getCounter();

/*
We're using closure's here, and although we're not modifying the state like we had before, we still
have access to data outside of ourselves.
But as long as we don't modify it and mutate the data, we're still following the functional programming
paradigm.

Something that is nice with this is that we just created private variables, we're able to use closure's
to create data privacy, which is very, very cool, because now as a user, I can't really modify the
count.

We just have to be careful not to modify the state.
*/