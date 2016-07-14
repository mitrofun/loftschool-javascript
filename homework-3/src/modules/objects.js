function isNotObject(a, b) {
    return a.valueOf() == b.valueOf() && typeof a != "object"
}

function isIterable(a, b) {
    return a.length == b.length && a.length && b.length
}

function isObject(a, b) {
    return Object.getOwnPropertyNames(a).length == Object.getOwnPropertyNames(b).length
        && typeof a == "object"
}

function deepEqual(sampleObj, compareObj) {
    let result = true;
    if (isNotObject(sampleObj,compareObj)) {
        result = true;
    } else if (isIterable(sampleObj, compareObj)) {
        for (let i = 0; i < sampleObj.length; i++) {
            result = deepEqual(sampleObj[i], compareObj[i]);
            if (!result) { return false}
        }
    } else if (isObject(sampleObj, compareObj)) {
        for (let key in sampleObj) {
        result = deepEqual(sampleObj[key], compareObj[key]);
        if (!result) { return false}
        }
    } else {
        return false;
    }
    return result
}

module.exports = deepEqual;