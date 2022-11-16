/***
 * Assignment 20
 * Exercise 1 - Find output
 */

let p = new Promise(function (resolve, reject) {
  reject(new Error("some error 1"));
  setTimeout(function () {
    reject(new Error("some error 2"));
  }, 1000);
  reject(new Error("some error 3"));
});

p.then(null, function (err) {
  console.log(1);
  console.log(err);
}).catch(function (err) {
  console.log(2);
  console.log(err);
});

/*

 ~] node asyncAwait5.js 
1
Error: some error
    at /Users/xxxxx/code/Javascript/Assignment19/asyncAwait5.js:7:10
    at new Promise (<anonymous>)
    at Object.<anonymous> (/Users/xxxxx/code/Javascript/Assignment19/asyncAwait5.js:6:9)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47
 ~] 
 */
