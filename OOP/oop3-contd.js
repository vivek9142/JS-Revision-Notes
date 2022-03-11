/*
logging this before assigning valuesin construcotr func will give elf()
after assigning values this will give tyher obj containing the values

only after assiging values with this will be added to the contructor functions object
*/
function Elf(name,weapon){
    console.log('this',this);
    this.name = name;
    this.weapon = weapon;
    console.log('this',this);
}
Elf.prototype.attack = function(){
    return 'attack with ' + this.weapon;
}
//soln1 -
// Elf.prototype.build = function(){
//     function building(){
//         return this.name + 'builds a house';
//     }
//     //building()- will give undefined since it is called by window obj
//     return building.bind(this); //will give the designated output
// }

Elf.prototype.build = function(){
    const self = this;
    function building(){
        return self.name + 'builds a house';
    }
    return building(); //will give the designated output
}
const peter = new Elf('Peter','stones');
peter.build()
const sam = new Elf('Sam','fire');
sam.attack();

/*
As a matter of fact, there's not that many people that like this style of coding.
It's kind of confusing, although older code bases, you might see a lot of this, especially if they're
doing object oriented programming, but the problem is that object oriented programming is all about
the idea of classes, this code.

Well, there's no classes in here.
There is this weird thing where we have to make sure to remember to have a capital letter, which is
why Object Dot Create was added to the language in order to avoid this headache and just use pure prototyp
all inheritance.

But the thing is.
This style of coding, this idea of this and the new keyword is very much object oriented programming
in part, especially when it comes to languages like Java, if we wanted to get closer to object oriented
programming, well, objects create is technically less object oriented than something like this.

But like I said before, this is not pretty.
So how can we improve this and we're going to improve this a lot in the next part, we're finally going
to get to the end to our goal of adding classes.
*/