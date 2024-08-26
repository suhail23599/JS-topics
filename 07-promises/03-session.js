/* Advantages of Promises over callback */
function getFirstData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, title: 'First Data' });
    }, 2000);
  });
}

function getSecondData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: data.id, title: data.title + ' Second Data' });
    }, 2000);
  });
}

function getThirdData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: data.id, title: data.title + ' Third Data' });
    }, 2000);
  });
}

getFirstData()
  .then(getSecondData)
  .then(getThirdData)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log('Error:', error));