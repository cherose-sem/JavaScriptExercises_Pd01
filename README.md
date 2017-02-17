# JavaScriptExercises_Pd01

#### Explain and Reflect:
##### Explain differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.
Key differences between Java and JavaScript:
-Java is an OOP programming language while Java Script is an OOP scripting language.
-Java creates applications that run in a virtual machine or browser while JavaScript code is run on a browser only.
-Java code needs to be compiled while JavaScript code are all in text.
-They require different plug-ins.

In Java we can have variables that points to an object               
A myA = new A();

In JavaScript we can have variables that points to a function
var f1 = function(){...}

In Java we can pass objects as parameters                            
someFunction(myA);

In JavaScript we can pass functions as parameters
someFunction(f1)

In Java we can return objects from methods                            
A method(){                                                            
  return new A();                                                         
}

In JavaScript we can return functions from functions
 function someFunction(){
 return function() {...};
}

In Java we can have nested classes                                    
class A {
 class Inner { .. } 
}        

In JavaScript we can have nested functions
function someFunction(){
  function anotherFunction()  {...};
}

##### Explain the two strategies for improving JavaScript: ES6 (es2005) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node, in (many different) Browsers
es2015 →
-The natural evolution of JavaScript, bringing features like arrow functions, Classes and Inheritance, promises, Generators and much more.
-Can be used in "all" browsers using a polyfil or a transpiler
-Can be used with NodeJS (almost) out of the box with LTS v6.x, otherwise via a transpiler (Babel)
-Available out of the box with newer versions of ReactJS

Typescript
-A free open source language, developed and maintained by Microsoft. It is a strict superset of JavaScript, and adds optional static typing and many of the features from es2015 and es2016
-Can (obviously) be used in all browsers when compiled into ES5
-Can be used with NodeJS with a typescript compiler
-Angular 2 is designed to be written with TypeScript (but can also be used with ES 5 and es 2015)

Setting up WEbStorm for es2015 Development

Use this link for information Transpiling in Webstorm
Node version LTS v6.x → You (most likely) only need the step "set ECMAScript 6 as the JavaScript version"
Node version LTS v4.x → You need the step above + the step "Setting up BABEL FILE WATCHER"

##### Explain generally about node.js, and when it “makes sense” and npm, and how it “fits” into the node echo system.
Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.
It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices

Some statistics about npm, the package manager for Node.js.
-At over 350,000 packages, the npm registry contains more than double the next most populated package registry (which is the Apache Maven repository). In fact, it is currently the largest package registry in the world."
-In the preceding four weeks, users installed 18 billion packages.
-This translates into 6 billion downloads, since 66 percent of the installs are being served from the cache.
-ping.npmjs.com "shows that the registry's services offer a 99.999 uptime."
-Every week roughly 160 people publish their first package in the registry

Applications for which Nodejs is suited:
-Applications involving a lot of IO
-Real Time chat Server
-Web servers
-REST servers
-Streaming servers
-Games

-Because of it's non blocking API (think CA-1)
-Builds high-performance servers
-Node, combined with a browser, a document DB (ex. MongoDB) and JSON offers a Unified JavaScript Development Stack
-JavaScript on the Client
-JavaScript on the Server
-JavaScript on the DataBase
-Perfect for Single Page Apps

##### Explain about the Event Loop in Node.js
Node.js is a single-threaded application, but it can support concurrency via the concept of event and callbacks. Every API of Node.js is asynchronous and being single-threaded, they use async function calls to maintain concurrency. Node uses observer pattern. Node thread keeps an event loop and whenever a task gets completed, it fires the corresponding event which signals the event-listener function to execute.

