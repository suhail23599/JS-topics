// looping through arrays

let arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

// for of loop
for (let item of arr) {
  console.log(item)
}

// for in loop
for (let key in arr) {
  console.log(key, arr[key])
}

/* For in loop is slower than for of */

// Something about length property
// length = lastIndex + 1
const arr2 = [1, 2, 3, 4, 5]
arr2[99] = 99
console.log(arr2.length, 'length of an array')

// to clear array
arr2.length = 0
console.log(arr2, 'clearing an array')