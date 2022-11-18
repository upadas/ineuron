/* 
    Assignment 2 - Exercise 2 - Write a function using switch case
    to find the grade of a student based on marks obtained 
    objective is to learn the usage of switch case
 */

var scriptArgs = require("minimist")(process.argv.slice(2));
let marks = scriptArgs._[0];

if (!/^\d+$/.test(marks)) {
  console.error("Marks must be numeric, please enter a number");
  process.exit(1);
}

studentGrade(marks);

function studentGrade(/*int*/ marks) {
  console.log("Marks Entered : " + marks + "\n");

  switch (true) {
    case marks >= 90 && marks <= 100:
      console.log("S Grade" + "\n");
      break;
    case marks >= 80 && marks < 90:
      console.log("A Grade" + "\n");
      break;
    case marks >= 70 && marks < 80:
      console.log("B Grade" + "\n");
      break;
    case marks >= 60 && marks < 70:
      console.log("C Grade" + "\n");
      break;
    case marks >= 50 && marks < 60:
      console.log("D Grade" + "\n");
      break;
    case marks >= 40 && marks < 50:
      console.log("E Grade" + "\n");
      break;
    case marks >= 0 && marks < 40:
      console.log("Student Failed" + "\n");
      break;
    default:
      console.log("Invalid Marks");
  }
}