![alt tag](https://i.stack.imgur.com/cRq1h.jpg)
With a non-blocking API there are "no" blocking problems

##### Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises
-Split the dependency tree into chunks loaded on demand
-Every static asset should be able to be a module
-Keep initial loading time low
-Ability to integrate 3rd-party libraries as modules
-Ability to customize nearly every part of the module bundler

Based on the exercises, we included babel-loader to process the imported javascript file and exclude node_modules to get some performance. We have included CSS frameworks like Bootstrap.So having Webpack to process everything for us, launch the webpack-dev-server and see the application working in http://localhost:8080.

##### Explain the purpose of “use strict” and also Linters, exemplified with ESLint 
It is a literal expression, ignored by earlier versions of JavaScript. The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

With strict mode, you can not, for example, use undeclared variables.
Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode).

#### Explain using sufficient code examples the following features in JavaScript. 
#### Variable/function-Hoisting
JavaScript does not support block scoping.
Variable definitions are not scoped to their nearest enclosing statement or block, as in Java, but rather to their containing function.

In JavaScript, a variable can be declared after it has been used.
JavaScript only hoists declarations, not initializations.

##### this in JavaScript and how it differs from what we know from Java/.net.
-Whenever a function is contained in the global scope, the value of this inside of that function will be the global object (window in a -browser) or undefined if in strict mode
-Whenever a function is called by a preceding dot, the object before that dot is this.
-Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
-Whenever JavaScript’s call or apply method is used, this is explicitly defined.

In JavaScript this always refers to the “owner” of the function we're executing, or to the object that a function is a method of.

In Java, this refers to the current instance object on which the method is executed.

var myObject = {
	firstName:"Donald",
	lastName: "Duck",
	fullName: function () {
    	return this.firstName + " " + this.lastName;
	}
}
myObject.fullName();  

public person(String name, int age) {
    	this.name = name;
    	this.age = age;
	}

##### Function Closures and the JavaScript Module Pattern
A closure is a special kind of object that combines two things:
-A function
-The environment in which that function was created. The environment consists of any local variables that were in-scope at the time that the closure was created

Closures - The Module Pattern
Emulating private methods with closures
JavaScript does not, like Java, provide a native way of providing private methods.
But it is possible to emulate this using closures.

##### Immediately-Invoked Function Expressions (IIFE)
IFE's or Self Invoking Functions is a pattern to make a function invoke itself
IIFE's can be used to avoid variable hoisting from within blocks, protect against polluting the global environment and simultaneously allow public access to methods while retaining privacy for variables defined within the function.

A common way to implement IIFE's is to enclose both the function expression and invocation in parentheses
Protect against polluting the global environment
#### JavaScripts Prototype
All objects in JavaScript are descended from Object

All objects inherit methods and properties from Object.prototype, although they may be overridden. For example, other constructors' prototypes override the constructor property and provide their own toString() methods.

Since all functions are Object they all inherit call() and apply() which you can use to invoke the function with your this value as argument

The Object.create() method creates a new object with the object which should be the prototype of the newly-created object.

All objects inherit a constructor property from their prototype, which is the function that creates on objects prototype

Each Constructor Function has a prototype property that refers to an object. That object becomes the prototype of all instances created with the Constructor Function

We can attach new functions and properties to this object, which will be shared by all (Car) instances

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.show = showCar;
}
Car.prototype.showCar = function(){
  console.log("A Beautiful " + this.year + " " + this.make + " " + this.model);
}
//Creating instances
var car1 = new Car("Volvo", "V70", 2005);
car1.showCar();

##### User defined Callback Functions
Writing our own function that takes a callback as a parameter
We will use some of the JavaScript array methods to learn how to write our own method that takes callbacks. First we need to understand what they each do

var names = ["kurt","ole","hans","ib"];

//This is MY version of forEach
function myforEach(arr,callback){
    for(var i =0; i < arr.length; i++){
        callback(arr[i]);
    }
}

//This is how I call (use) it
//Observe that it is provided with a callback
//identical to the one given to the original
//forEach method
myforEach(names,function(name){
    console.log(name);
    })
       
##### Provide examples of user defined reusable modules implemented in Node.js

module.exports.myFunction = f; 

const f = require('./myModule.js');

#### es2005 -->
##### Provide examples and explain the es2005 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.


##### Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.


#### Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.


#### Provide examples with es6, running in a browser, using Babel and Webpack



