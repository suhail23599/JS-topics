// 8 data types in js

// 7 primitive data types, one non-primitive

// let message = 'hello'
// message = 123
// console.log(message , 'message')

// // 1.Number
// let n = 123;
// n = 12.345;

// // 2.BigInt
// const bigInt = 1234567890123456789012345678901234567890n;

// // 3.String
// let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed another ${str}`;

// let n3 = 'my'
// let n4 = 'name'
// console.log(n3+' '+n4)

// // 4.Boolean
// let testBool = true


// // 5.null
// let age = null // represents nothing empty

// // 6.undefined
// let place
// console.log(place)

// let number = undefined //not recommended, use null to assign empty value to a variable

// // 7.Symbol

// const sym1 = Symbol()
// // const sym2 = new Symbol('foo') // gives error
// console.log(typeof sym1)
// const sym3 = Symbol('foo')

// const k1 = Symbol('key')
// const k2 = Symbol('key')
// const obj1 = {}
// obj1[k1] = 123
// obj1[k2] = 456
// console.log(obj1)



// // 8.Objects

// const person = {
//   name: 'John',
//   age: 30,
//   address: { city: 'New York', country: 'USA' }
// }

// some js nuances
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

/* null is converted to 0 while comparing
 null when compared to undefined only gives true
 */

/* undefined is converted to NaN while comparing */
