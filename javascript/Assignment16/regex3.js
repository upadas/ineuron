/**
 * REGEX ASSIGNMENT
 * Assignment 16 - Exercise 3
 * Write a regular expression that matches only a prime number.
Numbers will be presented as strings.
Example
“7” ➞ true
“134” ➞ false
*/

function isPrime(n) {
    const regex = /^1?$|^(11+?)\1+$/;
    return !("1".repeat(n).match(regex));
}

arr = ["1", "2", "5", "8", "9", "134", "17"];
arr.forEach(element => {
    console.log( "Number " + element + " isPrime :" + isPrime(element));    
});
