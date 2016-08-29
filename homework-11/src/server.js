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

http.createServer(function (req, res) {

    let fileToRead = `./public/${req.url}`;
    let url = path.dirname(`.${req.url}`);

    if (fileToRead != '/') {
        if(!fs.existsSync(fileToRead)) {
            fileToRead = './public/404.html';
        }
    }

    let content = fs.readFileSync(fileToRead, {encoding: 'utf8'});
    let type = path.extname(fileToRead);

    res.setHeader('Content-Type', typeMap[type] );
    res.write(content);

    fb.scanPathToArray('../').map(item => {
        res.write('<div>'+ item+'</div>');
    });
    
    res.end();

}).listen(8888);

console.log('start server on http://127.0.0.1:8888/index.html');