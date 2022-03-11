//JS Job Queue
/*
But as of ES6, with the new updates in JavaScript, came another piece of the JavaScript runtime that
often doesn't get mentioned in all their resources.

with promises, we had this thing natively in JavaScript now, instead of just using callbacks,
we now had a native way to handle asynchronous code using promises.
So it wasn't really part of the Web API.

It's part of JavaScript
ECMAScript, the JavaScript committee, said, well, we need another two for our promises.
And to accommodate this edition, they said that, well, we need another queue called the job Queue.
Or as some other people might call it, the micro task queue.

And this queue is similar to the task you are the callback, you just a little smaller, but has a higher
priority than this queue.

Now we have a new edition of The job queue.
And this job queue is now just like the callback queue in our JavaScript runtime.
Implemented by the browser, but the event loop is going to check the job queue first, make sure that
that's empty before we start putting some of the callback queue functions onto the call stack.
*/

setTimeout(()=>{console.log('1','is the loneliest number')},0);
setTimeout(()=>{console.log('2','can be bad as one')},10);

//Job Queue/ Microtask Queue
Promise.resolve('hi').then(data => console.log('2',data));

console.log('3','is a crowd');

/*
3 is a crowd
2 hi

 1 is the loneliest number
 2 can be bad as one
*/