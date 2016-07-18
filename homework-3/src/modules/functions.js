function myForEach(array, handler, thisArg) {

    let fn = handler;

    if (thisArg) {
           fn = handler.bind(thisArg)
    }

    for (let i = 0; i < array.length; i++) {
        fn(array[i]);
    }
}

function myFilter(array, handler, thisArg) {

    let fn = handler;
    let result = [];

    if (thisArg) {
           fn = handler.bind(thisArg)
    }

    for (let i = 0; i < array.length; i++) {

        if (fn(array[i])) {
            result[result.length] = array[i]
        }
    }
    return result;
}

function myMap(array, handler, thisArg) {

    let fn = handler;
    let result = [];

    if (thisArg) {
           fn = handler.bind(thisArg)
    }

    for (let i=0; i < array.length; i++){
        result[i] = fn(array[i])
    }
    return result;
}

function mySlice(array, start, end) {

    let result = [];

    for (let i = 0; i < array.length; i++) {

        if (!end && end !=0) {
            if (i >= start ) {
            result[result.length] = array[i]
            }
        } else {
            if (i >= start && i < end) {
                result[result.length] = array[i]
            }
        }
    }
    return result
}

function myReduce(array, handler, initialValue) {

    let result = array[0],
        start = 1;

    if (initialValue) {
        result = initialValue;
        start = 0;
    }

    for(let i = start; i < array.length; i++) {
        result = handler(result, array[i])
    }

    return result;
}

function  mySplice(array, start, deleteCount) {
    let result = [],
        del = [];

    if (deleteCount) {
    } else {
        deleteCount = array.length;
    }

    for (let i=start; i < deleteCount; i++) {
         del[del.length] = array[i];
    }

    if (arguments[3]) {
            for (let i = 3; i < arguments.length; i++) {
                result[result.length] = arguments[i];
            }
        }

    for (let i = start+deleteCount; i < array.length; i++) {
        result[result.length] = array[i];
    }

    array.length = 0;
    for (let i = 0; i < result.length; i++) {
        array[array.length] = result[i];
    }
    return del;
}

module.exports = {
    forEach   : myForEach ,
    filter    : myFilter ,
    map       : myMap ,
    slice     : mySlice,
    reduce    : myReduce,
    splice    : mySplice
};
