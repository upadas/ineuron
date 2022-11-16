/***
 * Assignment 20
 * Exercise 9 - What is the best way to avoid deadlocks when using async/await? examples
 */

/*
Answer:
One of the best ways to avoid deadlocks when using async/await is to 
avoid using the await keyword inside of a lock statement. 
If you need to use await inside of a lock statement, then you should use 
a SemaphoreSlim object instead of a regular lock object.
*/
