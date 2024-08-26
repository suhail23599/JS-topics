/* 
 * A promise is an object that represents the eventual completion or failure of an asynchronous operation.
 * A promise can be in one of three states: pending, fulfilled, or rejected.
 * The state is determined by the result of the operation that created the promise.
 * When a promise is created, it is in the pending state.
 * When a promise is fulfilled, it is in the fulfilled state.
 * When a promise is rejected, it is in the rejected state.
 * The result of the operation that created the promise is available as the value of the promise.
 */
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error('done'))
//   }, 2000)
// })

// let promiseObj = new Promise(function (resolve, reject) {
//   resolve("done");

//   reject(new Error("…")); // ignored
//   setTimeout(() => resolve("…")); // ignored
// });


let promise1 = new Promise((resolve, reject) => {
  resolve(3)
})
