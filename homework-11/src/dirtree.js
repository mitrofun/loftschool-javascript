let fs = require('fs');
const PATH = '../';

let resumeObj = {'Roots': [] };

let objDir = {
    "name": "",
    "type": "",
    "fileType": "",
    "size" :  "",
    "nestedObjects": []
};

function Dir(name) {
  this.name = name;

}

function scanPathToJSON(path) {
    let dirs = fs.readdirSync(path);

    for (let dir of dirs) {

        let obj = new Object();

        obj.name = dir;

        if (path === PATH) {
            resumeObj.Roots.push(obj)
        }
    }

}

scanPathToJSON(PATH, objDir);
console.log(resumeObj);