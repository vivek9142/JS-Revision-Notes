//10-memoization 
/*
In order to understand how dynamic programming works, 
we need to understand what caching means.
Caching is a way to store values so you can use them later on.
*/

// function addTo80(n){
//     console.log('takes long time')
//     return n+80;
// }
// addTo80(3);

//now adding caching

function addTo80(n){
    console.log('takes long time')
    return n+80;
}
let cache = {};
function memoizedAddTo80(n){
    if(n in cache){
        return cache[n]
    } else{ 
    console.log('takes long time');
    cache[n] = n+80;
    return cache[n]
    }
}
//first time doing the calc and adding it ot the cache
//next time taking ans from cache
console.log('1',memoizedAddTo80(5));
console.log('2',memoizedAddTo80(5));