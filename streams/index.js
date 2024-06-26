const fs = require("fs");

const writeFile = fs.createWriteStream("./streams/example.txt", "utf-8");

console.log(writeFile, "writeFile");
