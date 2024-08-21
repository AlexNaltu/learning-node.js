const fs = require("fs");

if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) {
      throw new Error(err);
    }
    console.log("Directory created");
  });
}

if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) {
      throw new Error(err);
    }
    console.log("Directory removed");
  });
}
