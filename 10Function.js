let a = 1;
let b = 2;
let c = 3;

// writing function
function avg(x, y){
    console.log("DONE")
    return Math.round((x + y)/2)
}
console.log("the average of a and b is ", avg(a,b))
console.log("the average of b and c is ", avg(b,c))

// arrow functions
const sum = (p, q)=>{
    return p + q
}
console.log(sum(8,7))
const hello = ()=> {
    console.log("Hi, how are you! ")
}

hello();