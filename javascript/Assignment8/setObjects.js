/*
Assignment 8

1. Can we put duplicate values in the set object ?
2. Write the syntax for
    a) Creating new set object
    b) Adding new element to set object
    c) Deleting element from set object
3. Create a set object with four random numbers from 0 to 10.
Check if this newly created set object has 8 in it. Use set object methods.

*/

// 1. Can we put duplicate values in the set object ?
// Ans: No. A set object can contain only unique values

//2. Write the syntax for
// a) Creating new set object
const car = new Set("Tesla", 40000, [1, 2, 3]);
//b) Adding new element to set object
car.add("test1");
car.add("test2");
//c) Deleting element from set object
car.delete("test2");
car.delete("40000");

// 3. Create a set object with four random numbers from 0 to 10. Check if this newly created set object has 8 in it. Use set object methods.
const randSet = new Set();
function getRandom() {
  const max = 10,
    min = 0;
  //   return Math.floor(Math.random() * max);
  return Math.floor(Math.random() * (max - min) + min);
}

for (i = 0; i < 4; i++) {
  randSet.add(getRandom());
}
console.log(randSet);
console.log("Set has 8?" + randSet.has(8));
