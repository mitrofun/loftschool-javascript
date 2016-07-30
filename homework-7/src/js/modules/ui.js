function displayElement() {
    let tableBody = document.querySelector('.cookie-table__body');
    let row = document.createElement('tr');
    row.classList.add('cookie-table__body-row');

    for (let i = 0; i < arguments.length; i++) {

        let cell = document.createElement('td');
        cell.classList.add('cookie-table__body-cell');

        if (typeof arguments[i] == 'string') {
            cell.textContent = arguments[i];
        } else if (typeof arguments[i] === 'boolean') {

            let delBtn = document.createElement('a');
            delBtn.classList.add('delete__cookie');
            delBtn.textContent = 'delete';
            delBtn.setAttribute('href', 'javascript: void(0);');

            cell.appendChild(delBtn);
        }

        row.appendChild(cell);
    }

    tableBody.appendChild(row);
}


export { displayElement }