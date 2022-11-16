
/**** Assignment 15
 * 
Exercise 4)
This Triangular Number Sequence is generated from a pattern of
dots that form a triangle. The first 5 numbers of the sequence, or
dots, are:
1, 3, 6, 10, 15

This means that the first triangle has just one dot, the second one
has three dots, the third one has 6 dots and so on.
Write a function that returns the cumulative sum of the number of
all the previous (including current) dots when given its
corresponding triangle number of the sequence.

****/

function triangleDots (num) {

    // Base case
    if (num < 0 || num === 0) {
        return 0;
    }

    var dots;
    for (i = num ; i >= num; i--) {
        dots = num + triangleDots(i-1);
        triangleSeq = triangleSeq + "," + dots;
        return dots;
    }
}

var triangleSeq="0";
var num =8; 
triangleDots(num);
// console.log ("triangleDots for number " + num + " is " + triangleDots(num));
console.log ("triangleDots for sequence is " + triangleSeq);



