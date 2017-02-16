//EXERCISE 4
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

console.log(message)

//EXERCISE 5
//A
function f(x,y,bln,z,str,arr,date, obj){
  return `Sum: ${x + y}
rest value 1 is a: ${bln.constructor.name}
rest value 2 is a: ${z.constructor.name}
rest value 3 is a: ${str.constructor.name}
rest value 4 is a: ${arr.constructor.name}
rest value 5 is a: ${date.constructor.name}
rest value 6 is a: ${obj.constructor.name}`
}

console. log ( f( 5 , 2 , true , 2 , "hello World" ,[ 1 , 2 , 3 ], new Date(),{}));

//B It seems like the ... completes the missing arguments needed in function f
var rest = [ true , 2 , "hello World" ,[ 1 , 2 , 3 ], new Date(),{}];
var restParams = [ ... rest];
console. log ( f( 5 , 2 ,... restParams));

//C It gives an array of characters from the returning value of function f
var chars = [... f( 5 , 2 ,... restParams )];
console.log(chars);

//EXERCISE 6
let fName = "Kurt" ;
let lName = "Wonnegut" ;
let age = 98;
//IN ES2015, there is a shorter notation available: 
let obj = {fName, lName, age};

console.log(obj.fName + " "+ obj.lName + "-" + age)

//EXERCISE 7
//A one-liner array matching - swap two values
let fName1 = "Kurt" ;
let lName1 = "Wonnegut" ;
[fName1,lName1] = [lName1,fName1];

console.log( `First: ${ fName1}, Last: ${ lName1} `);

//B Object Matching Shorthand notation
function getPerson(){
    return {
        firstName : "Kurt" ,
        lastName : "Wonnegut" ,
        gender : "Male" ,
        email : "kurt@wonnegut.dk" ,
        phone : "12345" ,
    }
}

//created an object from some of the properties in the returning value/object of getPerson()
var {lastName, phone} = getPerson();

console.log(lastName, phone);