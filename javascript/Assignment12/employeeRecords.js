/* 
Assignment 12 - Exercise 1

Write a JavaScript program to map Employee Records according to Employee
IDs.
Employee: { id, name, salary }
a) Print an array of all employee ids
b) Print count of employees
c) Print the name of the employee according to their id { key: value }
d) Store the salaries of all employees in an array
e) Calculate the average salary the company is paying to its employees
Sample Input:

"id": [ 67, 48, 29 ]
"name": [ "Hitanshu", “Ninad”, “Amandeep” ]
"salary": [ 75000, 82000, 98000 ]
Output:
[ 67, 48, 29 ]
3
67: Hitanshu
48: Ninad
29: Amandeep
[ 75000, 82000, 98000 ]
85000
*/

var employee = {
    "id": [ 67, 48, 29 ],
    "name": [ "Hitanshu", "Ninad", "Amandeep" ],
    "salary": [ 75000, 82000, 98000 ]
}

// a) Print an array of all employee ids
console.log (employee.id);

// b) Print count of employees
console.log (employee.id.length);

// c) Print the name of the employee according to their id { key: value }
for (let i = 0; i < employee.id.length ; i++) { 
    console.log (employee.id[i] + ": " + employee.name[i]);
}

// d) Store the salaries of all employees in an array
var empSalary  = employee.salary
console.log (empSalary);
 
// e) Calculate the average salary the company is paying to its employees
var sum = 0 ;

// e.1 use foreach to calculate sum of elements
// empSalary.forEach(e => { sum += e });

// e.2 use the simplified version of reduce ES6 to calculate sum of elements
// sum = empSalary.reduce( (x,y) => x+y, 0); 
// console.log (sum/empSalary.length || 0);

// e.3 ES6 use the arrow function and simplified version of reduce ES6  to calculate sum of elements
const avgSal = empSalary => empSalary.reduce( (x,y) => x+y, 0)/empSalary.length;
console.log (avgSal(empSalary));
