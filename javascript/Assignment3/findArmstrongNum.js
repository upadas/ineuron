/* 
    Assignment 3 - Exercise 2
    Write a program to find whether a given number is armstrong number or not

    The Armstrong number is a number that is equal to the sum of cubes of
    its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
    numbers. Let's try to understand why 153 is an Armstrong number.
    153 = (1*1*1)+(5*5*5)+(3*3*3) where:
    (1*1*1)=1
    (5*5*5)=125
    (3*3*3)=27
    So:
    1+125+27=153

*/
var scriptArgs = require('minimist')(process.argv.slice(2));
let num=scriptArgs._[0];

if (!/^\d+$/.test(num)){
    // if the entered values are not numbers, display error message
    console.log("Err.. Please enter a valid number range");
    process.exit(1);
}

var isArmstrongNum = checkIfArmstrongNum(num) ;

if (isArmstrongNum) {
    console.log(num  + " is an Armstrong Number");
}
else {
    console.log(num  + " is NOT an Armstrong Number");
}

function checkIfArmstrongNum (n) {
    isArmstrongNum = false;s
    var digitArr = numToDigitArr(n); 
    if ( n === sumOfCubesOfDigits(digitArr)) {
        isArmstrongNum = true;
    }
    return isArmstrongNum;
}

//Convert a number to Array of individual digits, returns an array
function numToDigitArr (num){
    var myArr = String(num).split("").map((num)=>{
        return Number(num);
      })   
      return myArr;
}

//Take an array as input, calculate & return the sum of its individual digits
function sumOfCubesOfDigits(arr){
    if (typeof arr !== "object" ) {
        console.log ("Expecting an Array, received " + typeof arr);
        return 0;
    }
    sum=0;
    for (i = 0; i < arr.length; i++){
        sum+=Math.pow(arr[i],3)
    }
    return sum;
}
