/**
 * Assignment 11 - Exercise 3 
Write a JavaScript program to flatten the array, ie, turns a deep array into a plain
array. 
Note: Do not use array.flat();
    Sample Input:
    [ 1, 2, [ 3, 4, [ 5 ] ] ]
    Output:
    [ 1, 2, 3, 4, 5 ]
*/

// Method 1 - using recursion, reduce & concat
function flatten(arr) {
  return arr.reduce(function (flat, toFLatten) {
    return flat.concat(
      Array.isArray(toFLatten) ? flatten(toFLatten) : toFLatten
    );
  }, []);
}
var arr = [1, 2, [3, 4, [5]], [6, 7], [8]];
console.log("******* Method 1: using recursion, reduce & concat ******");
console.log(flatten(arr));

// Method 2 - using join, split and map to Int
console.log("******* Method 2: using join, split and map to parseInt ******");
console.log(
  arr
    .join()
    .split(",")
    .map(function (el) {
      return parseInt(el);
    })
);

// Method 3 - using Array.prototype.concat
function flatten2(arr) {
  var flattened = [];
  for (i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattened = [].concat.apply(flattened, arr[i]);
    } else {
      flattened.push(arr[i]);
    }
  }
  return flattened;
}
console.log("******* Method 3: using Array.prototype.concat ******");
console.log(flatten2(arr));
