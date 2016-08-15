'use strict';

function Calculator(firstNumber) {

    this.numberSum = firstNumber;
    this.numberDif = firstNumber;
    this.numberDiv = firstNumber;
    this.numberMul = firstNumber;
}

Calculator.prototype.sum = function () {
        for (let i = 0; i < arguments.length; i++) {
            this.numberSum += arguments[i]
        }
    
        return this.numberSum;
};

Calculator.prototype.dif = function () {

        for (let i = 0; i < arguments.length; i++) {
            this.numberDif -= arguments[i]
        }
    
        return this.numberDif;
};

Calculator.prototype.div = function () {

        for (let i = 0; i < arguments.length; i++) {
            try {
                if (arguments[i] == 0) {
                    throw new Error('The divisor is must not be zero!Exclude zero from array.')
                }
            } catch (e) {
                return e
            }

            this.numberDiv /= arguments[i]
        }
    
        return this.numberDiv;
};

Calculator.prototype.mul = function () {
    
        for (let i = 0; i < arguments.length; i++) {
            this.numberMul *= arguments[i]
        }
    
        return this.numberMul;
};

module.exports = Calculator;
