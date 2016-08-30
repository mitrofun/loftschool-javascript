let fs = require('fs');
const ROOTPATH = '../';

let DIRS = [];

let obj = {
    display: '',
    name: '',
    type: '',
    size: 0
};

function __scanPathToArray(path, nested='') {
    let dirs = fs.readdirSync(path);
    let currentNested = '-';

    currentNested += nested;

    for (let dir of dirs) {
        let pathToDir = `${path}/${dir}`;
        let stat = fs.statSync(pathToDir);
        let size = (stat.size /1024).toFixed(2);

        if (stat.isDirectory()) {
            obj = {
                display: `${currentNested}${dir} [dir]`,
                name: dir,
                type: 'Folder',
                size: size
            };
            DIRS.push(obj);
            __scanPathToArray(pathToDir, currentNested);
        } else {
            obj = {
                display: `${currentNested}${dir} (${size}kb)`,
                name: dir,
                type: 'File',
                size: size
            };
            DIRS.push(obj);
        }
    }
}

function __cleanDirs() {
    DIRS = [];
}


function scanPathToArray(path) {
    __cleanDirs();

    obj.display = path;
    obj.type = 'Root';
    DIRS.push(obj);

    __scanPathToArray(path);
    return DIRS
}

function dirTreeToLog(path) {
    scanPathToArray(path).map(item=>{
        console.log(item.display)
    })
}

// dirTreeToLog(ROOTPATH); - FIRST PART


module.exports.scanPathToArray  = scanPathToArray;
module.exports.dirTreeToLog = dirTreeToLog;