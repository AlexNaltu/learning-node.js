const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  const data = await fsPromises.readFile(
    path.join(__dirname, "files", "responseNew.txt"),
    "utf-8"
  );
  console.log(data);
  await fsPromises.unlink(path.join(__dirname, "files", "responseNew.txt"));
  await fsPromises.writeFile(
    path.join(__dirname, "files", "promiseWrite.txt"),
    data
  );
  await fsPromises.appendFile(
    path.join(__dirname, "files", "promiseWrite.txt"),
    "Hello From Promise Append\n"
  );
  await fsPromises.rename(
    path.join(__dirname, "files", "promiseWrite.txt"),
    path.join(__dirname, "files", "promiseWriteRenamed.txt")
  );
  const newData = await fsPromises.readFile(
    path.join(__dirname, "files", "promiseWriteRenamed.txt"),
    "utf-8"
  );
  console.log(newData);
  try {
  } catch (error) {
    console.log(error);
  }
};

fileOps();
