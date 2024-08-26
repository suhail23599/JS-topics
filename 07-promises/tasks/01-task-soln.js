function delayedExecution(fn, delay, message) {
  return new Promise((resolve) => {
    setTimeout(() => {
       // Passes the message to the callback function
      resolve('done');
      fn(message); // Resolves the promise after the function has been executed
    }, delay);
  });
}

// Example usage:
function printMessage(message) {
  console.log(message);
}

delayedExecution(printMessage, 3000, 'This is a delayed message').then((message) => {
  console.log(message)
}); // Logs "This is a delayed message" after 3 seconds
