const { exec } = require("child_process");
// exec("start chrome");

exec("start chrome", (err, stdout, stderr) => {
  if (err) {
    console.log(`error: ${err.message}`);
    return;
  }
  if (stderr) {
    console.log(`stdErr: ${err.message}`);
    return;
  }
  console.log(`Output: ${stdout}`);
});
