
// javascript is a dynamically typed  language, which means that we can change the type of variable at the runtime.
// for the purpose of printing we use -
console.log("print this")

let a = 67  // a contains 67
console.log(a)
a = "sumeet"
console.log(a)
// here a is an identifier, '=' sign is assingment operator and 67 & "sumeet" are literals
// rules- variable names can start with letters, underscore (_) and $ signs are allowed.
// it cannot start with number
// javascript reserved words cannot be used. Javascipt is case sensitive.

// var V/S let -->
// var was used in past time, but now we know that it is not really that reliable as it can through many errors. 
// now we use can for constant values
// let is used for block scoped variables, while var is globally scoped 
var hh = "not hello"
{
   var hh = "hello"
    console.log(hh)
}
console.log(hh)          //we cannot do this using let, it will show error

let b = "Tom"
{
    let b = "Tim"
    console.log(b)
}
console.log(b)
b = 'yummy'             // we cannot redeclare the function(so let b = 'yummy' will give error), but we can change the value like this
// In the case of const, we can neither redeclare, nor update the variable. Fact- how can a constant change? it can't change!
const hero = "Iron Man"
console.log(hero)          
// var variables are initialized with undefined, whereas let and const variables are not initialized
// const must be initialized during declaration unlike let and var

// -------------------------------Data Types in Javascript-----------------------------------
// there are 7 types of primitive data types in javascript and the object is the non-primitive data type
// NN BB SS U--> null, number, boolean, bigint, string, symbol and undefined
let c = null;
let d = 23
let e = true
let f = BigInt("34798")
let g = "string"
let h = Symbol("symbol so sing")
let i = undefined
console.log(c, d, e, f, g, h, i)

console.log(typeof g)

// Objects in Javascript--> key - value pair  / non-primitive data type
const item = {
    "Sumeet": true,
    "ab": false,
    "ac": 47,
    "ad": "undefined"
}
console.log(item["Sumeet"])
// if we put a key which is not present in the object, then 'undefined' will be output
