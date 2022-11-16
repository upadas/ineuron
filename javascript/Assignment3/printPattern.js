/* 
    Assignment 3 - Exercise 1
    Using for loops, write a Javascript program to output the following
    pattern
    1
    2 3
    4 5 6
    7 8 9 10
*/

printNumPattern();

function printNumPattern() {
    let newlineCtr = 1;
    let printedCtr = 1;
    for (i=1 ; i <= 10 ; i++){
        process.stdout.write(i.toString() + " ");
        if ( printedCtr==newlineCtr){
            console.log("\n");
            printedCtr=0;
            newlineCtr++;
        }
        printedCtr++;
    }

}