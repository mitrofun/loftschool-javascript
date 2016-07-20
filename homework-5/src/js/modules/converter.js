function toPx(val) {
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