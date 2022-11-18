/* 
Assignment 13 - Exercise 2

Write a JavaScript program to
a) Calculate grades on basis of marks
    >90 = A
    >80 = B
    >70 = C
    >60 = D
    >50 = E
    else = F
b) Map the grades of each student
c) Group students according to the grades they have received and display.


Sample Input:
    let students = [
    { name: "John", marks: “92” },
    { name: "Oliver", marks: “85” },
    { name: "Michael", marks: “79” },
    { name: "Dwight", marks: “95”},
    { name: "Oscar", marks: “64” },
    { name: "Kevin", marks: “48” },
    ];
Output:

{
'A': [ { name: "John", grade: “A” }, { name: "Dwight", grade: “A” } ],
'B': [ { name: "Oliver", grade: “B” } ],
'C': [ { name: "Michael", grade: “C” } ],
'D': [ { name: "Oscar", grade: “D” } ],
'E': [ ],
'F': [ { name: "Kevin", grade: “F” } ],
}
*/

let students = [
  { name: "John", marks: "92" },
  { name: "Oliver", marks: "85" },
  { name: "Michael", marks: "79" },
  { name: "Dwight", marks: "95" },
  { name: "Oscar", marks: "64" },
  { name: "Kevin", marks: "48" },
];

const studentGradesMap = new Map();
var grade;

for (const [key, value] of students.entries()) {
  switch (true) {
    case value.marks >= 90 && value.marks <= 100:
      grade = "A";
      break;
    case value.marks >= 80 && value.marks < 90:
      grade = "B";
      break;
    case value.marks >= 70 && value.marks < 80:
      grade = "C";
      break;
    case value.marks >= 60 && value.marks < 70:
      grade = "D";
      break;
    case value.marks >= 50 && value.marks < 60:
      grade = "E";
      break;
    default:
      grade = "F";
      break;
  }
  studentGradesMap.set(value, grade);
}

// console.log(studentGradesMap);

const studentGradeGrouping = {};
for (const [key, value] of studentGradesMap.entries()) {
  if (!studentGradeGrouping[value]) {
    studentGradeGrouping[value] = [];
    studentGradeGrouping[value].push(key);
  } else {
    studentGradeGrouping[value].push(key);
  }
}

console.log(studentGradeGrouping);
