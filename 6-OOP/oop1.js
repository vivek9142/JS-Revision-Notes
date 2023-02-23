const elf = {
    name:'Orwell',
    weapon:'bow',
    attack(){
        return 'attack with '+elf.weapon
    }
}
const elf = {
    name:'Sally',
    weapon:'bow',
    attack(){
        return 'attack with '+elf.weapon
    }
}
elf.attack();
elf2.attack();

/*
we have something called encapsulation
we grouped functionality together we have state with the obj and
methods acting in that state and modify them.
*/

//2nd level factory functions - our function that 
//acts like factories create objects for us

function createElf(name,weapon){
    return {
        name:name,
        weapon:weapon,
        attack(){
            return 'attack with '+weapon
        }
    }
}

const peter = createElf('Peter','stones');
peter.attack()
const sam = createElf('Sam','fire');
sam.attcack();

/*
Factory functions are great, but can you notice something that we can improve here?
What if we had a thousand tops and those a thousand else, they require space in our memory, right,
to store the same data.

And things like name and weapon, well, they're going to be different, so we need to store that data
in memory for itself.

But methods such as attack that are pretty generic and they're the same thing.
That is going to be copied onto memory in a different location for each one of these elf's.
So if we had a thousand Tulse, that's a thousand attack functions in different places, a memory for
each elf.*/

/*Luckily for us, JavaScript has this interesting thing, right, we learned about it in the last section
when we talked about Prototypal inheritance, we can use that to our advantage to maybe improve this so
that we share functionality across different objects.*/