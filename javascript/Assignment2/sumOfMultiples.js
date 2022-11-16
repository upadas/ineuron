/* 
    Assignment 2 - Exercise 3 
    Write a JavaScript program to find the sum of the multiples of 3 and 5
    under 1000
 */

console.log( "The Sum of Multiples of 3 and 5 under 1000 is: " + sumOfMultiples());

function sumOfMultiples (num) {
    var sum = 0;
    for (var i = 0 ; i < 1000 ; i++) {
        if (i % 3 === 0 ||i % 5 === 0)
        sum += i;
    }
    return sum;
} 
