//ES-8  - async await is built on top of promise in ES8
//this makes code easier to read

movePlayer(100, 'Left')
    .then(()=> movePlayer(400,'Left'))
    .then(()=> movePlayer(10,'Right'))
    .then(()=> movePlayer(330,'Left'))

//The goal with async await is to make code look, Synchronous, 
//a code that's asynchronous look synchronous.

/*
I promise to return something to you in the future, something like an Ajax call, resizing an image,
getting some information from a database.

Async away code are just promises underneath the hood.
We call the syntactic sugar something that still does the same thing but is just different syntax to
make it look prettier.

*/

async function pLayerStart(){
    const firstMove = await movePlayer(100, 'Left'); //pause
    const secondMove = await movePlayer(400,'Left'); //pause
    const thirdMove = await movePlayer(10,'Right') //pause
    const lastMove = await movePlayer(330,'Left') //pause
}

//fetch always returns a promise so logging the result in console. using promise
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)

async function fetchUsers(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    console.log(data);
}



const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/users'
]

// Promise.all(urls.map(url => {
//     return fetch(url).then(res => res.json())
// })).then(results => {
//     console.log(results[0]);
//     console.log(results[1]);
//     console.log(results[2]);
// }).catch((err) => console.log(err))

const getData = async function(){
    try{
        const [posts,albums,users] = await Promise.all(urls.map(url => {
            return fetch(url).then(res => res.json())
        }))
        console.log('albums',albums);
        console.log('users',users);
        console.log('users',users);

    } catch(err){
        console.log(err)
    }
}

//ES9 -finally
/*
And as the name suggests, it allows us to do something finally after a promise has finished and the
way it works is we added usually at the end and this finally block will be called regardless of whether
it then works or the promise airs and catches into an error

So no matter what, after everything is done inside of a promise, finally it will be called whether
it resolves or rejects and does something that we tell it to.

finally doesn't receive a parameter
*/

const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => {
    return fetch(url).then(res => res.json())
})).then(array => {
    console.log('1',array[0]);
    console.log('2',array[1]);
    console.log('3',array[2]);
    console.log('4',array[3]);
}).catch((err) => console.log(err))
//finally doesn't receive a prameter
// .finally(data => console.log('extra',data));
.finally(()=>console.log('extra'));


//for-await-of -ES2018 new feature
/*
Now, the cool thing about this new feature is that it allows us to loop through our async, await calls
if we have multiple of them, just like we are able to using the four of so using the four of loop that
allowed us to iterate over intervals, we're now able to iterate over the await promises that we're
going to have.
*/

const getData2 = async function(){
    try{
        const arrayOfPromises = urls.map(url => fetch(url));
        for await(let request of arrayOfPromises){
            const data = await request.json();
            console.log(data);
        }

    } catch(err){
        console.log(err)
    }
}

/*
So in here, in the first line, all we're doing is creating an array of these fetch promises of each
one of these requests.
Next, we can use the for a weight of to loop through these promises, so all we would say is say for
a weight.And in here, we'll say let request.Of.

Array of promises, which is an iterable, is going to loop through each of these promises, each of
the requests.And we're going to extract that data from each of the requests by saying, await Request.json.
Because remember, we use the key word in front of a promise, and as we know, we're using the wait
keyword here because we're looping over our promises and we need to await request.json, which again,
is a promise that receives our data.
*/