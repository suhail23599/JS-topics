// Array methods

// 1. push , add element at the end
let arr = [1, 2, 3, 4, 5]
arr.push(6)
console.log(arr, 'push method')
// 2. pop, remove element at the end
arr.pop()
console.log(arr, 'pop method')
// 3. shift, remove element at the start
arr.shift()
console.log(arr, 'shift method')
// 4. unshift, add element at the start
arr.unshift(0)
console.log(arr, 'unshift method')

// Array are like objects, arrays are copied by reference */
// example
console.log('copy by reference')
const arr2 = ['a', 'b', 'c']
const arr3 = arr2
arr3.push('d')
console.log(arr2)