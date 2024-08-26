// function declaration
function sayHello(name) {
  console.log('Hello', name)
}

// function expression
const sayBye = function (name) {
  console.log('Bye', name)
}

// functions are objects
console.log('Representing Function')
console.log(sayHello)
console.log(sayBye)

/* Differnce between function declaration and function expression
-function declaration can be called before initialization
-function expression can be called after initialization
in general it is recommended to use function declaration. However it could vary depending on the use case
 */
