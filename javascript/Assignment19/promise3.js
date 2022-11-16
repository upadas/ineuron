/**
 * Assignment 20 - Promise in javascript
 * Exercise 3 - What is the output of the code below?
 */

const promise = new Promise((res) => res(2));
promise
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .finally((v) => {
    console.log(v);
  })
  .then((v) => {
    console.log(v);
    return v * 2;
  });

// >2 - logs 2 before it is multiplied by 2
// >4 - logs 4 before it is multiplied by 2
// >undefined - finally does not take an argument, hence the value is undefined
// >8 - logs 8 before it is multiplied by 2
