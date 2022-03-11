// 6- immutability
//it means not update the data,variable or state

const obj = {name: 'View'}

function clone(obj){
    return {...obj}; //this is pure
}

obj.name = 'Nana';

function updateName(obj){
    const ob2 = clone(obj);
    obj2.name = 'Nana';
    return obj2;
}

const updatedObj = updateName(obj)
console.log(obj, updateObj)
// they are two different objs now

//but if we're copying things over everytime we want to make 
//a change doesn't that will fill up our memory

/*there is something called strcutural sharing that when it
comes to functional programming it is implemented

The idea behind it is that when a new object or let's say an array or any sort of data structure is
created, we don't actually copy everything.
If it's a massive object or an array, you can see that being very expensive instead of storing the
entire copy underneath the hood.

What happens is that only the changes that were made to the state will be copied, but the things that
don't change in memory are actually still there.
And this is called structural sharing.

From the beginning of this section, we're simply saying, hey, this data is not mine.
Any data that I receive is not mine.
So I'm just going to borrow it.

And I'm only going to copy and make a new copy of this data so other people can still use this.
It's kind of like kindergarten, right?
If you played with a toy.Well, you shouldn't destroy it.You shouldn't change it.
You should play with it and then return it back to the school so that other kids can play with it too.
*/