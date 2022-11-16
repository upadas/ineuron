/**
 * REGEX ASSIGNMENT
 * Assignment 16 - Exercise 8
 * Create a function that determines whether a string is a valid hex
code. A hex code must begin with a pound key # and is exactly 6
characters in length. Each character must be a digit from 0-9 or an
alphabetic character from A-F. All alphabetic characters may be
uppercase or lowercase.
Examples
isValidHexCode("#CD5C5C") ➞ true
isValidHexCode("#EAECEE") ➞ true
isValidHexCode("#CD5C&C") ➞ false
*/

function isValidHexCode (hex){
    const regex = /^#[a-f0-9]{6}$/i;
    if (regex.test(hex)) {
        return true;
    }
    else {
        return false;
    }
}

arr = ["#CD5C5C", "#EAECEE", "#CD5C&C", "#CG5CZC", "#CGCZC", "#CGCZC77"];
arr.forEach(element => {
    console.log( "isValidHexCode(" + element + ")   : " + isValidHexCode(element));    
});
