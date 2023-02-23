/*
When we have an asynchronous function.
And an error occurs inside of it, our script would have continued with our execution so that by the
time this returns with an error, well, this entire script would have been done.

And the way we handle these types of errors in JavaScript is using the catch method.
Now, in this video, I'm going to show you how to handle errors in promises and also an async await,
which will have an interesting way of handling errors.
*/
Promise.resolve('asyncfail')
    .then(resp => {
        console.log(resp)
        return resp
    }).then(resp => {
        console.log(resp);
    })

    // asyncfail
    // VM1632:6 asyncfail
    // Promise {<fulfilled>: undefined}

    Promise.resolve('asyncfail')
    .then(resp => {
        throw new Error('#1 fail')
        return resp
    }).then(resp => {
        console.log(resp);
    })

    //Promise will fail silently since it has no cathc blocks 

    Promise.resolve('asyncfail')
    .then(resp => {
        throw new Error('#1 fail')
        return resp
    }).then(resp => {
        console.log(resp);
    }).catch(err => console.log(err))

    // we'll catch the error and display it
//     Error: #1 fail
//     at <anonymous>:3:15
// Promise {<fulfilled>: undefined}


Promise.resolve('asyncfail')
    .then(resp => {
        throw new Error('#1 fail')
        return resp
    }).then(resp => {
        console.log(resp);
    }).catch(err => {
        return err
    })
    .then(resp => console.log(resp))

    //then will get the same error and it will log it out
//     Error: #1 fail
//     at <anonymous>:3:15
// Promise {<fulfilled>: undefined}



Promise.resolve('asyncfail')
    .then(resp => {
        throw new Error('#1 fail')
        return resp
    }).then(resp => {
        console.log(resp);
    }).catch(err => {
        return err
    })
    .then(resp => console.log(resp))
    .catch(err => console.log(err)); //this catch will not catch the error since the
    // error previously thrown was already handled by previous catch and for this catch to handle
    // the error it another code should throw error for this to handle it 


Promise.resolve('asyncfail')
    .then(resp => {
        Promise.resolve().then(() => {
            throw new Error('#3 fail')
        })
        return 5
    }).then(resp => {
        console.log(resp);
    }).catch(err => {
        return err
    })
    .then(resp => console.log(resp))
    .catch(err => console.log(err));

/*
5
VM2569:13 undefined
Promise {<fulfilled>: undefined}
VM2569:5 Uncaught (in promise) Error: #3 fail
    at <anonymous>:5:19

console log five works because this dot then block.
Has asynchronous code inside of it.

Well, it doesn't really care what happens, the promise when it first runs is a pending promise.
So it goes to the next line.
There's no error inside of this because it reads it's synchronously and it returns five, which gets
received here as DOT.

Then we console log the response.
And we have five.
The final error catch runs because we throw the error in frist catch, so if I removed this catch block.
And I click Run here.
All right, the error is still there because we throw in you error and our program keeps going up the
stack until we find something that catches us.
*/

Promise.resolve('asyncfail')
    .then(resp => {
        Promise.resolve().then(() => {
            throw new Error('#3 fail')
        })
        return 5
    }).then(resp => {
        console.log(resp);
    }).catch(err => {
        return err
    })
    .then(resp => console.log(resp.message)) // will share the catch error to final catch
    //whereas in previous one this will not share anything so it will show only undefined 
    .catch(err => console.log(err));

//     5
// VM2625:13 TypeError: Cannot read properties of undefined (reading 'message')
//     at <anonymous>:12:36
// Promise {<fulfilled>: undefined}


//good error handling code
Promise.resolve('asyncfail')
    .then(response => {
        console.log(response)
        throw new Error('#1 fail')
    })
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.error('error', err.message)
    })
    .then(response => {
        console.log('hi am I still needed?', response)
        return 'done'
    })
    .catch(err => {
        console.error(err)
        return 'failed'
    })