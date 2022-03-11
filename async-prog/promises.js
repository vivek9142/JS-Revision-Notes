/*
A promise is an object that may produce a single value sometime in the future, either a result value
or reason that it's not resolved or rejected.
A promise maybe in one of three possible states felt rejected or pending
*/

//callback function
el.addEventListener('click',submitform);

//callback hell or callback pyramid of doom
movePlayer(100,'Left',function(){
    movePlayer(400,'Left',function(){
        movePlayer(10,'Left',function(){
            movePlayer(330,'Left',function(){
            });
        });
    });
});

//create promise
const promise = new Promise((resolve,reject) =>{
    if(true)
    resolve('stuff worked');
    else 
    reject('error it broke');
});

//using promise
promise.then(res => console.log(res));
//if we run again this promise it was already resolvbed so it give out the output instantly

//in the success part itis getting error then it goes to the catch part
promise
    .then(res => res+'!')
    .then(res => {
        throw Error
        console.log(res)
    })
    .catch(()=> console.log('error'))

    //this will not give the error but will give res!? so catch should be placed at last so it would catch any error in the 
    //promises
    promise
    .then(res => res+'!')
    .then(res => res + '?')
    .catch(()=> console.log('error'))
    .then(res3 =>{
        throw Error
        console.log(res3)
    })
    
    const promise2 = new Promise((resolve,reject)=>{
        // resolve timeout in 100ms and return with Hii
        setTimeout(resolve, 100,'Hii');
    })

    const promise3 = new Promise((resolve,reject)=>{
        setTimeout(resolve, 1000,'Pookie');
    })

    const promise4 = new Promise((resolve,reject)=>{
        setTimeout(resolve, 3000,'Is it me youre looking for?');
    })

    //will give result with all result in array once all promises are resolved
    Promise.all([promise,promise2,promise3,promise4])
        .then(values => {
            console.log(values)
    });


    const urls = [
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/albums',
        'https://jsonplaceholder.typicode.com/users'
    ]

    Promise.all(urls.map(url => {
        return fetch(url).then(res => res.json())
    })).then(results => {
        console.log(results[0]);
        console.log(results[1]);
        console.log(results[2]);
    }).catch((err) => console.log(err))
