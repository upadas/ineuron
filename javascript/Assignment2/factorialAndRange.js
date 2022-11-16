/* 
    Assignment 2 - Exercise 4 
    This code computes the factorial of all prime numbers 
    between a range passed by a user 
*/

var scriptArgs = require('minimist')(process.argv.slice(2));

let startRange=scriptArgs._[0];
let endRange=scriptArgs._[1];

if (!/^\d+$/.test(startRange) || !/^\d+$/.test(endRange)){
    // if the entered values are not numbers, display error message
    console.log("Err.. Please enter a valid number range");
    process.exit(1);
}

factorialOfPrimesForRange (startRange,endRange);

// calculate the factorials of prime numbers in a range
function factorialOfPrimesForRange(s,e){
    for (i=s; i <= e; i++) {
        if (isPrime(i)){
            console.log( i + " is a prime number and its factorial is :" +  factorial(i));
        }
    }
}
// check if a number is prime
function isPrime(n) {
    
    if (n <= 1){
        return false;
    }
    if (n == 2){
        return true;
    }
    for (var i = 2; i < n ; i ++){
        if (n % i == 0 ){
            return false;
        }
    }
    return true;
}

// calculates the factorial
function factorial (f){

    if (f < 0) {
        return -1;
    }
    else if (f==0) {
        // Factorial of 0 is 1   
        return 1;
    }
    else {
        return f * factorial(f-1) ;
    }
}
