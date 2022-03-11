//11-memoization 2
/*
ideally we dont want to fill the cache in global scope .
that is  out of this function.
in javascript we can use closures
*/

// function addTo80(n){
//     console.log('takes long time')
//     return n+80;
// }
// let cache = {};
// function memoizedAddTo80(n){
//     if(n in cache){
//         return cache[n]
//     } else{ 
//     console.log('takes long time');
//     cache[n] = n+80;
//     return cache[n]
//     }
// }
// console.log('1',memoizedAddTo80(5));
// console.log('2',memoizedAddTo80(5));


function memoizedAddTo80(){
    let cache = {};
    return function(n){
        if(n in cache){
            return cache[n]
        } else{ 
        console.log('takes long time');
        cache[n] = n+80;
        return cache[n]
        }
    }  
}
const memoized = memoizedAddTo80();
console.log('1',memoized(5));
console.log('2',memoized(6));