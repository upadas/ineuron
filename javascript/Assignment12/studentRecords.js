/* 
Assignment 12 - Exercise 2

2. Write a program in JavaScript to map the student ids, names and scores.
    a) Add data for 3 students (use map functions)
    b) Get Student Names using map functions
    c) Delete Student Scores using map functions
    d) Display 1 parameter (only value), 2 parameters (value + key), and 3
    parameters (value + key + map) for the student

Sample Input:
    "id": [ 1, 2, 3 ]
    "name": [ 'Hitanshu', 'Ninad', 'Amandeep' ]
    "scores": [ 90, 88, 92 ]
Output:
    [ 'Hitanshu', 'Ninad', 'Amandeep' ]


    -----one parameter-----
    [ 1, 2, 3 ]
    [ 'Hitanshu', 'Ninad', 'Amandeep' ]
    [ 90, 88, 92 ]


    -----two parameter-----
    id 1, 2, 3
    name Hitanshu,Ninad,Amandeep
    scores 90,88,92
    
    -----three parameter-----
    id 1, 2, 3
    Map(3) {
    'id' => [ 67, 48, 29 ],
    'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
    'scores' => [ 90, 88, 92 ]
    }
    name Hitanshu,Ninad,Amandeep
    Map(3) {
    'id' => [ 1, 2, 3 ],
    'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
    'scores' => [ 90, 88, 92 ]
    }
    scores 90,88,92
    Map(3) {
    'id' => [ 1, 2, 3 ],
    'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
    'scores' => [ 90, 88, 92 ]
    }

*/

// a) Add data for 3 students (use map functions)
//create a map using map object
const students = new Map ();
// add data using map.set
students.set("id" ,[ 1, 2, 3 ]);
students.set("name" ,[ 'Hitanshu', 'Ninad', 'Amandeep' ]) ;
students.set("scores" ,[ 90, 88, 92 ]);

// b) Get Student Names using map functions
console.log (students.get("name"));

// c) Delete Student Scores using map functions
students.delete("scores");
// console.log (students);

// d) Display 1 parameter (only value), 2 parameters (value + key), and 3
// parameters (value + key + map) for the student
// d.1 - 1 parameter
students.set("scores",[ 90, 88, 92 ]);
console.log ("---- one parameter (value) ----");
for (const [key, value] of students.entries()) {
    console.log(value);
}

// d.2 - 2 parameters
console.log ("---- Two parameters (key, value) ----");
for (const [key, value] of students.entries()) {
    console.log(key + " " + value);
}

// d.3 - 3 parameter
console.log ("---- Three parameter (key + value + Map) ----");
for (const [key, value] of students.entries()) {
    console.log(key + " " + value);
    console.log(students);
}
