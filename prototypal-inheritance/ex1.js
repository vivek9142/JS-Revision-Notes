/*
//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

new Date('1900-10-10').lastYear()
//'1899'


//#Bonus
// Mofify .map() to print '🗺' at the end of each item.
console.log([1,2,3].map())
//1🗺, 2🗺, 3🗺

*/

//soln - 

//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.
Date.prototype.lastYear = function(){
    return this.getFullYear()  - 1;
}
new Date('1900-10-10').lastYear()
//'1899'


//#Bonus
// Mofify .map() to print '🗺' at the end of each item.
Array.prototype.map = function(){
    let arr = [];
    for(let i=0;i<this.length;i++){
        arr.push((this[i]+'🗺'))
    }
}
console.log([1,2,3].map())
//1🗺, 2🗺, 3🗺

//create your own bind method using call,apply
// Function.prototype.bind = function(){

// }

Function.prototype.bind = function(whoIsCallingMe){
    const self = this;
    return function(){
      return self.apply(whoIsCallingMe, arguments);
    };
  }