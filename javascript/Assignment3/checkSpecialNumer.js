/* 
    Assignment 3 - Exercise 3
    Write a program to find whether a given number is special number or not-
    If the sum of the factorial of digits of a number (N) 
    is equal to the number itself, the number (N) is called a special number.
    eg:
    145 is a special number
    Logic- 1! + 4! + 5!= 1+24+120 i.e 14

*/

var scriptArgs = require('minimist')(process.argv.slice(2));
let num=scriptArgs._[0];

if (!/^\d+$/.test(num)){
    // if the entered values are not numbers, display error message
    console.log("Err.. Please enter a valid number range");
    process.exit(1);
}

var isSpecialNum = checkIfSpecialNum(num) ;

if (isSpecialNum) {
    console.log(num  + " is a Special Number");
}
else {
    console.log(num  + " is NOT a Special Number");
}

function checkIfSpecialNum (n) {
    isSpecialNum = false;
    var digitArr = numToDigitArr(n); 
    // console.log(digitArr);
    if ( n === sumOfFactorialsOfDigits(digitArr)) {
        isSpecialNum = true;
    }
    return isSpecialNum;
}

//Convert a number to Array of individual digits, returns an array
function numToDigitArr (num){
    var myArr = String(num).split("").map((num)=>{
        return Number(num);
      })   
      return myArr;
}

//Take an array as input, calculate & return the sum of the factorial of its individual digits
function sumOfFactorialsOfDigits(arr){
    if (typeof arr !== "object" ) {
        console.log ("Expecting an Array, received " + typeof arr);
        return 0;
    }
    sum=0;
    for (i = 0; i < arr.length; i++){
        sum+=factorial(arr[i]);
    }
    // console.log ("sum = "+ sum);
    return sum;
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

