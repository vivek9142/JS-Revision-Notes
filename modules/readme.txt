As we've discussed, modules give us a better way to organize
these variables and functions so that
we can group these variables and functions 
that make sense together in terms of organizing things in
JavaScript.

we had the idea of

1 - GlobaL Scope
2 - Function Scope
3 - Block Scope

but now we also have module scope after global scope


This module pattern, well, with something called the module pattern, 
you see programmers and JavaScript land because we don't really 
have classes, got clever and we decided to use closure and 
encapsulation to create our own modular scope.

ex -

//Modular pattern
var fightModule = (function(){
    var harry = 'potter'
    var voldemort = 'He who must not be named'

    function fight(char1, char2) {
    var attack1 = Math.floor(Math.random() * char1.length);
    var attack2 = Math.floor(Math.random() * char2.length);
    console.log(attack1);
    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
    }

    return {
        fight
    }

// fight(harry, voldemort) 
})();

// here we exposing only the required fields and not the variables 
//which are private.

//cons 
// 1 - we are polluting the global namespace here also
// 2 - we need to know the dependencies here index html file
// we need to import the dependencies first in order to use them later on. 
vice versa is not possible since the compiler will
show err - item is not defined