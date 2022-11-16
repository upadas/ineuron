/**
 * REGEX ASSIGNMENT
 * Assignment 16 - Exercise 2 
Create a function that finds the word "happiness" in the given
string (not case sensitive). If found, return "Hurray!", otherwise
return "There is no happiness.".
Example
findHappiness(“Work makes me happy”) -> There is no happiness.
findHappiness(“You give me the feeling of happiness”) -> Hurray
*/
function findHappiness (str) {

    if (str===""){
        console.log("Invalid String");
        return;
    }
    // if (str.match(/happiness/ig)){
    if (/happiness/ig.test(str)){
            return "Hurray!"
    }
    else {
        return "There is no happiness."
    }

}
var happyOrNot, str;
str = "Work makes me happy";
happyOrNot = findHappiness(str);
console.log (str + " ---> " +  happyOrNot);
str = "You give me the feeling of happiness";
happyOrNot = findHappiness(str);
console.log (str + " ---> " + happyOrNot);


