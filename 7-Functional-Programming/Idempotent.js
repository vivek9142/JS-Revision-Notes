//4- Idempotence means function which always returns  what we expect it to do

function notGood(num){
    return Math.random(num)
}

notGood(4) // always returns random no. so idempotent

function notGood2(num){
    console.log(num);
}

notGood2(3); //idempotent since returns what we expect it to do but not pure sinceit has side effects

Math.abs(Math.abs(-34)) //34 -- calling this func any times always returns the same thing 

/*
No matter how many times I click run, I always get five, this function that console logs five to the
outside world is still and important because multiple calls is still going to display the same text,
even though it's not pure because, well, it communicates with the outside world.

Another thing that can be indepodent, for example, is deleting a user from a database when we delete
a user from a database.

Well, I can delete that person once, but if I keep calling the function to delete that user, well,
it's going to return the same result.
It's going to return me that empty field where there's no more user.

And things like and indepotent, you see a lot in APIs like HTTP request, I can do an API call and I
expect that that API call, given some sort of parameter, is always going to return the same results,
even though we are communicating with the outside world.

Now, why did I teach you this?
Well, because this idea of being able to call something a thousand times and always giving you the
same result is extremely valuable when it comes to things like parallel and distributed computation,
because it makes our code predictable.
By the way, another interesting feature of indepodents is this idea of being able to call yourself
over and over and over or inside of yourself, and you still get the same result.
*/