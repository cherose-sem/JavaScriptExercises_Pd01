//THE MAGIC CALLBACKS: 01
//forEach, filter, map reduce, join... which returns a callback

let names=["Cherry","Rose","Epz","Semeña","Jimenez"];

//let names2 = names.filter(function(name){
//  return name.length >= 3;
//});

let rows = names.map(function(name){
  return "<td>" + name + "</td>"
});

let rowStr = rows.join(" ");

let table = `<table><tbody> ${rowStr} </tbody></table>`

console.log(table);

