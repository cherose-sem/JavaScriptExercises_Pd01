
//this is for the use of EX8
let f = function (x,y,bln,z,str,arr,date, obj){
  return `Sum: ${x + y}
rest value 1 is a: ${bln.constructor.name}
rest value 2 is a: ${z.constructor.name}
rest value 3 is a: ${str.constructor.name}
rest value 4 is a: ${arr.constructor.name}
rest value 5 is a: ${date.constructor.name}
rest value 6 is a: ${obj.constructor.name}`
}

module.exports.myFunction = f;