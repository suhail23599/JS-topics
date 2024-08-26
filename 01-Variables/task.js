console.log(a);
var a = 5;

{
  let b = 20;
  var c = 30;
}
console.log(b);
console.log(c);

const d = 40;
d = 50; // Output: ?

/* TO print
undefined
20
30
ReferenceError
 */