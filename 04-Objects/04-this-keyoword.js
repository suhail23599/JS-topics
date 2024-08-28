// let user = {
//   name: 'John',
//   age: 20,
//   sayHello: function () {
//     console.log('Hello ' + this.name)
//   }
// }

// user.sayHello()

// // use case with two different objects
// let user2 = {
//   name: 'John',
//   age: 20
// }
// let user3 = {
//   name: 'Ann',
//   age: 30
// }

// function sayHi() {
//   console.log('Hi ' + this.name)
// }

// user2.func = sayHi
// user3.func = sayHi

// user2.func()
// user3.func()

// this keyword in function declaration
// function sayHello() {
//   console.log(this, 'this in function declaration')
// }

// sayHello()

// this keyword in arrow functions
// arrow function do not have its own this context, it depends on the context where that arrow function is defined,
// they inherit this context of their parent(lexical scope)
// const sayBye = () => {
//   console.log(this, 'arrow function')
// }

// sayBye()

// Few moore examples with this in arrow function
// let customer1 = {
//   name: 'John',
//   sayHi: () => {
//     console.log(this, 'this in arrow function')
//   }
// }

// customer1.sayHi()

// const customer2 = {
//   name: 'Ann',
//   sayHi: function () {
//     console.log(this, 'this in normal function')
//   }
// }

// customer2.sayHi()

// some modification to make customer1 work
const customer12 = {
  name: 'John',
  arrowFunction: null,
  sayHi: function () {
    console.log(this, 'this context')
    this.arrowFunction = () => {
      console.log('my name is', this.name)
    }
    this.arrowFunction()
  }
}
customer12.sayHi()