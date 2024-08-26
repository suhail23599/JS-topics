// var has global scope
// let and const has block scope
var a = 20
if (true) {
  a = 10
  let b = 20
  const c = 30
}
console.log(a)

// var variables can be accessed beofre initialization, example
console.log(name1)
var name1 = 'John'


