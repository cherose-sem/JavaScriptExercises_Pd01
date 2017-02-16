//EXERCISE 8
//reusable es2015 module

const f = require('./myModule.js');

console. log ( f.myFunction( 5 , 2 , true , 2 , "hello World" ,[ 1 , 2 , 3 ], new Date(),{}));

//EXERCISE 9
//A Creating a class with a constructor, getter/setter and toString functions
class Shape {
    constructor (color){
        this.color = color;
    }
    getArea () {
        return undefined ;
    }
    getPerimeter () {
        return undefined ;
    }

    getColor(){
        return this.color;
    }

    setColor(color){
        this.color = color;
    }

    toString(){
        return `The shape's color is ${this.color} `;
    }
}


let myShape = new Shape('Purple');
console.log(myShape.toString());

myShape.setColor('Blue');

console.log(`Get Color: ${myShape.color}`);

//B Inheritance - overwritten the base functions
class Circle extends Shape{
    constructor(color, radius){
        super(color);
        this.radius = radius;
    }

   getArea(){
        return Math.pow(this.radius, 2) * Math.PI; //A = PI(r^2)
   }

   getPerimeter(){
       return 2 * Math.PI * this.radius; // P = 2*PI*r
   }

   getRadius(){
       return this.radius;
   }
   setRadius(radius){
       this.radius = radius;
   }
}

let circle = new Circle('Red',8);

console.log(`Radius: ${circle.getRadius()}
Area: ${circle.getArea()}
Perimeter: ${circle.getPerimeter()}
`);

//C

class Cylinder extends Circle{
    constructor(color, radius, height){
        super(color,radius)
        this.height = height;
    }
    getArea(){
      this.area = 1;
        return this.area;
   }

   getPerimeter(){
       return undefined;
   }

   getRadius(){
       return this.radius;
   }

   getVolume(){
     this.volume = this.height * (Math.pow(this.radius, 2) * Math.PI);
     return this.volume; //V = A*h
   }

   getHeight(){
       return this.radius;
   }
   setHeight(height){
       this.height = height;
   }

}

let cyl = new Cylinder("Black", 8,9);

console.log(`Height: ${cyl.getHeight()}
Area: ${cyl.getArea()}
Perimeter: ${cyl.getPerimeter()}
Volume: ${cyl.getVolume()}
`);

//D
console.log("D: ")
console.log("Height:" + cyl.height)
console.log("Area:"+ cyl.area)
console.log("Perimeter: "+ cyl.perimeter)
console.log("Volume:" + cyl.volume)


