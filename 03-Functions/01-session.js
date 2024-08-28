// // function declaration
// function sayHello(name) {
//   console.log('Hello', name)
// }

// sayHello('John')

// variable shadowing
let firstName = 'John'
function sayName() {
  firstName = 'Ann'
  console.log('Hi', firstName)
}
console.log(firstName)
sayName()
// console.log(firstName)

/* Global variables can be accessed by any function unless they are shadowed */