/* async wait for promise */
// fetch('https://cat-fact.herokuapp.com/facts')
//   .then(response => response.json())
//   .then(data => console.log(data, 'data'))
//   .catch(error => console.error('Error:', error))

/* async await for promise */
async function getFacts() {
  try {
    const response = await fetch('https://cat-fact.herokuapp.com/facts');
    const data = await response.json();
    console.log(data, 'data');
  } catch (error) {
    console.error('Error:', error);
  }
}
// getFacts()

/* async in function means, it always returns a promise */

async function testAsync() {
  return 'test';
}
testAsync().then(resp => console.log(resp, 'resp'))
 