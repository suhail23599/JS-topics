// Objects in JS

// differents ways of creating objects
let obj1 = {}
let obj2 = new Object()

obj1.age = 20
obj2.age = 30

console.log(obj1, obj2)

// computed property
const fruit = 'apple'
const obj3 = {
  [fruit]: 10
}
console.log(obj3.apple)

// Note: We can use keyowords as properties in object.

// creating objects with constructor function
function House (name, address) {
  this.name = name
  this.address = address
}

const house_1 = new House('House 1', 'Address 1')
console.log(house_1.name)

