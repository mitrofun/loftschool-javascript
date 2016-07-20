var button = document.querySelector('.generator__btn');
var container = document.querySelector('.container');

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function toPx(val) {
    return val + 'px';
}

function getHex(val) {

    var hex = val.toString(16);

    if (hex.length == 1) {
        hex = "0" + hex;
    }

    return hex;
}

function getRandomColor() {

    var r = getRandom(0,255),
        g = getRandom(0,255),
        b = getRandom(0,255);

    return "#" + getHex(r) + getHex(g) + getHex(b);
}

function createShape() {
    var shape = document.createElement('div');
    var maxWidth = document.documentElement.clientWidth;
    var maxHeight = document.documentElement.clientHeight;
    var width, height, top ,left;

    width = getRandom(0, maxWidth);
    height = getRandom(0, maxHeight);
    top = getRandom(0, maxHeight-height);
    left = getRandom(0, maxWidth-width);

    shape.style.width = toPx(width);
    shape.style.height = toPx(height);

    shape.style.top = toPx(top);
    shape.style.left = toPx(left);

    shape.style.background = getRandomColor();

    shape.className = 'shape';
    container.appendChild(shape);

}

button.addEventListener('click', createShape);