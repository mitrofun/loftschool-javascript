let isNumber = require('./modules/common');
let isAllTrue = require('./modules/all');
let isSomeTrue = require('./modules/some');
let calculator = require('./modules/calculator');

let allNumbers = [1, 2, 4, 5, 6, 7, 8],
    someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
    noNumbers = ['это', 'массив', 'без', 'чисел'];

console.info('first part of the homework');

console.log(isAllTrue([], isNumber)); // error
console.log(isAllTrue(allNumbers, isNumber)); //вернет true
console.log(isAllTrue(someNumbers, isNumber)); //вернет false
console.log(isAllTrue(noNumbers, isNumber)); //вернет false

console.info('');
console.info('second part of the homework');
console.info('');

console.log(isSomeTrue([], isNumber)); // error
console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
console.log(isSomeTrue(noNumbers, isNumber)); //вернет false

console.info('');
console.info('third part of the homework');
console.info('');

let myCalculator = calculator(100);

console.log(myCalculator.div(2, 0)); //error
console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.dif(10, 20)); //вернет 70
console.log(myCalculator.div(2, 2)); //вернет 25
console.log(myCalculator.mul(2, 2)); //вернет 400