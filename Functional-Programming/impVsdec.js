//5-  Imperative Vs Declarative
/*
imperative code is code that tells the machine what to do and how to do it.

Declarative code tells it what to do and what should happen, 
it doesn't tell the computer how to do things.
*/

//for loop is pretty descriptive so it is imperative
for(let i=0;i<10;i++){
    console.log(i)
}

// so how should we make it more declarative
//so now it is declarative i don't tell the prog what to do or how to do it
[].forEach(item => console.log(item));

//classic example to this is jquery is imperative so here it 
//tells us what ot do and how to do

//react is declarative we define what to here in react not how to do
