'use strict';

let Calc = require('./modules/calculator');
let SqrCalc = require('./modules/sqrcalc-es5');
let SqrCalcES6 = require('./modules/sqrcalc-es6');

let myCalculator = new Calc(100);
let mySqrCalculator = new SqrCalc(100);
let mySqrCalculatorES6 = new SqrCalcES6(100);

console.log('---- calculator ----');

console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.dif(10, 20)); //вернет 70
console.log(myCalculator.div(2, 2)); //вернет 25
console.log(myCalculator.mul(2, 2)); //вернет 400

// console.log(myCalculator);

console.log('---- sql calculator es5 ----');

console.log(mySqrCalculator.sum(1, 2, 3)); //вернет 11 236 (100 + 1 + 2 + 3 = 106 * 106)
console.log(mySqrCalculator.dif(10, 20)); //вернет 4 900
console.log(mySqrCalculator.div(2, 2)); //вернет 625
console.log(mySqrCalculator.mul(2, 2)); //вернет 160 000

// console.log(mySqrCalculator);

console.log('---- sql calculator es6 ----');

console.log(mySqrCalculatorES6.sum(1, 2, 3)); //вернет 11 236 (100 + 1 + 2 + 3 = 106 * 106)
console.log(mySqrCalculatorES6.dif(10, 20)); //вернет 4 900
console.log(mySqrCalculatorES6.div(2, 2)); //вернет 625
console.log(mySqrCalculatorES6.mul(2, 2)); //вернет 160 000

// console.log(mySqrCalculatorES6);