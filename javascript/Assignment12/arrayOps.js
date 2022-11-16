/* 
Assignment 12 - Exercise 3

Write a JavaScript program to iterate over an array inputted by the user using
mapping. Perform the square of all elements in the original array, store the
squares in a new array and make a mapping for the squares and display it.
Sample Input:
[ 1, 2, 3, 4, 5 ]
Explanation:
Original Array = [ 1, 2, 3, 4, 5 ]
New Array = [ 1, 4, 9, 16, 25 ]
Mapping = squares => [ 1, 4, 9, 16, 25 ]
Output:
[ 1, 4, 9, 16, 25 ]
*/

/*** !!!AMUSED BY THE WORD "inputted"!!!  *****/
/*** dictionary.has(inputted)? *****/

// using map method on array to calculate squares of the elements
// for now define an array here, 
// if seeking array as user input use prompt to read user input
var arr = [ 1, 2, 3, 4, 5 ];
console.log ("Original Array =" + arr);
const squares = arr.map ( i => Math.pow(i,2) );
console.log ("Squared Array Elements= " + squares);