/***
 * Assignment 20
 * Exercise 4 - Find output
 */

async function inc(x) {
  x = x + (await 1);
  return x;
}
async function increment(x) {
  x = x + 1;
  return x;
}
inc(1).then(function (x) {
  increment(x).then(function (x) {
    console.log(x);
  });
});

/***
 ~] node asyncAwait4.js 
   3
 */
