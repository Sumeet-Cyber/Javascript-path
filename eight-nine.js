// loops --> used to perform repeated actions
// 1,) for loop
for(let i = 0; i < 5; i++){
    console.log(i)
}

// program to add first n natural nubers--
let num = prompt("enter the first number: ")
sum = 0
num = Number.parseInt(num)
for(let i = 0; i< num; i++){
    sum += i + 1
}
console.log(sum)

//for in loop
let obj = {
    o: 3,
    b: 4,
    c: 33,
    d: 2,
    e: 39
}
// console.log("say something!")
for (let i in obj){
    console.log("marks of", i, " are "+ obj[i])
}
// console.group("print sumeet")
for (let j of "sumeet"){
    console.log(j)
}

//  While loops ----
// both while and do_while sre present 

let n = prompt("enter the value of n: ")
n = Number.parseInt(n)

let i = 0;
while(i < n){
    console.log(i)
    i++;
}

// do - while loop--> eecules at least one time

do{
    console.log("Good Morning!")
    i--
}while(i>0)