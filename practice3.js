let marks= {
    harry: 98,
    rohan: 70,
    aakash: 75
}
// answer 1
for(let i=0; i < Object.keys(marks).length; i++){
    console.log("the marks of " + Object.keys(marks)[i] + "are " + marks[Object.keys(marks)[i]])
}
// answer 2
console.log("with help of for in loop -->")
for ( let i in marks){
    console.log("the marks of " + i + " are " + marks[i])
}

// answer 3
let num = 33;
let i
while(i!= num){
    i = prompt("Enter a number: ")
}
console.log("yes this the correct number.")

// answer 4
const mean =(a, b, c, d, e)=>{
    return (a+b+c+d+e)/5
}
console.log("mean of 1,2,3,4 and 5 is " + mean(1,2,3,4,5))