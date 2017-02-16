//HOISTING
// Hoisting is JavaScript's default behavior of moving all declarations to the top
// of the current scope (to the top of the current script or the current function).
var x; 
x = 5; 

function hoistingDemo1() {
  console.log("Value of myCoolObject: " + myCoolObject);

  if (!myCoolObject) {
    var myCoolObject = {value: "Wau, I'm cool"};
    console.log(myCoolObject.value);
  }
}

function hoistingDemo2(){
  f1(); // will print out
  f2(); // undefiend
  function f1(){
    console.log("I'm f1");
  }
  var f2 = function(){
    console.log("Yes, but I'm f2");
  }
}

//this IN JAVASCRIPT
// setting this using either call(), apply() or bind().
var comic = {
    firstName:"Donald",
    lastName: "Duck",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
comic.fullName();         // Will return "Donald Duck"

// this in Java 
// public person(String name, int age) {
//         this.name = name;
//         this.age = age;
//     }

// call() and this
//call attaches this into function and executes the function immediately:
// var greetings = {  
//   name: "Donald Duck",
//   hello: function(thing) {
//     console.log(this.name + " says hello " + thing);
//   }
// }
// person.hello.call(greetings, "world"); // output: "Donald Duck says hello world"

// bind() and this
//bind attaches this into function and it needs to be invoked separately like this:
var greetings2 = {  
  name: "Donald Duck",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
  }
}
var helloFunc = greetings2.hello.bind(greetings2);
helloFunc("world");  // output: "Donald Duck says hello world"

// apply() and this
function personContainer() {
  var person22 = {  
     name: "Donald Duck",
     hello: function() {
       console.log(this.name + " says hello " + arguments[1]);
     }
  }
  person22.hello.apply(person22, arguments);
}personContainer("world", "mars"); 
// output: "Donald Duck says hello mars", note: arguments[0] = "world" , arguments[1] = "mars”  

//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
//The Anonymous Function:
var foo = "foo";

(function (innerFoo) {
    // Outputs: "foo"
    console.log(innerFoo);
})(foo);
//A function, without a name, is created and then called (invoked) immediately via the () at the very end.
