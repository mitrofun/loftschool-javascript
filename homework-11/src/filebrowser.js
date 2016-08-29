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

// scanPathToLog(PATH);


module.export  = { scanPathToLog };

let resumeObj = {'Roots': [] };

let objDir = {
    "name": "",
    "type": "",
    "fileType": "",
    "size" :  "",
    "nestedObjects": []
};

function __scanPathToJSON(path, obj) {
    let dirs = fs.readdirSync(path);

    obj = obj || objDir;

    console.log(obj);

    for (let dir of dirs) {
        let pathToDir = `${path}/${dir}`;
        let stat = fs.statSync(pathToDir);
        let size = stat.size;

        obj.name = dir;

        if (stat.isDirectory()) {
            obj.type = 'Folder';
            // obj.nestedObjects.push(dir);
            __scanPathToJSON(pathToDir, obj);
        } else {
            obj.type = 'File';
            obj.fileType = dir.split('.')[dir.split('.').length-1]
            obj.size = size;
        }
    }

    return obj;
}

function scanPathToJSON(path) {
    let json = __scanPathToJSON(path,'', objDir);
    console.log('resume',json);
}

scanPathToJSON(PATH);

// function getFiles (dir, files_){
//     files_ = files_ || [];
//     var files = fs.readdirSync(dir);
//     for (var i in files){
//         var name = dir + '/' + files[i];
//         if (fs.statSync(name).isDirectory()){
//             getFiles(name, files_);
//         } else {
//             files_.push(name);
//         }
//     }
//     return files_;
// }
//
// console.log(getFiles(PATH));
