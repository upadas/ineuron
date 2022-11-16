/*
Assignment 9

    1. Carefully observe this example.
        a) Is the InnerFunction() a closure?
        b) What is output of this program

    function OuterFunction()    { 
        var outerVariable = 100;
        function InnerFunction() {
            alert(outerVariable);
        }
        return InnerFunction;
    }
    var innerFunc = OuterFunction();
    innerFunc();

    2. What is the difference between a closure and a scope ?
    3. What is a lexical scope and how is it related to closure?
    4. Output of following closure ?
    for (var i = 0; i < 3; i++) {
        setTimeout(function log() {
        console.log(i); // What is logged?
        }, 1000);
    }

*/

/****** FIND ANSWERS BELOW ****/
// 1.
    //a) Yes, innerFunction is a closure by definition
    //b) Alert with O/P 100
// 2. Variables have  two different scopes, local or global based on whether they are defined inside a function or a block or outside.
// closure is a nested function named or unnamed
// 3. if a variable defined is outside a function but can be accessed inside a function it has lexical scope 
// 4. SetTimeout is only executed once, function log is executed after waiting 1 sec.
// The  variable i is available to the closure and 3 is printed thrice to the console
// as the loop is already executed thrice before the 1 sec lapses
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i); // What is logged?
    }, 1000);
}
