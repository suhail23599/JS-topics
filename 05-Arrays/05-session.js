// Array other methods

// 1. Splice , (insert, delete, replace)
// splice(index, deletecount, element1, element2, ...elementN)
console.log('splice method')
let arr = [1, 2, 3, 4, 5]
arr.splice(2, 2) // index 2, remove 2 elements
console.log(arr, 'remove')

arr.splice(1, 2, `a`, `b`, `c`) // index 1, remove 2 elements, add `a`, `b`, `c`
console.log(arr, 'remove and replace')

arr.splice(1, 0, 'test') // index 1, add `test`
console.log(arr, 'add element')

// 2.Slice
console.log('slice method')
let arr2 = [1, 2, 3, 4, 5]
console.log(arr2.slice(1, 3), 'slice method')

// NOTE: splice modifies original array, slice does not

// 3.forEach
console.log('ForEach Method')
let arr3 = [1, 2, 3, 4, 5]
arr3.forEach((item, index) => console.log(item, index)) // this is actually a callback function

// 4. filter
console.log('filter method')
let arr4 = [1, 2, 3, 4, 5]
let result = arr4.filter((item) => item > 2)
console.log(result)

// 5. map
console.log('map method')
let arr5 = [1, 2, 3, 4, 5]
let result2 = arr5.map((item) => item * 2)
console.log(result2)

// 6. reduce, used to return single value
// reduce((accumulator, item, index, array) => accumulator + item)
console.log('reduce method')
let arr6 = [1, 2, 3, 4, 5]
let result3 = arr6.reduce((total, item) => total + item)
console.log(result3)

// 7. sort
console.log('sort method')
let arr7 = [1, 15, 2]
let result4 = arr7.sort() // lexically sorted
console.log(result4)
let result5 = arr7.sort((a, b) => {
  console.log(a, ">", b)
  return a-b
}) // ascending
console.log(result5)

let arr8 = ['apple', 'orange', 'banana']
let result6 = arr8.sort()
console.log(result6)


