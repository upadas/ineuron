/*
Assignment 11 - Exercise 4

Write a JavaScript program to take an array as input from the user and:
    a) Store all duplicate elements in a separate array
    b) Remove the duplicate elements from the original array
Sample Input:
    [ 1, 2, 3, 2, 3, 4, 5 ]
Output:
    Duplicate Elements = [ 2, 3 ]
    Array without duplicate elements = [ 1, 2, 3, 4, 5 ]
*/

console.log("a) Store all duplicate elements in a separate array");

let arr = [1, 2, 3, 2, 3, 4, 5];
var dupArray = arr.filter((element, index) => arr.indexOf(element) !== index);
console.log(dupArray);

console.log("b) Remove the duplicate elements from the original array");
var uniqArrSet = new Set();
for (i = 0; i < arr.length; i++) {
  uniqArrSet.add(arr[i]);
}

var uniqArr = [];
for (const [key, value] of uniqArrSet.entries()) {
  uniqArr.push(key);
}
console.log(uniqArr);
