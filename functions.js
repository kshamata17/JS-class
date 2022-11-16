//functions

const hello = ()=>{
    console.log("Hello! How are you?")
    return "Hi"
}
function onePlusAvg(x1, x2){
    return Math.round(1 + (x1 + x2)/2)
}

const sum = (j, k)=>{
    return j + k
}
let ff = 1;
let gg = 2;
let h = 3;
let v = hello();
console.log(v)
hello();
// console.log(" One plus Average of ff and gg is ", onePlusAvg(ff+ gg))
console.log(sum(9, 7))