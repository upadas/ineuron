/*
Assignment 6 - Exercise 1

Perform the following operations to provide the implementation for a
Rectangle class. The operations are:
1. Add an area() method to the Rectangle class.
2. Create a Square class that satisfies the following conditions:
    ○ It is a subclass of Rectangle.
    ○ It contains a constructor and no other methods.
    ○ It can use the Rectangle class' area method to print the area of a Square object.
*/

class Rectangle {
    constructor (length, width) {
      this.length = length;
      this.width = width;
    }
    area() {
        return this.length * this.width;
    }

}

class Square extends Rectangle {
    constructor(side) {
      super(side, side);
    }
}

var square = new Square (50);
console.log("Area of the Square is " + square.area());

