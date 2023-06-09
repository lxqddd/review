const fs = require("fs");

const readStream = fs.createReadStream("./NodeJs/1. node 有哪些全局对象.md", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./1.axios.copy.js");

readStream.on("data", (chunk) => {
  console.log("data", chunk);
  writeStream.write(chunk);
});

readStream.on("end", () => {
  console.log("end");
  writeStream.end();
});

writeStream.on("finish", () => {
  console.log("finish");
});
