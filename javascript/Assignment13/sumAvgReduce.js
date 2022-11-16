/* 
Assignment 13 - Exercise 1


1. Write a JavaScript program to get an array from the user and return the:
    a) Sum of all elements in the array using reduce()
    b) Average of all elements in the array using reduce()
Sample Input:
    [ 1, 2, 3, 4, 5 ]
Output:
    15
    3
*/

const arr = [ 1, 2, 3, 4, 5 ];
const sum = arr.reduce( (x,y) => x+y, 0) ;
console.log(sum);
const avg = arr.reduce( (x,y) => x+y, 0)/arr.length;
console.log(avg);