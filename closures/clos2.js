//closure can be 
//1- memory efficient
//2- providing encapsulation

//1- memory efficient
function heavyDuty(index){
    const bigArray = new Array(7000).fill(':)');
    console.log('created')
    return bigArray[index]
}
//everytime this func is called the array is created and gets destroyed that's not very efficient
heavyDuty(688);
heavyDuty(688);
heavyDuty(688);
heavyDuty(688);

//through closures we can create memory once and use it in inner function so it is memory efficient

function heavyDuty2(index){
    const bigArray = new Array(7000).fill(':)');
    console.log('created again!')
    return function(index){
        return bigArray[index]
    } 
}

const getHeavyDuty = heavyDuty2();
getHeavyDuty(688)
getHeavyDuty(700)
getHeavyDuty(65)
//through this the array is created once and used numerous times by its call func.

//2- providing encapsulation
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return 'exploded';
    }
    setInterval(passTime,1000);
    return {
        // we can encapsulate this or hide this so that every user 
        //can't use this specific functionality
        // launch:launch,
        totalPeaceTime:totalPeaceTime
    }
}

const ohno = makeNuclearButton();
ohno.totalPeaceTime();