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

module.export  = { scanPathToLog };