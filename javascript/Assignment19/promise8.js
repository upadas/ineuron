/**
 * Assignment 20 - Promise in javascript
 * Exercise 8 - What is the output of the code below?
 */

console.log("start");
setTimeout(() => {
  console.log("setTimeout");
});
Promise.resolve().then(() => {
  console.log("resolve");
});
console.log("end");

/*
> start
> end
> resolve
> setTimeout - Timeout 
*/
