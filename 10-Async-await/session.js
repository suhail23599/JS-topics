/* async wait for promise */
// fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
//   .then(response => response.json())
//   .then(data => console.log(data, 'data'))
//   .catch(error => console.error('Error:', error))

/* async await for promise */
async function getFacts() {
  try {
    console.log('called async')
  //   fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
  // .then(response => response.json())
  // .then(data => console.log(data, 'data'))
  // .catch(error => console.error('Error:', error))
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
    const data = await response.json();
    console.log(data, 'data');
    console.log('done')
  } catch (error) {
    console.error('Error:', error);
  }
}
getFacts()

console.log('hello')

// /* async in function means, it always returns a promise */

async function testAsync() {
  return 'test';
}
testAsync().then(resp => console.log(resp, 'resp'))

async function rejectedAsync() {
  throw new Error('rejected');
}
rejectedAsync().catch(err => console.log(err, 'err'))


// async function resolvedAsync() {
//   return Promise.resolve('resolved');
// }

// async function rejectedAsync2() {
//   return Promise.reject('rejected');
// }

// resolvedAsync().then(resp => console.log(resp, 'resp'))


 