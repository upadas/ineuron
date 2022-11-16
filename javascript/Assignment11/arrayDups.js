/*
Assignment 11 - Exercise 4

Write a JavaScript program to take an array as input from the user and:
    a) Store all duplicate elements in a separate array
    b) Remove the duplicate elements from the original array
Sample Input:
    [ 1, 2, 3, 2, 3, 4, 5 ]
Output:
    Duplicate Elements = [ 2, 3 ]
    Array without duplicate elements = [ 1, 2, 3, 4, 5 ]
*/

console.log ("a) Store all duplicate elements in a separate array");

console.log ("****** Method 1 : Using filter ********");
let arr = [ 1, 2, 3, 2, 3, 4, 5 , 4 ,5, 6];
var dupArray = arr.filter((element, index) =>
           arr.indexOf(element) !== index);
console.log(dupArray);


console.log ("****** Method 2 : Using Map & has ********");
var dupMap = new Map();
for (i = 0 ; i < arr.length ; i ++){
    if (dupMap.has(arr[i])){
        dupMap.set(arr[i], 'dup'); 
    }
    else {
        dupMap.set(arr[i], 'uniq')
    }
}

// console.log(dupMap);
var dupArray1=[];
for (const [key,value] of dupMap.entries()) {
    if (dupMap.get(key) == 'dup') {
        dupArray1.push(key);
    }
}
console.log(dupArray1);

console.log ("b) Remove the duplicate elements from the original array");

var uniqElArray =[];
for (const [key,value] of dupMap.entries()) {
    uniqElArray.push(key);
}
console.log(uniqElArray);