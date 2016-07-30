import { toHex } from './converter'

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {

    let r = getRandomNumber(0,255),
        g = getRandomNumber(0,255),
        b = getRandomNumber(0,255);

    return "#" + toHex(r) + toHex(g) + toHex(b);
}


export { getRandomNumber, getRandomColor }