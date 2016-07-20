import { toPx } from './converter'

let activeElement = null,
    cX = 0,
    cY = 0;

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


export { mouseDown, mouseUp, mouseMove }