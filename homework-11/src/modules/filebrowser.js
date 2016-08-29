let fs = require('fs');
const PATH = '../';

function __scanPathToLog(path, nested='') {
    let dirs = fs.readdirSync(path);
    let currentNested = '-';

    currentNested += nested;

    for (let dir of dirs) {
        let pathToDir = `${path}/${dir}`;
        let stat = fs.statSync(pathToDir);
        let size = (stat.size /1024).toFixed(2);

        if (stat.isDirectory()) {
            console.log(`${currentNested}${dir} [dir]`);
            __scanPathToLog(pathToDir, currentNested);
        } else {
            console.log(`${currentNested}${dir} (${size}kb)`)
        }
    }
}

function scanPathToLog(path) {
    console.log(path);
    __scanPathToLog(path);
}

scanPathToLog(PATH);


function getFiles(dir, _files){
    _files = _files || [];
    let files = fs.readdirSync(dir);
    for (let i in files){
        let name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, _files);
        } else {
            _files.push(name);
        }
    }
    return _files;
}

console.log(getFiles(PATH));

module.export  = { scanPathToLog };