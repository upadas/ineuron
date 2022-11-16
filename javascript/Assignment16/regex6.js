/**
 * REGEX ASSIGNMENT
 * Assignment 16 - Exercise 6 
Create a function that takes a word and returns true if the word
has two consecutive identical letters.
Examples
doubleLetters("loop") ➞ true
doubleLetters("yummy") ➞ true
*/

function doubleLetters (w) {
    hasDouble = false;
    const regex = /./;
    if (/(.)\1/.test(w)) {
        hasDouble = true;
    }
    return hasDouble; 
}

arr = ["loop", "yummy", "return", "carry", "enter", "tarot", "parrot"];
arr.forEach(element => {
    console.log( "doubleLetters( " + element + ")  : " + doubleLetters(element));    
});
