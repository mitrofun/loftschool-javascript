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

    fb.scanPathToArray(currentPath).map(item => {

        if (item.type === 'Root') {
            res.write(`<h2>${item.display}</h2>`);
        } else if (item.type === 'Folder') {
            res.write(`<div><a href='${currentPage}?path=${currentPath}/${item.name}'>${item.display}</a></div>`);
        } else {
            res.write(`<div>${item.display}</div>`);
        }
    });

    res.end();

}).listen(8888);

console.log(`start server on http://127.0.0.1:8888/index.html?path=${dirString}`);