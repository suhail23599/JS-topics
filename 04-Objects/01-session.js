// Objects in JS

// differents ways of creating objects
let obj1 = {}
let obj2 = new Object()

obj1.age = 20
obj2.age = 30

console.log(obj1, obj2)

let obj32 = {
  name: 'John',
  age: 20
}
// computed property
const fruit = 'apple' ? '1' : '0'
const obj3 = {
  [fruit]: 10
}
console.log(obj3)
console.log(obj3['apple'])

// Note: We can use keyowords as properties in object.

// creating objects with constructor function
function House (name, address) {
  this.name = name
  this.address = address
}

const house_1 = new House('House 1', 'Address 1')
const house_2 = new House('House 2', 'Address 2')
console.log(house_1.name)

