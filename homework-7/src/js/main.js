import { getCookie, delCookie, createCookie} from './modules/cookie';

let tableBody = document.querySelector('.cookie-table__body');
let addCookieBtn = document.querySelector('.add-cookie__btn');


window.addEventListener('load', getCookie);
tableBody.addEventListener('click', delCookie);
addCookieBtn.addEventListener('click', createCookie);