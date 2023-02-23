/*
Promises - all types of promises runing styles
1- Parallel - all promises run in parallel at same time
2- Sequential - all promises are run in sequence first,then second andthen third on so on in seq
3- Race -(ex) call three promisesbut whichever comes first just execute that one ignore the rest
*/

const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `parallel is done: ${output1} ${output2} ${output3}`
}

async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`
}

sequence().then(console.log)
parallel().then(console.log)
race().then(console.log)

//race is done: a
//parallel is done: a b c
//sequence is done a b c  

//es2020 - allsettled
const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(resolve,3000);
});

const promiseTwo = new Promise((resolve,reject)=>{
    setTimeout(reject,3000);
});

//uncaught in promise - all will only complete once all promise are resolved
//with catch something failed
Promise.all([promiseOne,promiseTwo]).then(data => console.log(data))
.catch(err =>{console.log('something failed',err)})

/*
promise all settled doesn't care about resolve and reject, unlike promise

that all which short circuits, when any of the promises are rejected or settled, the promise of settled

runs, all promises, regardless of whether they reject or not.

So the promise only comes back when all promises that have been added to it are complete.
*/


//will give two array of result and their respective value on resolve and reason on reject
//will wait for all promise to resolve or reject and then returns the output array
Promise.allSettled([promiseOne,promiseTwo]).then(data => console.log(data))
.catch(err =>{console.log('something failed',err)})



//ES2021 - Promise.any
/*
Promise.any() resolves if any of the supplied promises is resolved. 
Below we have 3 promises, which resolves at random times.
Out of p1, p2 and p3, whichever resolves first is taken by Promise.any().

What if none of the promises resolve? In that case Promise.any() throws an error!
*/
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("A"), Math.floor(Math.random() * 1000));
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("B"), Math.floor(Math.random() * 1000));
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("C"), Math.floor(Math.random() * 1000));
  });

  (async function () {
    const result = await Promise.any([p1, p2, p3]);
    console.log(result); // Prints "A", "B" or "C"
  })();