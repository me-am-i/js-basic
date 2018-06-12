var promise1 = Promise.resolve(3)
var promise2 = 42
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo')
})

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values)
})

promise1.then(function(value) {
  console.log(value)
})

promise3.then(function(value) {
  console.log(value)
})
