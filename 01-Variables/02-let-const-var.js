// var has global scope
// let and const has block scope
var a = 20
if (true) {
  var abc = 30
  a = 10
  let b = 20
  const c = 30
}
console.log(abc, 'print')
// console.log(b)
// console.log(a)

// var variables can be accessed beofre initialization, example
// console.log(name1)
// var name1 = 'John'


