/**** ASSIGNMENT 15

Exercise 3:

Create a function that takes 
* numbers b and m as arguments and
* returns the second derivative of the function f(x)=x^b +x* (e^(b*m))
with respect to x evaluated at x=m, where b and m are constants.

****/

function secondDerivative(b, m) {
  // f"(x)=x^b+x *(e^(b*m))
  let x = m;
  var secondDer = Math.pow(x, b) + x * Math.exp(b * m);
  console.log(secondDer);
}

const b = 3;
const m = 2;
secondDerivative(b, m);
