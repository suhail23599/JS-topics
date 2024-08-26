// 1. Function Declaration: findMax
function findMax(a, b, c, d, e) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  if (d > max) max = d;
  if (e > max) max = e;
  return max;
}

// 2. Function Expression: sum
const sum = function (a, b, c, d, e) {
  let total = 0;
  total += a;
  total += b;
  total += c;
  total += d;
  total += e;
  return total;
};

// 3. Arrow Function: multiply
const multiply = (a, b) => a * b;

// 4. Combined Usage Example
const num1 = 2, num2 = 3, num3 = 7, num4 = 1, num5 = 5;

const max = findMax(num1, num2, num3, num4, num5);
const totalSum = sum(num1, num2, num3, num4, num5);
const result = multiply(max, totalSum);

console.log('Max:', max);           // Should print 7
console.log('Sum:', totalSum);      // Should print 18
console.log('Result:', result);     // Should print 126 (7 * 18)
