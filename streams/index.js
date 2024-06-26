const fs = require("fs");
const { Transform } = require("stream");

const readStream = fs.createReadStream("./streams/Readme.txt", "utf-8");
const writeStream = fs.createWriteStream("./streams/writeme.txt", {
  flags: "a", // This flag is used to append the data
});

readStream.on("data", (chunk) => {
  writeStream.write(chunk + "\n");
  writeStream.write("This is Rahul Gupta!\n");
  //   writeStream.end();
});

readStream.on("end", () => {
  console.log("File is read completely");
});

writeStream.on("finish", () => {
  console.log("write is completed");
});

// convert all data to uppercase
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    const transformedChunk = chunk.toString().toUpperCase();
    this.push(transformedChunk);
    callback();
  },
});

readStream.pipe(transformStream).pipe(writeStream);
