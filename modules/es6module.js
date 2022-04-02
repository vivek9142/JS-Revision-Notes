//We have a native keyword now called Import that imports a module from whatever a file we want.
//import module1 from 'module1' //{fight}
//import module2 from 'module2';

//export function jump(){

//}

//Let's turn our code.
//That was originally just a simple module pattern into using ES6 modules.

const harry = 'potter'
const voldemort = 'He who must not be named'
export function fight(char1, char2) {
  const attack1 = Math.floor(Math.random() * char1.length);
  const attack2 = Math.floor(Math.random() * char2.length);
  console.log(attack1);
  return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
}

// fight(harry, voldemort) 