const fs = require("fs");

const rs = fs.createReadStream("./files/lorem.txt", { encoding: "utf-8" });

const ws = fs.createWriteStream("./files/loremCopy2.txt");

/*rs.on("data", (chunkData) => {
  ws.write(chunkData);
}); */

rs.pipe(ws);
