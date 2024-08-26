// Object are copied by reference whereas primitives are copied by value

let user = {
  name: 'John',
  age: 20
}
let user2 = user
user2.age = 30
console.log(user)