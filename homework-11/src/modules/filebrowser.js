let fs = require('fs');
const ROOTPATH = '../';

let DIRS = [];

function __scanPathToArray(path, nested='') {
    let dirs = fs.readdirSync(path);
    let currentNested = '-';

    currentNested += nested;

    for (let dir of dirs) {
        let pathToDir = `${path}/${dir}`;
        let stat = fs.statSync(pathToDir);
        let size = (stat.size /1024).toFixed(2);

        if (stat.isDirectory()) {
            DIRS.push(`${currentNested}${dir} [dir]`);
            __scanPathToArray(pathToDir, currentNested);
        } else {
            DIRS.push(`${currentNested}${dir} (${size}kb)`);
        }
    }
}


function scanPathToArray(path) {
    DIRS = [];
    DIRS.push(path);
    __scanPathToArray(path);
    return DIRS
}

// console.log(scanPathToArray(ROOTPATH));

module.exports.scanPathToArray  = scanPathToArray;
