/**
 * Assignment 20 - Promise in javascript
 * Exercise 4 - What is the output of the code snippet?
 */

const { start } = require("prompt");

console.log("start");
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });
console.log("middle");
fn().then((res) => {
  console.log(res);
});

console.log("end");

/*
> start
> middle
> 1
> end
> success
*/
