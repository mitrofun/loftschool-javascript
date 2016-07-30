import { toPx } from './converter'
import { getRandomNumber, getRandomColor } from './random'

let container = document.querySelector('.container__shape');


function createShape(obj) {
    let width, height, top ,left, color;
    let shape = document.createElement('div');
    let maxWidth = document.documentElement.clientWidth;
    let maxHeight = document.documentElement.clientHeight;
    let minVal = 21;

    if (obj.width) {
        width = obj.width;
        height = obj.height;
        top = obj.top;
        left = obj.left;
        color = obj.background;
    } else {
        width = getRandomNumber(minVal, maxWidth);
        height = getRandomNumber(minVal, maxHeight);
        top = getRandomNumber(0, maxHeight-height);
        left = getRandomNumber(0, maxWidth-width);
        color = getRandomColor();
    }

    
    shape.style.width = toPx(width);
    shape.style.height = toPx(height);
    shape.style.top = toPx(top);
    shape.style.left = toPx(left);
    shape.style.background = color;
    shape.className = 'shape';

    container.appendChild(shape);
}

function _delCookie() {
    let cookie = document.cookie.split(';');

    for (let i=0; i < cookie.length; i ++) {

        if (cookie[i].indexOf('shapeId')) {

            let date = new Date(0);
            let cookieShape = cookie[i].split('=')[0];
            document.cookie = `${cookieShape}=; expires=${date.toUTCString()}`;
        }

    }
}

function removeAllShape() {
    for (let i = container.childElementCount - 1; i >= 0; i--) {
        container.removeChild(container.children[i]);
    }
    _delCookie();
}


function saveShape() {
    let shape = document.querySelectorAll('.shape');

    for (let i=0; i < shape.length; i ++) {
        let width = shape[i].style.width;
        let height = shape[i].style.height;
        let top = shape[i].style.top;
        let left = shape[i].style.left;
        let background = shape[i].style.background;

        document.cookie = `__shapeId_${i+1}=${width}/${height}/${top}/${left}/${background}`;

    }
}

function getShape() {
    let cookie = document.cookie.split(';');
    // console.log(cookie);
    for (let i=0; i < cookie.length; i ++) {
        if (cookie[i].indexOf('shapeId')) {
            // console.log(cookie[i]);
            let chars = cookie[i].split('=')[1].split('/');
            let shape = {
                width : chars[0],
                height : chars[1],
                top : chars[2],
                left : chars[3],
                background : chars[4]
            };
            createShape(shape);
        }

    }
}


export { createShape, saveShape, getShape, removeAllShape }