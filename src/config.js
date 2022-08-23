const fs = require('fs');
const path = require('path')
const pwd = process.cwd();
const configPath = path.join(pwd, "config.json")
let configData = {};

exports.load = async () => {
    let bufs = [];
    fs.readFile(configPath, (error, data) => {
        bufs.push(data)
    });
    console.log(data);
}