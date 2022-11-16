/**
 * REGEX ASSIGNMENT
 * Assignment 16 - 
 * Create a function that takes an array of numbers and returns
"Boom!" if the digit 7 appears in the array. Otherwise, return "there is
no 7 in the array".

Examples
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.
*/


function sevenBoom (arr) {
    const numberToMatch = 7;

    // console.log("***** Method 1: Using array includes *****");
    // if (arr.includes(numberToMatch)) {
    //     return "Boom!";
    // }
    // else {
    //     return "There is no 7 in the array";
    // }

    console.log("***** Method 2: Using filter and test *****");
    const regex = /7/;
    if (regex.test(arr.filter(el => el === numberToMatch).toString())) {
        return "Boom!";
    }
    else {
        return "There is no 7 in the array";
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7 ];
console.log(sevenBoom(arr));
arr = [8, 6, 33, 107];
console.log(sevenBoom(arr));
arr = [1, 2, 3, 4, 5, 6, , 20, 35, 7, 100 ];
console.log(sevenBoom(arr));
