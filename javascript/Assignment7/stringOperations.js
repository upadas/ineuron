/* 
Assignment 7

1. Input a String S, and check its length and if the length is greater than 4,
truncate the input String and output the result -
Input: Ice Output: Ice
Input:Icecream Output:Icec...

2. Input a String S with multiple words, and remove whitespaces and
output the result -
Input: “Hii Boy” Output: “HiiBoy”

3. Input a String S with two words, and replace first word with second word
and display the result -
Input: “Hii Boy” Output: “Boy Hii”

4. Input a String S with a word, and replace character “a” with “x” and
display the result -
Input: “apple” Output: “xpple”

5. What string method can be used to convert string into array ?

6. What string method can be used to check the occurrence of a specified
text in a string?

7. How can you break a string to a newline in Javascript ?

8. Write a Javascript function to test whether the first character of a string
is lowercase.

9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
(any combination) using string methods.
How will you handle that ?

10. Given a String S, achieve following tasks
a) Convert the String into upper case.
b) Convert only the first character to uppercase.

c) Convert the String into lower case.
d) Break the string into two halves and swap them.
e) Count the repeating characters.
f) Reverse the string

*/


/** Due to time constraint input validation has been skipped **/

var scriptArgs = require('minimist')(process.argv.slice(2));
let str=scriptArgs._[0];
let txt=scriptArgs._[1];

// console.log ("str= " + str + "    | txt= " + txt);

var resultStr;
resultStr = truncateString (str);
console.log ("1. String truncated to 4 characters [" + resultStr + "]" );
resultStr = removeSpace (str);
console.log ("2. String with white space removed [" + resultStr + "]" );
resultStr = swapWords(str);
console.log ("3. String with words swapped " + "[" + resultStr + "]" );
resultStr = replaceCharacter(str);
console.log ("4. String where 'x' replaced with 'a' " + "[" + resultStr + "]" );
resultArr = strToArray(str);
console.log ("5. String converted to an array " + "[" + resultArr + "]");
console.log ("6. Text Pattern Match in a string :" + textPatternMatch(str,txt));
resultStr = strNewline(str);
console.log ("7. Break a string into newline " + "[" + resultStr + "]");
console.log ("8. Is the first character of the string lower case? " + isFirstCharLower(str));
handleCaseInsensitive();
strTasks(str);



// 1. truncate input String to 4 characters
function truncateString (str){
    let truncLength = 4;
    if ( str.length > truncLength ){
        return str.slice(0,truncLength);
    }
}

// 2. Remove white spaces from string
function removeSpace (str){
    // return str.trim();
    // return str.match(/\s/s,"");
    return str.replaceAll(" ","");
}

// 3. swap words
function swapWords (str){
    const wordArr = str.split(" ");
    return wordArr.reverse().join(" ");
}

// 4. “a” with “x”
function replaceCharacter(str) {
    return str.replaceAll("x","a");
}

// 5. convert string into array 
function strToArray(str) {
    return str.split('');
}

// 6. occurrence of a specific text in a string
function textPatternMatch(str,txt) {
    var textPatternMatch = false;
    var re = new RegExp(txt,"g");
    if (str.match(re)){
        textPatternMatch = true;
    }
    return textPatternMatch;
}

//7. break a string into a newline? I have no clue what this means! Will implement my interpretation
function strNewline(str) {
    return str.split(' ').join('\n');
}

// 8. Check if first character of a string is lowercase.
function isFirstCharLower(str){
    let isFirstCharLower = false;
    console.log(/^[a-z]/.test(str));
    if (/^[a-z]/.test(str)){
        isFirstCharLower = true;
    }
   return isFirstCharLower;
}

// 9. input if he enters "yes", "YES","Yes" ,etc (any combination) using string methods. 
function handleCaseInsensitive(str){

    const prompt = require('prompt');
    let userInput = "";
    prompt.start();

    prompt.get(['userInput'], function(err, result) {
    if (err) {
        return onErr(err);
    }

    if (result.userInput.toLowerCase() === 'yes' ) {
        console.log("9. Handling yes|YES|Yes| - The user agrees");
        return;
    }
    else {
        console.log("9. Handling yes|YES|Yes| - The user does not agree");
    }

    }); //end prompt

    function onErr(err) {
        console.log(err);
        return 1;
    }

}


//10. String Operations
function strTasks(str){
    // a) Convert the String into upper case.
    console.log ("10. a) String to upper case         :" + str.toUpperCase());

    // b) Convert only the first character to uppercase.
    console.log ("10. b) String to first upper        :" + str.charAt(0).toUpperCase()+ str.slice(1));

    // c) Convert the String into lower case.
    console.log ("10. c) String to lower case         :" + str.toLowerCase());

    // d) Break the string into two halves and swap them.
    console.log ("10. d) Halve string and swap halves : " + str.substring(str.length/2) + " " + str.substring(0,str.length/2));

    // e) Count the repeating characters.
    var obj={};
    for(i = 0, length = str.length; i < length; i++) {
        var c = str.charAt(i)
        obj[c] = (isNaN(obj[c]) ? 1 : obj[c] + 1);
    }
    for (const key of Object.keys(obj)) {
        if (obj[key] === 1) {
            delete obj[key];
        }
    }
    console.log ("10. e) Count of repeating characters in a string " + JSON.stringify(obj));

    // f) Reverse the string
    console.log ("10. f) Reverse String " + str.split('').reverse().join('') );

}




