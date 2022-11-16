/**
 * Assignment 20 - Promise in javascript
 * Exercise 7 - What is the output of the code below?
 */

var p = new Promise((resolve, reject) => {
  reject(Error("The Fails!"));
})
  .catch((error) => console.log(error))
  .then((error) => console.log(error));

/**
 It will log the error in the reject and log undefined for the then statement
 ~] node promise7.js 
Error: The Fails!
    at /Users/sasibhushanupadrasta/code/Javascript/Assignment20/promise7.js:7:10
    at new Promise (<anonymous>)
    at Object.<anonymous> (/Users/sasibhushanupadrasta/code/Javascript/Assignment20/promise7.js:6:9)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47

 undefined

 */
