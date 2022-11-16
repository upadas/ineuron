/**
 * Assignment 20 - Promise in javascript
 * Exercise 2 - Write a sleep function using a promise in javascript?
 */
const sleepTime = 3000;
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(sleepTime);
  }, sleepTime);
});

promise.then((sleepTime) =>
  console.log(
    "This statement is delayed by " + sleepTime / 1000 + " secs as promised"
  )
);
console.log("This statement is logged Immediately");
