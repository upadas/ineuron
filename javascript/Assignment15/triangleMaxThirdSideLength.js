/**** ASSIGNMENT 

Exercise 1). Create a function that finds the maximum range of a triangle's 
third edge, where the side lengths are all integers.

Examples:
nextEdge(8, 10) ➞ 17
nextEdge(5, 7) ➞ 11
nextEdge(9, 2) ➞ 10
Notes
● (side1 + side2) - 1 = maximum range of third edge.
● The side lengths of the triangle are positive integers.
● Don't forget to return the result.

****/

function  triangleMaxThirdSideLength (side1, side2){
    if  (side1 <= 0 || side2 <= 0){
        console.log("Sides of the triangle cannot be 0 or negative");
        return;
    }
    
    return (side1 + side2) - 1;
}

var s1 = 8;
var s2 = 10;
var maxValueOfThirdSideOfTriangle = triangleMaxThirdSideLength(s1,s2);
console.log("Max value of third side of the triangle with sides " +s1 + "," + s2 + " is : " + maxValueOfThirdSideOfTriangle);

s1 = 5;
s2 = 7;
var maxValueOfThirdSideOfTriangle = triangleMaxThirdSideLength(s1,s2);
console.log("Max value of third side of the triangle with sides " +s1 + "," + s2 + " is : " + maxValueOfThirdSideOfTriangle);

var s1 = 9;
var s2 = 2;
var maxValueOfThirdSideOfTriangle = triangleMaxThirdSideLength(s1,s2);
console.log("Max value of third side of the triangle with sides " +s1 + "," + s2 + " is : " + maxValueOfThirdSideOfTriangle);






// 4) This Triangular Number Sequence is generated from a pattern of
// dots that form a triangle. The first 5 numbers of the sequence, or
// dots, are:
// 1, 3, 6, 10, 15
