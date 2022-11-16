/**
 * REGEX ASSIGNMENT
 * Assignment 16 - Exercise 1 
 * The time has a format: hours:minutes. Both hours and minutes
have two digits, like 09:00.
Make a regex to find time in the string: Lunch at 10:10 in the room
123:456. In this task there’s no need to check time correctness yet,
so 25:99 can also be a valid result. The regex should not match
333:333.

 */

str = "Lunch at 10:10 in the room 123:456";
var time = str.match(/\D\d{2}:\d{2}\s/g);
console.log(time);