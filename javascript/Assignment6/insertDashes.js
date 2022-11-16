/**
 * Assignment 6 - Exercise 3
 * 
Write a JavaScript program which accept a number as input in the
function parameter and insert dashes (-) between each two even
numbers.
For example if you accept 025468 as the output should be 0-254-6-8.
computeDash(025468) -> 0-254-6-8
*/

function insertDashes(n){
    var dashInsertedStr;
    var numTOStringArr = String(n).split('');
    dashInsertedStr = numTOStringArr.reduce( (el_prev, el_curr) => {
            var el_prev_str = el_prev;
            if (el_prev.match("-")) {
                el_prev_str = el_prev;
                el_prev = el_prev.split("-")[1];
            }
            if (el_prev % 2 === 0 && el_curr % 2 === 0){
                return el_prev_str + "-" + el_curr;
            }
            else {
                return el_prev_str + el_curr;
            }
        });
    console.log(dashInsertedStr);
}

insertDashes(245468);
// insertDashes(4675896424);
// insertDashes(0675896424);
// insertDashes("0675896424");
