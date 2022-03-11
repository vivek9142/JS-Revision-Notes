function a(){
    let grandpa = 'grandpa'
    return function b(){
        let father = 'father';
        return function c(){
            let son = 'son'
            return `${grandpa} > ${father} > ${son}`
        }
    }
}

a()()();

/*how did son in child func who his/her father is . 
when we call a() we have ran the function
the only thing remaining is return function body.

a func executed and popped off the stack. when fuction gets called off a 
stack  should'nt gradnpa be thrown away since,it is func is garbage collected and its variables
soemhow c func has acces to the values

grandpa remains after function gets garbage collected because grandpa variable goes into the box 
of closure 

closure are also known as lexically scoped or statically scoped
lexical means where it written scope is what variable we have access to 
so the compiler already knows by any line what variable has access to which values since it is 
lexically scoped
*/

//ex2- 
function boo(string){
    return function(name){
        return function(name2){
        console.log(`${string} ${name} ${name2}`)
        }
    }
}

boo('hi')('tim')('becca')

const booString = boo('hi');
//5 years
const booStringName = booString();