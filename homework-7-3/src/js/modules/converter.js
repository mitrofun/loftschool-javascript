function toPx(val) {
    
    if (typeof val=='string' && val.indexOf('px')) {
        return val
    }
    
    return val + 'px';
}

function toHex(val) {

    let hex = val.toString(16);

    if (hex.length == 1) {
        hex = "0" + hex;
    }

    return hex;
}


export { toPx, toHex }