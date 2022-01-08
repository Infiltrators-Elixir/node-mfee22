const { readFile } = require("fs");

readFile("text.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);

  // insert to mysql
});