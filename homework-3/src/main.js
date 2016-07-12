arrFunc = require('./modules/functions');

let array = [1, 2, 3, 4, 5, 6];

arrFunc.forEach(array, item => console.log(item));
//1
//2
//3
//4
//5
//6

console.log(arrFunc.filter(array, item => item > 4)); // [ 5, 6 ]

console.log(arrFunc.map(array, item => item*item)); // [ 1, 4, 9, 16, 25, 36 ]

console.log(arrFunc.slice(array, 0)); // [ 1, 2, 3, 4, 5, 6 ]

console.log(arrFunc.reduce(array, function(a) {
  return a + a;
})); // 32

console.log(arrFunc.splice(array, 0, 3)); // [ 1, 2, 3 ]
console.log(array); // [ 4, 5, 6 ]

console.log(arrFunc.splice(array, 0, 3, 100, 200, 300, 400)); // [ 4, 5, 6 ]
console.log(array); // [ 100, 200, 300, 400 ]