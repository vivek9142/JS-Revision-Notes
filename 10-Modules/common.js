// commonJS and AMD (Asynchronous Module Definition)
/*
Instead of using an iffy and the model pattern.
Something called Common James and HMD came out or asynchronous module definition, and they solved the
problem of designing a module in a way that we won't have the interference of global scope where we
can overwrite certain variables.*/

// Common JS - we dont need to use extension in files when importing and we can import specific
//functions as well
var module1  = require('module1')// .fight ; 
var module1  = require('module1').fight ; 
var module2  = require('module2')// .impoertedFunc2

function fight(){

}

module.exports = {
    fight : fight
}


// AMD
/*
Amd was designed specifically for the browser's.
That means it loads scripts or modules asynchronously.
And that's crucial for browsers, right.
Where the code can't really wait until a module has finished loading.
And yes, we solve that problem with common and browser wi fi or --, but because JavaScript didn't
have native module's people came up with different solutions.
So people that didn't like common jobs or wanted to implement their own used AMD, that's the problem
when you don't have a standard solution for a language.

Now, you may not have heard of AMD, but you may have heard of the library that helped us use AMD on
the browsers.
It was called Require.js and although it's not used that much anymore, it was the main way
that people used AMD modules.
Now you're thinking to yourself required is AMD, but it's not common that uses the word require.
Yes, that is true.Extremely confusing.
*/
define(['module1','module2'],
    function(module1Import , module2Import){
        var module1 = module1Import //.fight;
        var module2 = module2Import // .importedFunc2;
        
        function dance(){

        }

        return {dance:dance}
    
    });


/*
And there was another thing that came out called UMG for universal module definition that tried to solve
this problem.
But at the end of the day, ummed was just a simple if statement to identify the module system or the
module style that the current environment supports.

So this was great and all, but it wasn't really solving our core problem.
We needed a way for JavaScript to unite as a community and say, hey, this is how we import and export
modules, because if we want people to take us seriously, we need our own native module system.
So here we are in this current day and age.

We now have native module support in JavaScript.
*/