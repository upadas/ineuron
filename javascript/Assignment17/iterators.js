/*** Assignment 17 
 * Iterators

5. What are the different ways of iterating through an array?
demonstrate them.
*/

/***** 
 * 1. Create a function to iterate over the following list [“John”, “Rohn”, “Danny”, “James”]
 * *****/ 
function myIterator (arr) {
    let nextIdx = 0;
    return {
        next () {
            return nextIdx < arr.length 
            ? { 
                value: arr[nextIdx++], 
                done: false,
            } 
            : { 
                done: true,
            }
        },    
    };
}

const arr = ["John", "Rohn", "Danny", "James"];
const it = myIterator (arr);

console.log("/**********  Exercise 1 ************/")
console.log (it.next().value);
console.log (it.next().value);
console.log (it.next().value);
console.log (it.next().value);

/***** 
 * 2. Iterate over all the characters of the word “iNeuron”.
 ******/ 

console.log("/**********  Exercise 2 ************/")

const str = "iNeuron";
// Supported in ES6

/*** Using Iterables */
console.log("Method 1: Looping over a string using for loop");
for (i=0 ; i < str.length ; i++) {
    console.log (str[i]);
}
console.log("Method 2: Looping over a string using for of loop");
for (const c of str) {
    console.log(c);
}
console.log("Method 3: Looping over a string using forEach");
// ...str].forEach(c => console.log(c));
Array.from(str).forEach(c => console.log(c));

console.log("Method 4: Looping over a string using map");
[...str].map(char => console.log(char));
// str.split('').map(char => console.log(char));

console.log("Method 5: Looping over a string using for and charAt");
for (i = 0; i < str.length; i++){
    console.log(str.charAt(i));
}

/***** 
 * 3. Create a functional iterator, with a next function.
 * *****/ 
console.log("/**********  Exercise 3 ************/")

const returnIterator = (arr) => {
    let i = 0;
    return next = () => {
        const element = arr[i++];
        return element;
    };
}

const iter = returnIterator(arr);
console.log(" 1. " + iter());
console.log(" 2. " + iter());
console.log(" 3. " + iter());
console.log(" 4. " + iter());


/**
 * 4. In the following two arrays find which two elements match
using iterators.
Array 1 - [“a”, “b”, “c”, “d”]
Array 2 - [“e”, “f”, “g”, “h”, “a”, “i”, “j”]
*/
console.log("/**********  Exercise 4 ************/")
function myIter (arr) {
    let nextIdx = 0;
    return {
        next () {
            return nextIdx < arr.length 
            ? { 
                value: arr[nextIdx++], 
                done: false,
            } 
            : { 
                value: undefined, 
                done: true,
            }
        },    
    };
}

const array1 = ["a", "b", "c", "d"];
const array2 = ["e", "f", "k", "h", "m", "i", "a"];
const commonElements = [];
it1 = myIter(array1);
array1.forEach( el => { 
    if (array2.includes(it1.next().value)) {
        commonElements.push(el);
    }
});
console.log (commonElements);

/*** 
 * Exercise 5. What are the different ways of iterating through an array?
 * demonstrate them. 
****/

console.log("/**********  Exercise 5 ************/")
console.log("**** Ans: Demonstrated in the above examples ***");


