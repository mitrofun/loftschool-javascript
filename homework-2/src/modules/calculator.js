function calculator(firstNumber) {

    function _sum() {

        let result = firstNumber;

        for (let i = 0; i < arguments.length; i++) {
            result += arguments[i]
        }
        return result;
    }

    function _dif() {

        let result = firstNumber;

        for (let i = 0; i < arguments.length; i++) {
            result -= arguments[i]
        }
        return result;
    }

    function _div() {

        let result = firstNumber;

        for (let i = 0; i < arguments.length; i++) {
            try {
                if (arguments[i] == 0) {
                    throw new Error('The divisor is must not be zero!Exclude zero from array.')
                }
            } catch (e) {
                return e
            }

            result /= arguments[i]
        }
        return result;
    }

    function _mul() {

        let result = firstNumber;

        for (let i = 0; i < arguments.length; i++) {
            result *= arguments[i]
        }
        return result;
    }

    return {
        sum: _sum,
        dif: _dif,
        div: _div,
        mul: _mul
    }
}

module.exports = calculator;


