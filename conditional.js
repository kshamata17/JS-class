//conditional operators
let age = prompt("Hey whats your age?")
//Number, string , Undefined, null
age = Number.parseInt(age) // Converting the sring into a number
// // console.log(typeof p)
// if(p < 0){
//     alert("This is an invalid age")
// }
// else if(p < 9){
//     alert(" You are a kid and can't even think of driving")
// }
// else if(p < 18 && p >= 9){
//     alert(" You are a kid and you can think of driving")
// }
// else{
//     alert("You can drive")
// }
// console.log("Done")
// //ternary operator
// console.log("You can", (p<18? "not drive":"Drive"))

// //Switch
switch(age){
    case 12:
    console.log("Your age is 12")
    break
    case 13:
    console.log("Your age is 13")
    break
    case 14:
    console.log("Your age is 14")
    break
    case 15:
    console.log("Your age is 15")
    break
    default:
    console.log("Your age is not special")
}
