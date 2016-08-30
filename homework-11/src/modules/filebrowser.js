let fs = require('fs');
let filepath = require('filepath');
const ROOTPATH = '../';

let DIRS = [];

let obj = {
    display: '',
    name: '',
    type: '',
    path: '',
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

        let fullPath;

        if (stat.isDirectory()) {

            fullPath = filepath.create(pathToDir);

            obj = {
                display: `${currentNested}${dir} [dir]`,
                name: dir,
                type: 'Folder',
                size: size,
                path: fullPath.toString()
            };
            DIRS.push(obj);
            __scanPathToArray(pathToDir, currentNested);
        } else {
            fullPath = filepath.create(pathToDir);

            obj = {
                display: `${currentNested}${dir} (${size}kb)`,
                name: dir,
                type: 'File',
                size: size,
                path: fullPath.toString()
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
        console.log(item.path)
    })
}


// dirTreeToLog(ROOTPATH); //- FIRST PART

module.exports.scanPathToArray  = scanPathToArray;
module.exports.dirTreeToLog = dirTreeToLog;