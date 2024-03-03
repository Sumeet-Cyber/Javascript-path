let name = "Sumeet"
console.log(name)

let len = name.length                   //this gives the lingth of string
console.log(len)
let friend = 'Jadoo'
console.log(friend)

console.log(name[0])                    //accessing the elemnts of string
console.log(name[1])                    //accessing the elemnts of string
console.log(name[2])                    //accessing the elemnts of string

// Let's start modern Javascript-------->
// Template literals: template literals use backtails instead of quotes to define a string.
// with template literals, it is possible to use both single as well as double quotes inside a string.
let boy1 = "Pramod"
let boy2 = "Nikhil"
// Nikhil is a friend of Pramod
let sentence = `${boy1} is a friend of ${boy2}`
console.log(sentence)

// escape sequence characters
let fruit = 'ban\'ana'
console.log(fruit) 
console.log("let this be a ver\trrrry long string\n which has escape sequence \rcharacters in it.")

//what does \r do? --> carriage return

// ------------------STRING METHODS---------------------------
// one of the methods is length, which we just saw
console.log(name.length)
// concept- escape sequence characters are counted as a single character
name = "Sum\"eet"
console.log(name.length)
// to convert in upper cae, we use this function
console.log(name.toUpperCase())
// Note - there is difference between a property ans a function, here length is a property while toUpperCase() is a function(as it ends with ())
console.log(name.toLowerCase())     //converts in lowercae

// string slicing
console.log(name.slice(2,5))       // if we don't specify second argument, then it will go till the string ends

console.log(name.replace("m", "rj"))  // it replaces only first occurance

friend = "Naman"
console.log(name.concat(" is a friend of ", friend))

let friend2 = "        Go  jo   "
console.log(friend2.trim())         //removes spaces from before and after string, but not in between.

// Strings are immutable data types
console.log(name)
// in the above example, we can see that the vvalue of string didn't changed. even thou we used toUpperCase and toLowerCase on it.

str = 'university'
// str[3] = 'u'   this is not possible, thou it nay not give error

for(let i in str){
    console.log(str[i])
}
