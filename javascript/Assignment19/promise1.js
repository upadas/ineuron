/**
 * Assignment 20 - Promise in javascript
 * Exercise 1 - What is the output of the code below?
 */

function job() {
  return new Promise(function (resolve, reject) {
    reject();
    // throw "Throwable";
  });
}

let promise = job();
promise
  .then(function () {
    console.log("Success 1");
  })
  .then(function () {
    console.log("Success 2");
  })
  .then(function () {
    console.log("Success 3");
  })
  .catch(function () {
    console.log("Error 1");
  })
  .then(function () {
    console.log("Success 4");
  });

// Error 1 - As promise is rejected and it is caught in then
// Success 4 - As the stream followed by catch is executed after
