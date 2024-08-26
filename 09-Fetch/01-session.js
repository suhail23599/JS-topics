// example of fetch with GET

// fetch('https://cat-fact.herokuapp.com/facts')
//   .then(response => response.json())
//   .then(data => console.log(data, 'data'))
//   .catch(error => console.error('Error:', error))

/* while making POST, you need to stringify the body 
we ned to stringify because the body expects a string
*/
fetch('https://api.restful-api.dev/objects', {
  method: 'POST',
  headers: {
    "Content-type": "application/json"
  },
  body: JSON.stringify({
    name: "Apple MacBook Pro 16",
    data: {
      year: 2019,
      price: 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB"
    }
  })
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Error:', error));
