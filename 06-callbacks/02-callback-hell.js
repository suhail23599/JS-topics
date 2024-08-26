// callback hell example
function getFirstData(callback) {
  setTimeout(() => {
    callback({ id: 1, title: 'First Data' });
  }, 2000);
}

function getSecondData(data, callback) {
  setTimeout(() => {
    callback({ id: data.id, title: data.title + ' Second Data' });
  }, 2000);
}

function getThirdData(data, callback) {
  setTimeout(() => {
    callback({ id: data.id, title: data.title + ' Third Data' });
  }, 2000);
}

// Callback hell
getFirstData((data) => {
  getSecondData(data, (data) => {
    getThirdData(data, (result) => {
      console.log(result); // Output: {id: 1, title: "First Data Second Data Third Data"}
    });
  });
});

getFirstData(() => {
  
})