// Make it so that the initialize function can only be called once!
let view;
function initialize() {
      view = '🏔';
      console.log('view has been set!')
}

initialize();
initialize();
initialize();

console.log(view)



//soln - 

// Make it so that the initialize function can only be called once!
let view;
function initialize() {
    let called = 0;
    return function(){
        if(called>0) return;
        else {
            view = '🏔';
            called++;
            console.log('view has been set!')
        }
    }
}

const startOnce = initialize();
startOnce();
startOnce();
startOnce();

console.log(view)

//by this approach the viiew will not run more than one time