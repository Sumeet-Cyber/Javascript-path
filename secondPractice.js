// answer 1
age = prompt("What is your age? ")
age = Number.parseInt(age)
if(age>10 && age<20){
    console.log("your age is between 10 and 20")
}

// answer 2 ---> already done is six-seven.js file, on my own

// answwer 3 -
let num = 120
if (num%2 == 0 && num%3 == 0){
    console.log("the number is divisible by both 2 & 3")
}

if (num%2 == 0 || num%3 == 0){
    console.log("the number is divisible by at least one of  2 & 3")
}

console.log("You can", age>10? "drive": "not drive")