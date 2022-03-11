//1-normal function to just login with only static param 
//here we need to create these func for every member login for ex - 
function letAdamLogin(){
    let array = [];
    for(let i=0;i<10000000;i++){
        array.push(i);
    }

    return 'Access Granted to Adam';
}

function letAvaLogin(){
    let array = [];
    for(let i=0;i<10000000;i++){
        array.push(i);
    }

    return 'Access Granted to Ava';
}

letAdamLogin();
letAvaLogin();

//2- next level - using generic function and add param to do above func. use DRY(donot Repeat youself)

function letUserLogin(user){
    let array = [];
    for(let i=0;i<10000000;i++){
        array.push(i);
    }

    return giveAccessTo(user);
}

const giveAccessTo = name => 'Access Granted to '+name;

letUserLogin('Adam');
letUserLogin('Ava');

//3- problem  - what if we have admin so now we need ot write another function for admin,and now we need 
//to go to more security procedures  - 
function letUserLogin(user){
    let array = [];
    for(let i=0;i<10000000;i++){
        array.push(i);
    }

    return giveAccessTo(user);
}

const giveAccessTo = name => 'Access Granted to '+name;

function letAdminLogin(admin){
    let array = [];
    for(let i=0;i<150000000;i++){
        array.push(i);
    }

    return giveAccessTo(admin);
}
//3- soln - we haven't used the DRY, os here we can use HOF(higher order functions)..

const giveAccessTo = name => 'Access Granted to '+name;

function authenticate(verify){
    let array = [];
    for(let i=0;i<verify;i++){
        array.push(i);
    }
    return true
}
//HOF - functions that takes function as param or return functions
function letPerson(person,fn){
    if(person.level === 'admin')
        fn(5000000)
    else if(person.level === 'user')
        fn(1000000)
    
    return giveAccessTo(person.name);
}

letPerson({level:'user',name:'Tim'},authenticate);