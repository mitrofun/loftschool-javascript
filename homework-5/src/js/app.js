var buttonCreate = document.querySelector('.generator__btn');
var buttonClean = document.querySelector('.generator__clean');
var container = document.querySelector('.container__shape');
let activeElement = null,
    cX = 0,
    cY = 0;

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
    var width, height, top ,left;
    var shape = document.createElement('div');
    var maxWidth = document.documentElement.clientWidth;
    var maxHeight = document.documentElement.clientHeight;


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

function removeAllShape() {
    for (var i = container.childElementCount - 1; i >= 0; i--) {
        console.log(container.children[i]);
        container.removeChild(container.children[i]);
    }
}

function mouseDown(e) {
    activeElement = e.target;
    activeElement.ondragstart = function() {
        return false;
    };

    cX = e.offsetX;
    cY = e.offsetY;
}

function mouseUp() {
    activeElement = null;
}

function mouseMove(e) {
    if (activeElement) {
        activeElement.style.left = toPx(e.clientX - cX);
        activeElement.style.top = toPx(e.clientY - cY);
    }
}


buttonCreate.addEventListener('click', createShape);
buttonClean.addEventListener('click', removeAllShape);
container.addEventListener('mousedown', mouseDown);
container.addEventListener('mouseup', mouseUp);
container.addEventListener('mousemove', mouseMove);