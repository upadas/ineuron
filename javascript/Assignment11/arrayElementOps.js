/* 
Assignment 11

1. Write a JavaScript program to take an array as input from the user and calculate
the sum of numbers in odd places and the sum of numbers at even places.
    a) Print the difference between the two sums
    b) Print the number of elements in odd places
    c) Print the number of elements in even places
    d) Print the average of all elements in the array
    e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even Places
Sample Input:
    [ 1, 2, 3, 4, 5 ]
Explanation:
    Sum of Numbers at Odd Places = 1 + 3 + 5 = 9
    Sum of Numbers at Even Places = 2 + 4 = 6
    Difference = 9 - 6 = 3
Sample Output:
    Difference = 3
    Odd Elements = 3
    Even Elements = 2
    Average = 3
    GCD = 3
*/

function arrayElementOps(arr) {

    const array_size = arr.length;

    if (array_size < 2 ){
        document.write("Invalid input: Array must contain at least 2 elements!"); 
        return;
    }

    var sumEvenEl = sumOddEl = cntOdd = cntEven = 0;

    for (let i = 1; i <= array_size ; i++) {
        if ( i % 2 === 0) {
            cntEven++;
            sumEvenEl += arr[i-1];
        }
        else {
            cntOdd++;
            sumOddEl += arr[i-1];
        }
    }

    function findGCD(arr, array_size) {
        let GCD = arr[0];
        for (let i = 1; i < array_size; i++)
        {
            GCD = gcd(arr[i], GCD);
            if(GCD == 1)
                return 1;
        }
        return GCD;
    }
    
    function gcd (x, y) {
    
        if (x===0)
            return y;
        else if (y===0)
            return x;
        else
            return gcd ( y % x, x);
    
    }

    console.log("Difference : ", sumOddEl - sumEvenEl); 
    console.log("Count of odd elements : ", cntOdd); 
    console.log("Count of even elements : ", cntEven); 
    console.log("Avg : ", (sumEvenEl+sumOddEl)/array_size); 
    console.log("GCD : ", findGCD(arr,array_size)); 
}

let arr = [ 2, 4, 6, 8, 16, 24 ];
arrayElementOps (arr);

