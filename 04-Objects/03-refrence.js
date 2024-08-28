// Object are copied by reference whereas primitives are copied by value

let user = {
  name: 'John',
  age: 20,
  address: {
    city: 'New York',
    country: 'USA'
  }
}
// let user2 = user
// user2.age = 30
// console.log(user2, 'Copied Object')
// console.log(user)

// shallow copying means copying only one level

// copying Object with spread operator
// console.log('Deep copying with spread operator')
// let user4 = {...user}
// user4.age = 50
// user4.address.city = 'London'
// console.log(user, 'Original Object')
// console.log(user4, 'Copied Object')

// copying object with Object.assign
console.log(' with Object.assign')
let user5 = Object.assign({}, user)
user5.age = 60
user5.address.city = 'Paris'
console.log(user, 'Original Object')
console.log(user5, 'Copied Object')

// deep copying means copying all level

// deep copying Object with JSON methods
// console.log('Deep copying with JSON methods')
// let user3 = JSON.parse(JSON.stringify(user))
// user3.age = 40
// user3.address.city = 'Berlin'
// console.log(user, 'Original Object')
// console.log(user3, 'Copied Object')

// deep copying with Structured Clone --> Preferable
console.log('Deep copying with Structured Clone')
let user6 = structuredClone(user)
user6.age = 70
console.log(user6)

