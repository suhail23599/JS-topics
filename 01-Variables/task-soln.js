// Output: undefined
var a;
console.log(a); // Output: undefined

a = 5;

// Declare variables within a block
{
  let b = 20;
  var c = 30;
  console.log(b); // Output: 20
}
console.log(c); // Output: 30
console.log(d);

const d = 40;