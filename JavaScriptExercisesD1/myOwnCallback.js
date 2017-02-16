//THE MAGIC CALLBACKS: 02
//Filter with an array parameter

let names = ["Cherry", "Rose", "Epz", "Semeña", "Jimenez"];

function myFilter(arr, callback) {
  let arrayToReturn = [];
  arr.forEach(function (name) {
    let shouldInclude = callback(name);
    if (shouldInclude) {
      arrayToReturn.push(name);
    }
  });
  return arrayToReturn;
};

let names2 = myFilter(names, function (name) {
  return name.length <= 3;
});

console.log("1st FILTER:" + names2);

//Map with an array parameter

function myMap(arr, callback) {
  let arrayToReturn = [];
  for (let i = 0; i < arr.length; i++) {
    arrayToReturn.push(callback(arr[i], i, arr));
  }
  return arrayToReturn;
}

let rows = myMap(names, function (name) {
  return "<td>" + name + "</td>"
});

let rowStr = rows.join(" ");

let table = `<table><tbody> ${rowStr} </tbody></table>`

console.log("1st MAP: " + table);

//THE MAGIC CALLBACKS: 03
//Filter without passing an array as parameter and could be used with any array
Array.prototype.myFilter = function myFilter(callback) {
  let arrayToReturn = [];
  for (let i = 0; i < this.length; i++) {
    let shouldInclude = callback(this[i]);
    if (shouldInclude) {
      arrayToReturn.push(this[i]);
    }
  };
  return arrayToReturn;
};

let newNames = names.myFilter(function (name) {
  return name.length >= 3;
});

let nums = [11, 4, 3, 23, 4];
let newNums = nums.filter(function (n) {
  return n > 10;
});

console.log("2nd FILTER:" + newNames);
console.log("2nd FILTER:" + newNums);

//Map without passing an array as parameter and could be used with any array
Array.prototype.myMap = function myMap(callback) {
  let arrayToReturn = [];
  for (let i = 0; i < this.length; i++) {
    arrayToReturn.push(callback(this[i], i, this));
  }
  return arrayToReturn;
}


let rows1 = names.myMap(function (name) {
  return "<td>" + name + "</td>"
});

let rowStr1 = rows1.join(" ");

let table1 = `<table><tbody> ${rowStr1} </tbody></table>`;

console.log("2nd MAP: " + table1);

//THE MAGIC CALLBACKS: 04
//A Using myMap to create unordered list
let namesAgain = ["Lars", "Peter", "Jan", "Bo"];
let rows2 = namesAgain.map(function (name) {
  return "  <li>" + name + "</li>"
});

let rowStr2 = rows2.join("\n");

let uList = `<ul>` + "\n" + `${rowStr2}` + "\n" + `</ul>`;

console.log("3rd MAP: " + "\n" + uList);

//b. creating two column table: map() + join()

var names3 = [{ name: "Lars", phone: "1234567" }, { name: "Peter", phone: "675843" }, { name: "Jan", phone: "98547" }, { name: "Bo", phone: "79345" }];


let rows3 = names3.myMap(function (person) {
  return "<td>" + person.name + "</td>" + "<td>" + person.phone + "</td>"
});

let rowStr3 = rows3.join(" ");

let table3 = `<table><thead><tr>`+ "NAME"+ `</tr><tr>`+"PHONE" + `</tr></thead><tbody> ${rowStr3} </tbody></table>`;

console.log("4th MAP: " + table3);


//C
if(typeof window !== 'undefined') {
    (document).getElementById("myTable").innerHTML = table3;
    console.log("HERE")
}