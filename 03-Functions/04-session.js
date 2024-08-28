// using if else
function sayHello(name) {
  if (name) {
    console.log(`Hello ${name}`)
  } else {
    console.log('Hello')
  }
}

sayHello('John')

// using switch case
function sayHello(name) {
  switch (name) {
    case 'John':
      console.log('Hello John')
      break
    case 'Ann':
      console.log('Hello Ann')
      break
    default:
      console.log('Hello')
  }
}

sayHello('John')