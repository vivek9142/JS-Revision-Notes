// const array = [1,2,3,4];
// for(var i=0; i < array.length; i++) {
//   setTimeout(function(){
//     console.log('I am at index ' + i)
//   }, 3000)
// }
//prob is we're getting console at index 4 4times but we want to 
//get the soln as index 1,2,3,4 as in array

//soln1 -  simplest soln is we replace var with let since
//it will do the block scoping 
//and each i value is being block scoped with each its consecutive values in its block
//in var it will do  global scope and hoist it to the top 
//and once the timeout is done the i loop is already executed
// const array = [1,2,3,4];
// for(let i=0; i < array.length; i++) {
//   setTimeout(function(){
//     console.log('I am at index ' + array[i])
//   }, 3000)
// }

//soln2- create IIFE and pass the i value to the function 
//and use it accordingly

const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
  (function(closureI){
      setTimeout(function(){
    console.log('I am at index ' + array[closureI])
  }, 3000)
})(i)
}


