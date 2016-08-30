const fs = require('fs');
const http = require('http');
const path = require('path');
const typeMap = {
    ".html" : "text/html",
    ".css"  : "text/css",
    ".js"   : "text/javascript",
    ".json" : "application/json"
};
let fb = require('./modules/filebrowser');
let dirString = path.dirname(fs.realpathSync(__filename));
let currentPath, currentPage;
let fileTreeHTML = '';

http.createServer(function (req, res) {

    if (req.url.split('?path=')[1]) {
        currentPath = req.url.split('?path=')[1];
        currentPage = req.url.split('?path=')[0];
    }

    let fileToRead = `./public/${req.url}`;
    let url = path.dirname(`.${req.url}`);

    if (fileToRead != '/') {
        if(!fs.existsSync(fileToRead)) {
            // fileToRead = './public/404.html';
            fileToRead = './public/index.html';
        }
    }

    let content = fs.readFileSync(fileToRead, {encoding: 'utf8'});
    let type = path.extname(fileToRead);

    res.setHeader('Content-Type', typeMap[type] );
    res.write(content);

    // console.log('path to start walking...', currentPath);

    function displayTitlePath(item) {
        res.write(`<h2>${item.display}</h2>`);
    }

    function displayBreadcrumb(item) {
        let paths = item.display.split('/');
            let breadcrumb = '';

            breadcrumb += '<ol class="breadcrumb">';
            for (let i = 0; i < paths.length - 1 ; i++) {

                let displayPath = paths[i];

                let link = `${currentPage}?path=${item.display.split(displayPath)[0]}${displayPath}`;

                breadcrumb += `<li><a href='${link}'>${displayPath}</a></li>`
            }

            breadcrumb +=`<li>${paths[paths.length - 1]}</li>`;
            breadcrumb += '</ol>';
            res.write(`${breadcrumb}`);
    }

    fileTreeHTML += '<ul class="list-group">';

    fb.scanPathToArray(currentPath).map(item => {

        if (item.type === 'Root') {

            displayTitlePath(item);
            displayBreadcrumb(item);

        } else if (item.type === 'Folder') {
            fileTreeHTML += `<li class="list-group-item"><span class="badge">${item.size} kb</span><a href='${currentPage}?path=${item.path}'><strong>${item.display}</strong></a></li>`;
        } else {
            fileTreeHTML += `<li class="list-group-item"><span class="badge">${item.size} kb</span>${item.display}</li>`;
        }
    });

    fileTreeHTML += '</ul>';
    res.write(fileTreeHTML);

    res.end();

}).listen(8888);

console.log(`start server on http://127.0.0.1:8888/index.html?path=${dirString}`);