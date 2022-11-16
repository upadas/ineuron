/**** ASSIGNMENT 15

Exercise 2:

The right shift operation is similar to floor division by powers of
two. Write a function that mimics (without the use of >>) the right
shift operator and returns the result from the two given integers. Try
to solve this challenge by recursion.

(80, 3) ➞ 10
(-24, 2) ➞ -6
(-5, 1) ➞ -3
(4666, 6) ➞ 72
(3777, 6) ➞ 59
(-512, 10) ➞ -1


****/
function rightShiftDivision (num1, num2){
    
    console.log( "1. Using right shift operator >>                   :" + (num1 >> num2));
    console.log( "2. Using Floor of division by power of 2  operator :" + Math.floor(num1/Math.pow(2,num2)));

    //base case
    if (num2 < 0) {
        console.log("Number of places to be shifted cannot be negative.");
        return;
    }

    var binNum1 = dec2bin(num1);
    // console.log("binNum1              : " + binNum1);
    var shiftedBinary = binNum1.slice(0,binNum1.length-num2);
    // console.log("shiftedBinary        : " + shiftedBinary);
    if (num1 < 0 ){
        shiftedBinary = shiftedBinary.padStart(31,0);
        shiftedBinary = shiftedBinary.padStart(32,1);
    }
    else {
        shiftedBinary = shiftedBinary.padStart(32,0);
    }

    // console.log("Padded shiftedBinary : " + shiftedBinary);
    var shiftedDecimal = bin2dec(shiftedBinary);
    // console.log("shiftedDecimal       : " + shiftedDecimal);
    return  shiftedDecimal;
    // console.log(shiftedDecimal);
} 

function dec2bin(dec) {
    return (dec >>> 0).toString(2).padStart(32,0);
}

function bin2dec(bin) {
    return parseInt(bin, 2);
}

//var shifted = rightShiftDivision (-24, 2);
//There is certainly an issue with -ve numbers that must be resolved
var shifted = rightShiftDivision (-24, 2);
console.log( "3. By converting to Binary and shifting            :" + shifted);
