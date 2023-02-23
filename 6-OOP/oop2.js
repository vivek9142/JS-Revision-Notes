/*Luckily for us, JavaScript has this interesting thing, right, we learned about it in the 
last section when we talked about Prototypal inheritance, we can use that to our advantage
to maybe improve this so that we share functionality across different objects.

Before we get ot prototypal inheritance,
there is 1 way to improve this function being created in every elf created in memory
*/
const elfFunctions  = {
    attack(){
        return 'attack with '+ this.weapon
    }
}
function createElf(name,weapon){
    return {
        name,
        weapon,
    }
}

const peter = createElf('Peter','stones');
peter.attack = elfFunctions.attack
peter.attack()
const sam = createElf('Sam','fire');
sam.attack = elfFunctions.attack
sam.attack();


/*
we have shared the functionality and everything is working fine but 
it is still a lot of manual work
so we can use another tool to make it easy 
Object.create
*/

const elfFunctions  = {
    attack(){
        return 'attack with '+ this.weapon
    }
}
function createElf(name,weapon){
    let newElf = Object.create(elfFunctions)
        newElf.name= name
        newElf.weapon = weapon
        return newElf;
}

const peter = createElf('Peter','stones');
peter.attack()
const sam = createElf('Sam','fire');
sam.attack();

/*
What object does create does?
it creates a link between the elf functions And the new elf that we just created.

We're doing prototypal inheritance here, if I console log new health here and I run this, 
I see that it creates an empty object for me.
But where is this attack?
Remember, this is an object, so if I do dot underscore, underscore Proteau to see what's up 
the prototype chain.

I get a tech.

So object dot create creates this prototype chain for us all the way up so that we can use attack.
*/