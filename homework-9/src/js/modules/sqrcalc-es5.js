'use strict';

let Calc = new require('./calculator');

function SqrCalc(firstNumber) {
    Calc.apply(this, arguments);
}

SqrCalc.prototype = Object.create(Calc.prototype);

SqrCalc.prototype.sum = function () {
    Calc.prototype.sum.apply(this, arguments);
    return this.numberSum *= this.numberSum;
};

SqrCalc.prototype.dif = function () {
    Calc.prototype.dif.apply(this, arguments);
    return this.numberDif *= this.numberDif;
};

SqrCalc.prototype.div = function () {
    Calc.prototype.div.apply(this, arguments);
    return this.numberDiv *= this.numberDiv;
};

SqrCalc.prototype.mul = function () {
    Calc.prototype.mul.apply(this, arguments);
    return this.numberMul *= this.numberMul;
};

module.exports = SqrCalc;