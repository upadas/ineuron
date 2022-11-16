/**** Assignment 14 ****/

/*
Exercise 1 
    Write a JavaScript program to:
    a) filter employees according to department = IT
    b) filter employees who earn a salary < 65000
*/

let employees = [
    {"id": 1, "name":"Abhinav", "department":"IT","Salary":75000},
    {"id": 2,"name":"Gaurav","department":"Sales", "Salary":52000 },
    {"id": 3,"name":"Raj","department":"IT","Salary":64000 }
]

// Filter by IT Dept
const deptIT = employees.filter(dept => dept.department === "IT");
console.log(deptIT);

// Filter salary less than 65K
const salFilter = employees.filter(sal => sal.Salary < 65000 ) ;
console.log(salFilter);

/*
Exercise 2


Write a JavaScript program to filter the hospitals according to:
a) Number of Beds > 200
b) Availability of Beds = Yes
c) Location = Pune

*/

let hospitals = [
    {"id": 1,"name":"Hospital A","location":"Delhi","noOfBeds":450,"availability":"Yes"},
    {"id": 2,"name":"Hospital B","location":"Pune","noOfBeds":150,"availability":"No"},
    {"id": 3,"name":"Hospital C","location":"Pune","noOfBeds":350,"availability":"Yes"}
]

// a. Filter by Number of beds > 200
const bedFilter = hospitals.filter( attr => attr.noOfBeds > 200);
console.log("****** a. Filter by Number of beds > 200 ******");
console.log(bedFilter);

// b. Filter availability of beds = YES
const  availabilityFilter = hospitals.filter(attr => attr.availability === "Yes" ) ;
console.log("****** b. Filter availability of beds = YES ******");
console.log(availabilityFilter);

// c. Filter by Location = Pune
const locationFilter = hospitals.filter(attr => attr.location === "Pune" ) ;
console.log("****** c. Filter by Location = Pune ******");
console.log(locationFilter);
