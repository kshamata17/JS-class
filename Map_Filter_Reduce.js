// Map -- donot modify original array
let arr2 = [45, 23, 21]
let ab = arr2.map((value, index, array)=>{
    console.log(value, index, array)
    return value + index
})
console.log(ab)

//filter -- donot modify original array
let arr3 = [45, 23, 21, 0, 3, 5]
let ab2 = arr3.filter((a)=>{
    return a < 10
})
console.log(ab2)

//Reduce
let arr4 = [1, 2, 3, 5, 3, 4]
let newarr4 = arr4.reduce((h1, h2)=>{
    return h1 + h2
})
console.log(newarr4)

//practice set
// let arr6 = [1, 2, 3, 4, 5, 6, 8]
// let ab3 = prompt("Enter a number") 
// ab3 = Number.parseInt(ab3)
// arr6.push(ab3)
// console.log(arr6)

// let arr7 = [1, 2, 3, 4, 5, 6, 8]
// let ab4
// do{
//     ab4 = prompt("Enter a number") 
//     ab4 = Number.parseInt(ab4)
//     arr7.push(ab4)
//     
// }while(a!=0);
//console.log(arr7)