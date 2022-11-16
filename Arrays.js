//Arrays -- are mutable -- can be changed
let marks = [91, 82, 83, 74, "absent"]
console.log(marks)
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5]) //undefined because index 6 doesn't exist
console.log("The length of marks is", marks.length)
marks[5] = 89 // Adding a new value to the array
marks[1] = 84
console.log(marks)
console.log(typeof marks)

// Arrays -- methods
// toString method
let num = [1, 2, 3, 34, 4]
let str_a = num.toString() // stra is a string
console.log(str_a, typeof str_a)

//join method
let str_b = num.join("_")
console.log(str_b, typeof str_b)

//pop method
let r = num.pop() // pop returns the popped element
console.log(num, r)

//push method -- returns the new array length
let q = num.push(5)
console.log(num, q)

//shift method -- removes element form the start of the array
let str_c = num.shift()
console.log(str_c, num)

//unshift -- Add new element to the start
let str_d = num.unshift(66)
console.log(str_d, num)

//delete
delete num[1]
console.log(num, length)

// concat
let num1 = [1, 2, 3]
let num2 = [4, 5, 6]
let num_cat = num1.concat(num2)
console.log(num_cat)

// sort method 
let num3 = [2, 6, 3, 8, 1]
num3.sort()
console.log(num3)

let compare =(a, b)=>{
    return a - b
}
let num4 = [54, 4, 8, 78, 100] // alphabetical order
num4.sort(compare)
num4.reverse() // reverse method
console.log(num4)

// splice and slice
let num5 = [54, 4, 8,67, 78, 100]
num5.splice(2, 3, 1021, 1022, 1023, 1025)
console.log(num5)


let num6 = [54, 4, 8, 67, 78, 100]
let newNum = num6.slice(3)
console.log(newNum)