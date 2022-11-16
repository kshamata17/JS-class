// for loop
let num7 = [3, 4, 5, 2, 5]
for(let i = 0; i<num7.length; i++){
    console.log(num7[i])
}

// forEach loop
num7.forEach((element)=>{
console.log(element * element)
})

// Array.from
let name_1 = "Kshamata"
let arr1 = Array.from(name_1)
console.log(arr1)

// for...of // item
for(let item of num7){
    console.log(item)
}

//for...in // key
for(let i in num7){
    console.log(i)
}