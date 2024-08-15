// const fs = require("fs");
// const path = require("path");

// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// console.log("Node.js async programming...");

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you",
//   (err) => {
//     if (err) throw err;
//     console.log("File written...COMPLETED");

//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\n\nI'm a software developer",
//       (err) => {
//         if (err) throw err;
//         console.log("append...COMPLETED");
//       }
//     );

//     fs.rename(
//       path.join(__dirname, "files", "reply.txt"),
//       path.join(__dirname, "files", "responseNew.txt"),
//       (err) => {
//         if (err) throw err;
//         console.log("reply..COMPLETED");
//       }
//     );
//   }
// );

// process.on("uncaughtException", (err) => {
//   console.log(`Uncaught Exception: ${err.message}`);
//   process.exit(1);
// });
