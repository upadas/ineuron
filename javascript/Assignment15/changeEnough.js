/**** ASSIGNMENT 15

Exercise 5:

Given a total due and an array representing the amount of
change in your pocket, determine whether or not you are able to pay
for the item. Change will always be represented in the following
order: quarters, dimes, nickels, pennies.

To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true,
since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives
you 6.25 + 2 + .25 + 0 = 8.50.
Examples
changeEnough([2, 100, 0, 0], 14.11) ➞ false

changeEnough([0, 0, 20, 5], 0.75) ➞ true
changeEnough([30, 40, 20, 5], 12.55) ➞ true
Notes
● quarter: 25 cents / $0.25
● dime: 10 cents / $0.10
● nickel: 5 cents / $0.05
● penny: 1 cent / $0.01

****/

function changeEnough (change, due){
    var isChangeEnough = false;
    var totalInDollars = 0;
    var changeDenomination = [25, 10, 5, 1];

    // Cover base case - Is array empty / is total due N/A
    const changeInDollars = change.reduce((totalInDollars, denomCnt, denomIndex) => {
        return totalInDollars += (denomCnt * changeDenomination[denomIndex])/100;

    }, 0);

    console.log ("changeInDollars " + changeInDollars +  " | totalDue " + totalDue)
    if (changeInDollars >= totalDue) {
        isChangeEnough = true;
    }
    
    return isChangeEnough;
}

// var changeArr = [2, 100, 0, 0];
// var totalDue = 14.11;
// var changeArr = [0, 0, 20, 5];
// var totalDue = 0.75;
var changeArr = [30, 40, 20, 5];s
var totalDue = 12.55;

console.log (changeEnough (changeArr, totalDue));
