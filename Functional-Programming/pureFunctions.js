/*
2- intro to functional programming

to really understand functional programming, we need to start
from the core concept and that is the pillar, the pure functions pillar.

We're going to start step by step with this idea of pure functions, and I'm going to introduce you
to different functional programming terms that sound a lot more complicated than they are.
And finally, after learning all these terms, we're going to implement our functional programming style
to our Amazon shopping cart.
So what are pure functions when it comes to pure functions?
There's two main things.

A function has to always return the same output, given the same input, and the function cannot modify
anything outside of itself.
No side effects.
*/

//no side effects
//function that given the same input returns the same output

// const array = [1,2,3]

/*
mutateArray func has side effects and side effects states does func modifies anything outside of itself,
so here it mutates and modifies the array.
these func are modifying the global data so that's the problem with side-effects, that is re-using 
shared global variable that can interact with anything and order of function calls matter
and this can cause lot of bugs
*/
// function mutateArray(arr){
//     arr.pop();
// }

// function mutateArray2(arr){
//     arr.forEach(el => {arr.push(1)})
// }

// mutateArray(array)
// mutateArray2(array)

// console.log(array);


//How can we make this code not have any side effects, not change whatever the array is?
const array = [1,2,3]

//by this here we're creating duplicate array and returning new arr so no side effects here
function removeLastItem(arr){
    const newArray = [].concat(arr);
    newArray.pop()
    return newArray;
}
//arr.map returns a new array so no side effects here
function multiplyBy2(arr){
    return arr.map(item => item*2)
}
//no side effects so orig array intact
const arr2 = removeLastItem(array);
const arr3 = multiplyBy2(array);
console.log(array,arr2,arr3); 
//(3) [1, 2, 3] (2) [1, 2] (3) [2, 4, 6]

//it is not pure function since it has side effects
//consle.log is window specfic. we're using browser to log some into the browser so it is not pure function
//it is affecting the outside world right and logging output to the browser
function a(){
    console.log('hi');
}


//input --> output 2nd step func returns the same output given the same input


// Referential transparency 
// it states that if the function call is replaced by its output will it affect the program
//ex-
function a(num1,num2){
    return num1+num2
}

function b(num){
    return num*2
}
b(a(3,4))
// b(a(3,4)) === b(7) this is referntial transparency if i change the 3+4 func to 7 then give it to func
//then its value not changes

//these function also have no side effects they are not changing any of the outside world only touching their own 
//parameters and parameter are local variables in funcs

/*
The idea with pure functions is that it makes functions very easy to test, very easy to compose, and
it avoids a lot of bugs because we have no mutations, no shared state.
We have these predictable functions that minimize the bugs in our code
*/