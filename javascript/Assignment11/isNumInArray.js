/*
Assignment 11 - Exercise 2 
Write a JavaScript program to take 2 arrays from the user and check if the
number 4 exists in any of the arrays, or both of the arrays.
    Sample Input 1:
    [ 1, 2, 3, 4, 5 ]
    [ 4, 6, 1, 8, 2 ]
    Output:
    4 in both arrays

    Sample Input 2:
    [ 1, 2, 3, 6, 5 ]
    [ 4, 6, 1, 8, 2 ]
    Output:
    4 in array 2

    Sample Input 3:
    [ 1, 2, 3, 4, 5 ]
    [ 5, 6, 1, 8, 2 ]
    Output:
    4 in array 1
*/
function  isNumInArray(arr1, arr2, num) {
    var txt = "";
    if (arr1.includes(num) && arr2.includes(num)){
        txt = "both arrays";
    }
    else if (arr1.includes(num)) {
        txt = "array 1";
    }
    else if (arr2.includes(num)) {
        txt = "array 2";
    }
    else {
        console.log(num + " does not exist in any of the arrays");
        return;
    }
    console.log(num  + " in " + txt);
}

let arr1 = [ 1, 2, 3, 5, 4 ];
let arr2 = [ 6, 1, 4, 8, 2 ];
let numToCheck = 4;
isNumInArray(arr1, arr2, numToCheck);