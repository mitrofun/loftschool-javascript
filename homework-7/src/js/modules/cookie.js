import {displayElement} from './ui'

function getCookie() {
    let cookie = document.cookie.split(';');
    let createDeleteBtn = true;

    if (cookie.length) {
        for (let i = 0; i < cookie.length; i++ ) {
            displayElement(cookie[i].split('=')[0], cookie[i].split('=')[1], createDeleteBtn)
        }
    }
}

function delCookeByName(name) {
    let date = new Date(0);
    document.cookie = name+"=; expires=" + date.toUTCString();
}


function delCookie(e) {
    let tableBody = document.querySelector('.cookie-table__body');

    let nameCookie = e.target.parentNode.parentNode.firstChild.textContent;
    let confirmDelete = confirm(`Удалить cookie ${nameCookie} ?`);

    if (confirmDelete) {
        delCookeByName(nameCookie);
        tableBody.removeChild(e.target.parentNode.parentNode);
    }

}

export { getCookie , delCookie }