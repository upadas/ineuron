/***
 * Assignment 18 - Generators
 */

// Exercise 1: What is the difference between a generator and a function?

// Answer: 
/***
 * Differences:
 * 1. Generator functions use the  "function*" syntax
 * 2. Generators allow you to define an iterative algo whose execution is not continuous
 * 3. Generator functions return a special type of iterator called generator    
 * 4. generator functions return with yield keyword and normal functions use thr keyword return
 * 5. The generator function can be called as many times as desired, and returns a new Generator each time. 
*/


// Exercise 2: What is the syntax of a generator?

function* generator(i) {
    yield i;
    yield i + 10;
}
const gen = generator(10);
console.log(gen.next().value);
// expected output: 10
console.log(gen.next().value);
// expected output: 20


function* func1() {
    yield 42;
}
function* func2() {
    yield* func1();
}

const iterator = func2();
console.log(iterator.next().value);
// expected output: 42

function* g1() {
    yield 2;
    yield 3;
    yield 4;
  }
  
  function* g2() {
    yield 1;
    yield* g1();
    yield 5;
  }
  
  const iterator1 = g2();
  
  console.log(iterator1.next()); // {value: 1, done: false}
  console.log(iterator1.next()); // {value: 2, done: false}
  console.log(iterator1.next()); // {value: 3, done: false}
  console.log(iterator1.next()); // {value: 4, done: false}
  console.log(iterator1.next()); // {value: 5, done: false}
  console.log(iterator1.next()); // {value: undefined, done: true}



// const GeneratorFunction = function* () {}.constructor;
// new GeneratorFunction(functionBody)
// new GeneratorFunction(arg0, functionBody)
// new GeneratorFunction(arg0, arg1, functionBody)
// new GeneratorFunction(arg0, arg1, /* … ,*/ argN, functionBody)



// Exercise 3: Are function generators iterable in JavaScript?
/*** Answer: Calling a function generator creates an iterable ***/



// Exercise 4: Create a generator for multiplying?
// Output -
// > 2 * 2 = ?
// > 4
// > 3 + 3 = ?
// > 6
// > true

function* gen3() {
    let mult = yield "2 + 2 = ?";
    console.log(mult);
    let sum = yield "3 * 3 = ?"
    console.log(sum);
}
  
let generator3 = gen3();
console.log(generator3.next().value ); 
console.log(generator3.next(4).value );
console.log(generator3.next(9).done );

// function* basicMathOpsGen(){
//     console.log("2 * 2 = ?");
//     yield 2*2;
//     console.log("3 + 3 = ?");
//     yield 3+3;
// }

// var generator = basicMathOpsGen();
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().done);

// Exercise 5: Print an infinite series of natural numbers using a generator.

function* infiniteNatNumSeries (i){
    while(true){
        yield i++;
    }
}
const infiniteSeriesGen = infiniteNatNumSeries(0);
// console.log(infiniteSeriesGen.next().value);
// console.log(infiniteSeriesGen.next().value);
// console.log(infiniteSeriesGen.next().value);
for (let num of infiniteSeriesGen) {
    console.log(num);
    if (num === 10) {
        break;
    }
}

// Exercise 6: Create a generator that can throw an exception.

function* runQuery () {
    try {
        var db = yield DBEngine.open("myDatabase");
        var res = yield db.query("SELECT name FROM users");
        return res;
        // throw(new Error ("ReferenceError: function XYZ is not defined"));
    } 
    catch (e) {
        if (e || e instanceof ReferenceError) {
            console.log(e); 
        }
    }
}

const g = runQuery();
g.next();

let err = new Error("Something is wrong!");
g.throw(err);
