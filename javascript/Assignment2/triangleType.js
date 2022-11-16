/* 
    Assignment 2 - Exercise 1 - 1. Write a Javascript function 
    to check whether a triangle is equilateral, isosceles or scalene 
*/

var scriptArgs = require('minimist')(process.argv.slice(2));

let s1=scriptArgs._[0];
let s2=scriptArgs._[1];
let s3=scriptArgs._[2];

triangleType(s1,s2,s3);

function triangleType (s1,s2,s3){
    if (!/^\d+$/.test(s1) || !/^\d+$/.test(s2) ||  !/^\d+$/.test(s3)){
        console.error("Sides of the triangle must be numeric values, please re-enter");
        process.exit(1);
    }
    if (s1===s2 && s2===s3){
        console.log('Equilateral Triangle');
    }
    else if (s1===s2 && (s2!==s3 || s1!==s3) ){
        console.log('Isosceles Triangle');
    }
    else {
        console.log('Scalene Triangle');
    }
}
  


/*
const prompt = require('prompt');

let sides = [];
prompt.start();

prompt.get(['side1', 'side2', 'side3'], function (err, result) {
  if (err) {
    return onErr(err);
  }
  console.log(' Triangle Sides Entered are:' + result.side1 + " " + result.side2 + " " + result.side3);
  sides = [result.side1, result.side2, result.side3];

  triangleType(sides[0], sides[1], sides[2]);

});

function onErr(err) {
    console.log(err);
    return 1;
  }
*/