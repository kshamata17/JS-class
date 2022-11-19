
console.log(document.body.lastChild)
console.log(document.body.childNodes[0])
console.log(document.body.childNodes[-1])

let arr = Array.from(document.body.childNodes)
console.log(arr)

// Proterties of DOM collections
// -they are read only
// -they are live elements.childNodes will automatically update if childNodes of element is changed
// -they are iterable using for...of loop

console.log(document.body.firstChild)
a = document.body.firstChild
console.log(a.parentNode) // document
console.log(a.parentElement) // null