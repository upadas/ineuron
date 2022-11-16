/**
 * REGEX ASSIGNMENT
 * Assignment 16 
 * Exercise 4). Create a function that will return an integer number
corresponding to the amount of digits in the given integer num
Examples
num_of_digits(1000) ➞ 4

num_of_digits(12) ➞ 2
num_of_digits(1305981031) ➞ 10
*/

function num_of_digits(n) {
    return n.toString().length;
}
arr = [12, 234, 55465, 856756756, 1000, 1789834, 1305981031];
arr.forEach(element => {
    console.log( "Number " + element + " has [" + num_of_digits(element) + "] has ");    
});
