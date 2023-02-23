// There are two ways that we can go about it.

// 1 - One is the catch block or the try catch block, which we'll talk about, 
//and also the catch method. TRY Catch works with synchronous errors 

function fail(){
    try{
        console.lg('this works')
    }catch(err){
        console.log('we have an error',err)
    }
}

fail()  
// we have an error TypeError: console.lg is not a function
//     at fail (<anonymous>:3:17)
//     at <anonymous>:1:1





function fail(){
    try{
        console.log('this works')
        throw new Error('Opsie')
    }catch(err){
        console.log('we have an error',err)
    }
}

fail() 
// this works 
// we have an error Error: Opsie
// at fail (<anonymous>:4:15)
// at <anonymous>:1:1


function fail(){
    try{
        console.log('this works')
        throw new Error('Opsie') // will end the execution and throw the error to catch block
    }catch(err){
        console.log('we have an error',err.stack) //stack will give the whole stack else 
        // error.message will give out the error message only
    }
}

fail() 
// this works 
// we have an error Error: Opsie
// at fail (<anonymous>:4:15)
// at <anonymous>:1:1

//Finally 
//And the finally block says, hey, no matter what happens in the tri cash block, finally at the end
//of it all, do something for me so I can say console log.

function fail(){
    try{
        console.log('this works')
        throw new Error('Opsie') 
    }catch(err){
        console.log('we have an error',err.stack)
    }
    finally{
        console.log('still good')
    }
    console.log('111'); //this will not run at all
}

fail() 

// this works
// VM1172:6 we have an error Error: Opsie
//     at fail (<anonymous>:4:15)
//     at <anonymous>:13:1
// VM1172:9 still good


// we can nest the try catch block
try{
    try{
        something()
    }catch(e){
        throw new e;
    } 
}catch(e){
    console.log('got it',e);
}
//got it TypeError: e is not a constructor
// at <anonymous>:5:15

//TRY Catch works with synchronous errors 
try{
    setTimeout(function(){
        fakeVar;
    },1000)
}catch(err){
    console.log('got it', err);
}

//this will not catch the error since it catches only synchronous errors