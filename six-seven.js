// Expression: a fragment of code that produces a value is called an expression. every value written literally is an expression.
77;                         //e.g - 1
"salute to you"             //e.g - 2
// Operators in javascript
// 1. arithmetic (+, -, *, /, ** )
let a = 43;
let b = 3;
console.log("a + b = ", a+b)
console.log("a - b = ", a-b)
console.log("a * b = ", a*b)
console.log("a / b = ", a/b)
console.log("a ** b = ", a**b)
console.log("a % b = ", a%b)            //calculating remainder
console.log("a++ = ", a++)              //increases the value by one, only after this line is printed
console.log("++a = ", ++a)              //increases the value by one, before this line is printed, and thus prints increasd value
console.log("a-- = ", a--)              //decreases the value by one, only after this line is executed
console.log("--a = ", --a)              //decreases the value by one, before this line is executed, and thus prints decreased value

// Assingment operators --> =, +=, -=, *=, /=, %=, **=
a = 8
a += 5      // == a = a + 5
console.log("a %= b = ", a %= b)

// Comparison Operator --> ==, !=, ===, !===, <, > <=, >= , ? : output is either true or false
let comp1 = 6;
let comp2 = "6";
console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)

console.log("comp1 === comp2 is ", comp1 === comp2)             //
console.log("comp1 !== comp2 is ", comp1 !== comp2)

// Logical Operators --> &&, ||, !   : these operate on booleans

let x = 5;
let y = 6;
console.log(x < y && x == 5)
// && is AND
//  || is OR
//  ! is not

// apart from these, we also have type and bitwise operators, Bitwise operators perform bit by bit operations on numbers

// NOTE -- > operators perform on operands

// Comments in Javascript is written like this. this is a single line comment
/* while
this 
is a multy 
line comment */

// inputing value from user- use of prompt()
// let que = prompt("what is your age?")                                                    /*this block of
// console.log(typeof age)         //always a string                                      code will work in browser
// age = Number.parseInt(age)      //typecasting of a string to integer in javascript       but it will not work in
// console.log(typeof age)         //now a number                                           node js*/

// Conditions
/*if (a>0){
    alert("Theis is a valid age")
}           */   

// types of  if statement--> 1.)if /  2.) if_else / 3.) if_elseif statements  

// Switch cases-
year = 1
switch (year) {
    case 1:
        console.log("learn a language")
        break;
    case 2:
        console.log("build big projects")
        break;
    case 3:
        console.log("Seek for internships")
        break;
    case 4:
        console.log("Get placed already!")
        break;
    default:
        console.log("Keep moving.")
}

// Ternary operator in C --> just an if in a single line
// conditoin ? exp1 : exp2 --> if true that execute exp1, else vice versa
marks = 70
console.log(marks<35 ? "Failed" : "Passed")