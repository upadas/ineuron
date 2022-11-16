/***
 * Assignment 20
 * Exercise 7 - Find Output
 */

function resolveAfterNSeconds(n, x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(new Date() + " n=" + n + " x=" + x);
      resolve(x);
    }, n);
  });
}

(function () {
  console.log(new Date() + " Start");
  let a = resolveAfterNSeconds(1000, 1);
  a.then(async function (x) {
    let y = await resolveAfterNSeconds(2000, 2);
    let z = await resolveAfterNSeconds(1000, 3);
    let p = resolveAfterNSeconds(2000, 4);
    let q = resolveAfterNSeconds(1000, 5);
    console.log(new Date() + " End");
    console.log(x + y + z + (await p) + (await q));
  });
})();

/**
~] node asyncAwait7.js 
Sat Nov 05 2022 08:50:49 GMT+0530 (India Standard Time) Start
Sat Nov 05 2022 08:50:50 GMT+0530 (India Standard Time) n=1000 x=1
Sat Nov 05 2022 08:50:52 GMT+0530 (India Standard Time) n=2000 x=2
Sat Nov 05 2022 08:50:53 GMT+0530 (India Standard Time) n=1000 x=3
Sat Nov 05 2022 08:50:53 GMT+0530 (India Standard Time) End
Sat Nov 05 2022 08:50:54 GMT+0530 (India Standard Time) n=1000 x=5
Sat Nov 05 2022 08:50:55 GMT+0530 (India Standard Time) n=2000 x=4
15
 */
