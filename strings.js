//Arrays -- are immutable -- cannot be changed
let name = "Kshamata"
console.log(name)
console.log(name.length)
console.log(name[0])
console.log(name[1])
console.log(name[2])
let friend = 'abcde'
console.log(friend)
//template literals -- string interpolation
// let boy1 = "Ram"
// let boy2 = "Hari"
// let sentence = `${boy1} is a friend of ${boy2}`
// console.log(sentence)

// //Escape sequence characters
// // \n -> newline
// // \t -> toolbar
// // \r -> carriage return
// let fruit = 'Bana\'na' // \' is a single character
// let fruit1 = 'Bana\nna'
// console.log(fruit.length)
// console.log(fruit)
// console.log(fruit1)

console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2,4))
console.log(name.slice(2))
console.log(name.replace("Ksh", "abc"))

let friend1 = "abcdef"
console.log(name.concat(" is a friend of ", friend, " Ok"))
let friend2 = "      xyz    "
console.log(friend2.trim())
let fr = "ghgh"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])

let str = "Kshamata\""
console.log(str.length)

const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

const str1 = 'Cats are the best!';
console.log(str1.endsWith('best!'));
console.log(str1.endsWith('best', 17));
const str2 = 'Is this a question?';
console.log(str2.endsWith('question'));

let str3 = "Please give Rs 1000"
let amount = Number.parseInt(str3.slice("Please give Rs ".length))
console.log(amount)
console.log(typeof amount)

let str4 = "Kshamata"
friend[3] = "H"
console.log("str4") //str4 is not changed because string is immutable

 
