function Subject()
{
    this.observers = []; // array of observer functions
}

Subject.prototype.subscribe = function(fn)
{
	// add a new observer function to our observer list
	this.observers.push(fn);
}

Subject.prototype.unsubscribe = function(fnToRemove)
{
    // filter out 'fnToRemove' from our observer list
    this.observers = this.observers.filter( fn => {
	if(fn != fnToRemove) { 
	  return true;
	}
    });
}

Subject.prototype.trigger = function()
{
    // for each observer function in our observer list...
    this.observers.forEach(fn => {
	// ...call the function
	fn()
    })
};

const subject = new Subject();

function Observer1()
{
	console.log("Observer 1 triggered");
}

function Observer2()
{
	console.log("Observer 2 triggered");
}

subject.subscribe(Observer1);

subject.trigger();  // Observer 1 triggered