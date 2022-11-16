/**** Assignment 11
* Exercise -5 
* Debug the given JavaScript program and execute the correct code.
***/ 

function thirdLargest(arr, arr_size) {
    /* There should be at least three elements */
    if (arr_size < 3) {
        document.write(" Invalid Input "); 
        return;
    }

    let first = arr[0];
    for (let i = 1; i < arr_size ; i++) {
        if (arr[i] > first)
            first = arr[i];
    }

    let second = Number.MIN_VALUE; 
    for (let i = 0; i < arr_size ; i++) {
        // console.log("arr[i] " + arr[i] + " second 1 : " + second); 
        if (arr[i] < first &&  arr[i] > second)
            second = arr[i];
    }

    let third = Number.MIN_VALUE; 
    for (let i = 0; i < arr_size ; i++) {
        if (arr[i] < first && arr[i] < second && arr[i] > third)        
            third = arr[i];
    }
    console.log("The third Largest " + "element is ", third); 
    // document.write("The third Largest " + "element is ", third);
}

// let arr = [12, 13, 1, 10, 34, 16]; 
let arr = [336, 99, 1, 54, 34, 16]; 
let n = arr.length;
thirdLargest(arr, n);
