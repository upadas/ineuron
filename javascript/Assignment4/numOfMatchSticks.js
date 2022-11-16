/*
    Assignment 4 
    Create a function that takes a number (step) as an argument and returns the
    number of matchsticks in that step. See step 1, 2 and 3 in the image above.
    Take input from the user in the function parameter and return the output
    using the return statement.

    examples-
    matchHouses(1) ➞ 6

    matchHouses(4) ➞ 21
    matchHouses(87) ➞ 436
    */

    var scriptArgs = require('minimist')(process.argv.slice(2));
    let step=scriptArgs._[0];
    if (!/^\d+$/.test(step)){
        // if the entered values are not numbers, display error message
        console.log("Err.. Please enter a valid number");
        process.exit(1);
    }

    console.log("matchHouses(" + step + ") " + "-> " + matchHouses(step));

    function matchHouses (step) {
        /*  A match house is built with a rectangle at the bottom and a triangle at the top'
            As the triangle sits at the top of the rectangle to make the house, a match stick
            would be shared between the rectangle and the triangle requiring one less stick
            
            Two houses would require 3 three less sticks, one shared wall of the 2 rectangles
            and two for each house shared with the triangles and the algo goes on.
        */

        const noOfSticksForRectangle = 4;
        const noOfSticksForTriangle = 3;
        numOfSharedSticks =  (step-1) + step;
        matchSticksRequired = step * (noOfSticksForRectangle + noOfSticksForTriangle) - numOfSharedSticks // 1 shared
        return matchSticksRequired;
    }

