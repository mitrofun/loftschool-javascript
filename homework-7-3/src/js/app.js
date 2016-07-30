import { toPx } from './modules/converter'
import { getRandomNumber, getRandomColor } from './modules/random'
import { mouseDown, mouseUp, mouseMove } from  './modules/drag-drop'

let buttonCreate = document.querySelector('.generator__btn');
let buttonClean = document.querySelector('.generator__clean');
let container = document.querySelector('.container__shape');


function createShape() {
    let width, height, top ,left;
    let shape = document.createElement('div');
    let maxWidth = document.documentElement.clientWidth;
    let maxHeight = document.documentElement.clientHeight;
    let minVal = 21;

    width = getRandomNumber(minVal, maxWidth);
    height = getRandomNumber(minVal, maxHeight);
    top = getRandomNumber(0, maxHeight-height);
    left = getRandomNumber(0, maxWidth-width);

    shape.style.width = toPx(width);
    shape.style.height = toPx(height);
    shape.style.top = toPx(top);
    shape.style.left = toPx(left);
    shape.style.background = getRandomColor();
    shape.className = 'shape';

    container.appendChild(shape);
}

function removeAllShape() {
    for (let i = container.childElementCount - 1; i >= 0; i--) {
        container.removeChild(container.children[i]);
    }
}

buttonCreate.addEventListener('click', createShape);
buttonClean.addEventListener('click', removeAllShape);
container.addEventListener('mousedown', mouseDown);
container.addEventListener('mouseup', mouseUp);
container.addEventListener('mousemove', mouseMove);