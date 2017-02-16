//OBJECTS
//1.)
let cherry = {name: "Cherry Rose", birthday: "11-02-1992", hobby:"painting", email: "cph-cs241@cphbusiness.dk"}

for (var c in cherry) { // iterates over an object's properties
  console.log(c);
}

delete cherry.hobby

for (var c in cherry) { 
  console.log(c);
}

// Using hasOwnProperty to test for a property's existence
console.log(cherry.hasOwnProperty("name"))
console.log(cherry.hasOwnProperty("hobby")) //this is already deleted

//2.)
function Person(fname, lname, age) {
    var fname = fname;
    var lname = lname;
    var age = age;

    return{
    getPersonDetails: function () {
        return fname + ", " + lname + ", " + age;
    },
    setAge: function (newAge) {
        age = newAge;
                            },
    setFirstName: function (newName) {
        name = newName;
    }
 }
}


var newPerson = new Person("Cristina", "Semena", 29);
console.log(newPerson.getPersonDetails());

newPerson.setAge(195252);
newPerson.setFirstName("Kring");
console.log(newPerson.getPersonDetails());

//3.
let obj = {prop1: "aaaaa", prop2:"bbbb", prop3:"ccccc"};

function listAllProperties(o) {
	var objectToInspect;     
	var result = [];
	
	for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {  
      result = result.concat(Object.getOwnPropertyNames(objectToInspect));  
	}
	
	return result; 
}

console.log(listAllProperties(obj));

delete obj.prop1

console.log(listAllProperties(obj));

//REUSABLE MODULES WITH CLOSURES
//1.)Close Counter Example
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}
var myFunc = makeFunc();
//myFunc(); // this has become a CLOSURE

// Implement closeure counter, reusable function using the Module pattern
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {changeBy(1);},
    decrement: function() {changeBy(-1);},
    value: function() { return privateCounter;}
  } // returns an object with 3 statements due to {} brakets
};
var counter1 = makeCounter();
var counter2 = makeCounter();
//gets to the local variable privateCounter
//counter1.increment();
//counter1.increment();
//alert(counter1.value()); /* Alerts 2 */

//2
var person = function() {
  var age = 0
  var name = ""
  var res = ""
  function update() {
    res = name + "," + age;
  }
  return {
    setAge: function(newAge) {
      age = newAge
      update();
    },
    setName: function(newName) {
      name = newName
      update();
    },
    getInfo: function() { return res;}
  } // returns an object with 3 statements due to {} brakets
};
var newPerson = person();
newPerson.setAge(10)
newPerson.setName("CHERRY")
console.log(newPerson.getInfo())
