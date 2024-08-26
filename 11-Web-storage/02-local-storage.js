/*
local storage is a web storage that is similar to cookies. It is used to store data in the browser.
 */
// Storing simple string in local storage
localStorage.setItem('session', 'uuid1234')
console.log(localStorage.getItem('session'))

// Storing object in local storage
const user = {
  name: 'John',
  age: 30
}
localStorage.setItem('user', JSON.stringify(user))
console.log(JSON.parse(localStorage.getItem('user')))

// Removing item from local storage
// localStorage.removeItem('user')
// console.log(localStorage.getItem('user'))

// clearing local storage
// localStorage.clear();