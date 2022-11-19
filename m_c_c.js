// console.log(id1) // works but not a good practice

//matches -- to check if the element matches the given css selector
let id1 = document.getElementById("id1")
let span1 = document.getElementById("span1")
console.log(id1)
console.log(id1.matches(".class"))
console.log(id1.matches(".box"))

//closest -- to look for the nearest ancestor that matches the given css. The elem itself is also checked
console.log(span1.closest(".box"))
console.log(span1.closest("#span1"))

//contains -- returns true if elemB is inside elemA( a descendant of elemA) or when elemA == elemB
console.log(id1.contains(span1))
console.log(span1.contains(span1))
console.log(span1.contains(id1))