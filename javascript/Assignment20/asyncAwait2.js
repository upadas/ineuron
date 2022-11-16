/***
 * Assignment 20
 * Exercise 2 - Is it possible to use async/await with promise chains? If yes,
how can this be achieved?
 */

/*
Yes. Async/Await are coded only to work with promises and the return promises.
One must await the initial promise in the chain, and then you can continue 
working with the results of that promise as if they were synchronous. 
This can be a useful way to avoid callback hell when working with asynchronous code.
*/
