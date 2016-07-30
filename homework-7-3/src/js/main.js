import { mouseDown, mouseUp, mouseMove } from  './modules/drag-drop'
import { createShape, removeAllShape, saveShape, getShape } from  './modules/shape'

let container = document.querySelector('.container__shape');

let buttonCreate = document.querySelector('.generator__btn');
let buttonClean = document.querySelector('.generator__clean');
let buttonSaveShape = document.querySelector('.generator__btn_save');



window.addEventListener('load', getShape);

buttonCreate.addEventListener('click', createShape);
buttonClean.addEventListener('click', removeAllShape);
buttonSaveShape.addEventListener('click', saveShape);

container.addEventListener('mousedown', mouseDown);
container.addEventListener('mouseup', mouseUp);
container.addEventListener('mousemove', mouseMove);