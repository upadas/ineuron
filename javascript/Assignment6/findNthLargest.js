/**
 * Assignment 6 - Exercise 2
 * 
Write a javascript function find_largest to return the nth largest number in an array
eg: given an array of integers [3,45,6,7,23,5,7,8]
find_largest(3) will return third largest number from the above array -
which is 8.
*/

function findNthLargest(arr, n) {
  var sortedArr = [];
  sortedArr = arr.sort((a, b) => b - a);
  console.log(sortedArr);
  const nthLargest = sortedArr.filter((el, index) => index === n - 1);
  console.log(n + " largest number is ", nthLargest);
}

let arr = [3, 45, 6, 7, 23, 5, 7, 8];
let n = 4;
findNthLargest(arr, n);
