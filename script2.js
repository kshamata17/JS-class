//primitive objects
//nnbbssu
// Number
// Null
// String
// Symbol
// undefined
// Boolean
// Bidint
let aa =null;
let bb = 345;
let cc = true;//or false
let d = BigInt("567") + BigInt("1")
let e = "xyz"
let f = Symbol("I am a symbol")
let g = undefined
console.log(aa, bb, cc, d, e, f, g)
console.log(typeof d)
console.log(typeof e)

//Objects--non-primitive datatypes
//-key value pairs

const item = {
    "xyz": true,
    "abcd": false,
    "ghdg": 67,
    "gfdgf": undefined
}
console.log(item["xyz"])
console.log(item["ghdg"])
console.log(item["hfks"])
