/**
 * REGEX ASSIGNMENT
 * Assignment 16 - 
 * Create a function that takes a string, checks if it has the same
number of x's and o's and returns either true or false.

● Return a boolean value (true or false). - done
● Return true if the amount of x's and o's are the same.
● Return false if they aren't the same amount.
● The string can contain any character. - done
● When "x" and "o" are not in the string, return true. - done
Examples
XO("ooxx") ➞ true
XO("xooxx") ➞ false
XO("ooxXm") ➞ true
// Case insensitive.
Notes
● Remember to return true if there aren't any x's or o's. - done
● Must be case insensitive. - done

*/

function XO(str) {
    const regexNoXO = /[^x,o]/i;
    const regexX = /x/gi;
    const regexO = /o/gi;
    if (regexNoXO.test(str)) {
        return true;
    }
    
    const xCount = (str.match(regexX)).length;
    const oCount = (str.match(regexO)).length;
    
    if ( xCount === oCount) {
        return true;
    }
    else {
        return false;
    }
}

arr = ["ooxx", "xooxx", "ooxXm", "abCDe"];
arr.forEach(element => {
    console.log( "XO(\"" + element + "\")   : " + XO(element));    
});
