// js callback function
function proceedOrder(payment, fullfillOrder) {
  if (payment) {
    fullfillOrder()
  } else {
    console.log('Payment failed')
  }
}
const fullfillOrder = function () {
  console.log('Order fullfilled')
}
// blocking callback function
proceedOrder(true, fullfillOrder)
console.log('called')
proceedOrder(false, fullfillOrder)

// setTimeout non-blocking callback function
setTimeout(function () {
  console.log('setTimeout')
}, 100)
console.log('non-block')
