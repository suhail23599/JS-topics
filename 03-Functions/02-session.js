
// 1. Function parameters
function sum(a, b) {
  return (a+b);
}
console.log(sum(1, 2))

// 2. Function with default parameters
function sayHello(name = 'John') {
  console.log('Hello', name)
}
sayHello()
sayHello('Ann')

// 3. Function with rest parameters
// storing in an array with rest operator
function sumAll(...arg) {
  let total = 0
  for (let i = 0; i < arg.length; i++) {
    total += arg[i]
  }
  return total
}
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))



/* Note: 
-Rest parameters must be the last parameters
-Function should do only one task
 */