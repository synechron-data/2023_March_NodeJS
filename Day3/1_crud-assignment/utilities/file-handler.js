const fs = require('fs');
let filePath = process.cwd() + "/data/database.json";

exports.readData = function () {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err)
                reject(`Error reading file from disk: ${err}`);
            else {
                const employees = JSON.parse(data);
                resolve(employees);
            }
        });
    });
}

exports.writeData = function (data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(data), 'utf8', (err) => {
            if (err)
                reject(`Error writing file on disk: ${err}`);
            else {
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err)
                        reject(`Error reading file from disk: ${err}`);
                    else {
                        const employees = JSON.parse(data);
                        resolve(employees);
                    }
                });
            }
        });
    });
}