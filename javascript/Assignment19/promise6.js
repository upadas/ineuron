/**
 * Assignment 20 - Promise in javascript
 * Exercise 6 - What is the output of the code below?
 */

Promise.resolve("Success!")
  .then((data) => {
    return data.toUpperCase();
  })
  .then((data) => {
    console.log(data);
  });

/*
  >SUCCESS!
*/
