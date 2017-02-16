//Exercise 1
//Constant
//Constants are block-scoped, much like variables defined using the let statement. The value of a constant cannot change through re-assignment, and it can't be redeclared. 
const PI = 3.141593
PI > 3.0 
// console.log(PI);

//Scoping
// identifiers declared with let and const do have block scope:The x or y is limited in scope to the block in which it was defined.
//Variables declared with var do not have block scope.
let a=[1,2,3]
let b=[1,4]
for (let i = 0; i < a.length; i++) {
    let x = a[i]
}
for (let i = 0; i < b.length; i++) {
    let y = b[i]
    
}

let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
    // console.log("INDEX:" + i + "--> " + callbacks[i]())
}
callbacks[0]() === 0;
callbacks[1]() === 2;
callbacks[2]() === 4;
// console.log(callbacks[0]() === 0)
// console.log(callbacks[1]() === 2)
// console.log(callbacks[2]() === 4)

//The block statement is often called compound statement in other languages. It allows you to use multiple statements where JavaScript expects only one statement. 
{
    function foo () { return 1 }
    foo() === 1
    {
        function foo () { return 2 }
        foo() === 2
    }
    foo() === 1
}


//Exercise 2
//a2.) ECMA2015 supports arrow functions instead of writing function(){...}
var evens = [2,4,10,16];
var odds = evens.map(v => v+1)
console.log(odds);
//as a result, all the elements are undefined. The statement block behaves like a normal function body. For example, you need return to give back a value. With an expression body, the expression is always implicitly returned.
var odds = evens.map(v => {
  return v+1 
});
console.log(odds);

//Exercise 3
//A. ES6  Use `.bind`: 
// bind the value of "this" on the method
// to try and force it to be what you want
//In ES5 can create a reference to this as self. After bind became available we could forgo creating the reference to self.
function Numbers(numbs) {

  this.nums = numbs;
  this.fives = [];
  this.nums.forEach(function (v) {
    if (v % 5 === 0) {
      this.fives.push(v);
    }
  }.bind(this));
}
var numbers = new Numbers([1,3,5,10,14,20,33,50]);
console.log(numbers.fives);

// --- OR ---
//In ES6, use an arrow function. Since it is created within  
    // the scope of the constructor function it is bound to this lexical scope.
function Numbers1(numbs) {
    this.nums = numbs;
    this.fives = [];
    this.nums.forEach(v => {
        if(v % 5 === 0){
            this.fives.push(v)
        }}
    )};

var numbers1 = new Numbers1([1,3,5,10,14,20,33,50]);
console.log(numbers1.fives);

//B:
// var counter = {
//     count: 0,
//     inc: function () {
//       this.count++;
//     }
//   }
// var func = counter.inc; //Store "reference" to inc
// func();
// console.log(counter.count); //Still zero
// counter.inc();
// console.log(counter.count); //Now one


var counter = {
    count : 0 ,
    inc : () =>this.count++
}
var func = counter. inc ; //Store "reference" to inc
func();
console.log ( counter.count ); //Still zero
counter.inc();
console.log( counter.count ); //Now one

//The ES6 arrow function syntax will always override any previously bound or dynamically determined value of “this”. I SHOULD PROBABLY JUST KEEP THE FIRST ONE.

