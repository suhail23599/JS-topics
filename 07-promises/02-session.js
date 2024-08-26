/* Consumers (then, catch, finally)
 * The .then() method is used to register callbacks that will be called when the promise is fulfilled.
 * The .catch() method is used to register callbacks that will be called when the promise is rejected.
 * The .finally() method is used to register callbacks that will be called regardless of the promise's state.
 */
const promise = new Promise((resolve, reject) => {
  resolve(1)
})
promise.then((result) => {
  console.log('fulfilled', result)
}).catch((err) => {
  console.log('rejected', err)
}).finally(() => {
  console.log('finally')
})
console.log('promise')

promise.then(
  function (result) { /* handle a successful result */ },
  function (error) { /* handle an error */ }
);