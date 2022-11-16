/**
 * Assignment 20 - Promise in javascript
 * Exercise 9 - What is the output of the code below?
 */

console.log("start");
Promise.resolve(1).then((res) => {
  console.log(res);
});
Promise.resolve(2).then((res) => {
  console.log(res);
});
console.log("end");

/*
start
end
1
2
*/
