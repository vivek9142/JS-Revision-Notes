/*
calling it again, we can just do and immediately invoked function.
So I can just wrap it in brackets.
So it's an expression and then immediately invoke it if I run this.

Look at that, I get oopsy as an air which gets caught and, well, is this still good?
Gets run because it's after the try catch block.
*/

(async function(){
    try{
        await Promise.reject('oopsie')
    } catch(err){
        console.log(err);
    }
    console.log('is this still good?')
})()



(async function(){
    try{
        await Promise.reject('oopsie #1')
        await Promise.reject('oopsie #2')
    } catch(err){
        console.log(err);
    }
    console.log('is this still good?')
})()

// oopsie #1
// VM2873:8 is this still good?
// Promise {<fulfilled>: undefined}

(async function(){
    try{
        await Promise.resolve('oopsie #1')
        await Promise.reject('oopsie #2')
    } catch(err){
        console.log(err);
    }
    console.log('is this still good?')
})()

// oopsie #2
// VM2913:8 is this still good?
// Promise {<fulfilled>: undefined}