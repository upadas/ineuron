/****
 Assignment 10

1. Are Higher Order functions and Call back functions the same ? If not,
    briefly explain about both functions.
2. Is filter a Higher Order function in Javascript ? If yes, why ?
3. Give an example of a Higher Order function and a call back function
    used in the same program.
4. Carefully check the example below:
a) What will be the output of this program ?
b) Which function is a Higher Order function here ?
    const names= ['John', 'Tina','Kale','Max']
    function useFunction(arr,fn){
    for(let i=0; i<arr.length; i++){
    fn(arr[I]);
    }
    }
    function argFn (name){
    console.log("Hello " + name );
    }
    useFunction(names,argFn);s

*/

/*** FIND ANSWERS BELOW */
//1. Not same, A higher order function is one that can either return a function or take a function as an argument or both
//  A callback function is something that is passed to another function as an argument.
// 2. Yes filter is a higher order function, it takes in a function to filter elements from an array
// 3.

array = Array.from(Array(101).keys());
function isPrime(num) {
  if (num <= 1) return false;
  if (num == 2) return true;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}
// console.log(array);
console.log("Prime : " + array.filter(isPrime));

// 4. Output :
// a) What will be the output of this program ?
/*** Ans: ***/
// Hello John
// Hello Tina
// Hello Kale
// Hello Max

// b) Which function is a Higher Order function here ?
/*** Ans: ***/
// useFunction is the higher order function as it takes argFn as an argument

const names = ["John", "Tina", "Kale", "Max"];
function useFunction(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}
function argFn(name) {
  console.log("Hello " + name);
}
useFunction(names, argFn);
