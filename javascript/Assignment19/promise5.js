/**
 * Assignment 20 - Promise in javascript
 * Exercise 5 - Write a function delay that returns a promise. And that promise
 * should return a setTimeout that calls resolve after 1000ms.
 */

function delay() {
  const delayMs = 1000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delayMs);
    }, delayMs);
  });
}

delay().then((res) =>
  console.log(new Date() + " :  Delayed by " + res + " ms")
);
console.log(new Date() + " : Logging Immediately");
