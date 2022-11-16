/*
Assignment 5

    Write a JavaScript program to get the volume of a Cylinder, Sphere and
    Cone with four decimal places using objects and classes.
    Create classes for volumes for each geometric shape which returns the
    output using the getVolume() method.

    eg. to get volume of cylinder:
    
    let obj= new Cylinder(radius,height);
    obj.getVolume();

    Formulas for volumes of the shapes-
    1) Cylinder : Volume    = πr2h      - where r is the radius and h is the height of the cylinder.
    2) Sphere   : Volume    = 4/3πr3    - where r is the radius
    3) Cone     : Volume    = πr2h/3    - where r is the radius and h is the height of the cone.

*/

/****** CLASS CYLINDER  ******/
//Cylinder Constructor
function Cylinder (height, radius){
    this.height = height;
    this.radius = radius;

    this.getVolume = function() {
        return this.height * Math.PI * Math.pow(this.radius,2);
    }
}

let cyl = new Cylinder(7,4);
console.log ("The height of the cylinder is :" + cyl.height);
console.log ("The radius of the cylinder is :" + cyl.radius);
console.log ("The Volume of the cylinder is   :" + cyl.getVolume().toFixed(4));



/****** CLASS SPHERE  ******/
//Sphere Constructor
function Sphere (radius){
    this.radius = radius;

    this.getVolume = function() {
        return 4/3* Math.PI * Math.pow(this.radius,3);
    }
}

let sph = new Sphere(7);
console.log ("The radius of the sphere is   :" + sph.radius);
console.log ("The Volume of the sphere is   :" + sph.getVolume().toFixed(4));


/****** CLASS CONE  ******/
//Cone Constructor
function Cone (height, radius){
    this.height = height;
    this.radius = radius;

    this.getVolume = function() {
        return Math.PI * Math.pow(this.radius,2) * this.height/3;
    }
}

let cone = new Cone(4,7);
console.log ("The height of the cone is   :" + cone.height);
console.log ("The radius of the cone is   :" + cone.radius);
console.log ("The volume of the cone is   :" + cone.getVolume().toFixed(4));