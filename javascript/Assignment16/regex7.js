/**
 * REGEX ASSIGNMENT
 * Assignment 16 - Exercise 7 
ATM machines allow 4 or 6 digit PIN codes and PIN codes
cannot contain anything but exactly 4 digits or exactly 6 digits. Your

task is to create a function that takes a string and returns true if the
PIN is valid and false if it's not.
Examples
validatePIN("1234") ➞ true
validatePIN("12345") ➞ false
*/

function validatePIN (pin) {
    if(/^\d{4}$|^\d{6}$/.test(pin)) {
        return true;
    }
    else {
        return false;
    }
}

arr = ["1224", "3215", "236483", "14659", "12345", "12", "123", "1234"];
arr.forEach(element => {
    console.log( "validatePIN(" + element + ")      : " + validatePIN(element));    
});
