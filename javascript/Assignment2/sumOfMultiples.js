/* 
    Assignment 2 - Exercise 3 
    Write a JavaScript program to find the sum of the multiples of 3 and 5
    under 1000
 */

const upperLimit = 1000;
//1. coding a function for finding multiples
console.log(
  Array.from(Array(upperLimit).keys())
    .filter(isMultipleOfThreeAndFive)
    .reduce((result, el) => {
      return result + el;
    })
);

//2. Inline filter code for multiples
console.log(
  Array.from(Array(upperLimit).keys())
    .filter((el) => el % 3 === 0 && el % 5 === 0)
    .reduce((result, el) => result + el)
);

function isMultipleOfThreeAndFive(num) {
  if (num % 3 === 0 && num % 5 === 0) return true;
}

// 3. looping over numbers to find multiples and sum them up - and O(n), O(1)
function sumOfMultiples(num) {
  var sum = 0;
  for (var i = 0; i < upperLimit; i++) {
    if (i % 3 === 0 && i % 5 === 0) sum += i;
  }
  return sum;
}
console.log(sumOfMultiples());
