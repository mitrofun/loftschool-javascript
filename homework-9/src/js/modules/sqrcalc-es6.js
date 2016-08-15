'use strict';

class SqlCalc extends require('./calculator') {

    sum() {
        super.sum(...arguments);
        return this.numberSum *= this.numberSum;
    }

    dif() {
        super.dif(...arguments);
        return this.numberDif *= this.numberDif;
    }

    div() {
        super.div(...arguments);
        return this.numberDiv *= this.numberDiv;
    }

    mul() {
        super.mul(...arguments);
        return this.numberMul *= this.numberMul;
    }
}

module.exports = SqlCalc;
