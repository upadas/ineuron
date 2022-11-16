/***
 * Assignment 20
 * Exercise 6 - Find Output
 */
/*** what is the objective of this assignment??? ***/

async function f1() {
  console.log(1);
}
async function f1() {
  console.log(2);
}

console.log(3);
f1();
console.log(1);
f2();

async function f2() {
  console.log("Go!");
}

/**
 * 
~] node asyncAwait6.js 
3
2
1
Go!
 */
