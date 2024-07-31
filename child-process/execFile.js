const { execFile } = require("child_process");

execFile("./files/test.js", (err, stdout, stderr) => {
  console.log(`output: ${stdout}`);
});
