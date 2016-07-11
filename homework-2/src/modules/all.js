function isAllTrue(source, filterFn) {

    try {
        if (source.length == 0) {
            throw new Error('Array is empty!Send in a function is not a null array!')
        }
    } catch (e) {
        return e;
    }
    
    let result = true;
    
    for (let i = 0; i < source.length; i++) {
        result = result && filterFn(source[i]);
    }
     return result;
}

module.exports = isAllTrue;

