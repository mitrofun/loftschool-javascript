import { getCookie, delCookie} from './modules/cookie';

let tableBody = document.querySelector('.cookie-table__body');

window.addEventListener('load', getCookie);
tableBody.addEventListener('click', delCookie);