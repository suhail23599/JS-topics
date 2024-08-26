// test operators in objects

let obj = {
  age: 20,
  name: 'John',
  isMarried: false
}

for (let key in obj) {
  console.log(key, obj[key])
}

// order of properties in object

// let obj2 = {
//   "40": "Bangalore",
//   "20": "Chennai",
//   "10": "Hyderabad"
// }

// for (let key in obj2) {
//   console.log(key, obj2[key])
// }

// example for deleting object properties

let obj3 = {
  name: 'John',
  age: 20
}

delete obj3.age
console.log(obj3)

/* other types of objects
  Arrays
  Date
  Error
  Map...etc
*/

  