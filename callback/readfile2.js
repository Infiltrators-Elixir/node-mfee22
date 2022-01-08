const { readFile } = require("fs");



let readfilePromise = new Promise((resolve, reject) => {
    readFile("test.txt", "utf-8", (err, data) => {
        if (err) {
            reject(err);
            return;
        }
        resolve(data);
        // insert to myasql
    });
});
// console.log(readfilePromise);
readfilePromise
.then((result) => {
    //接住resolve的結果
    console.log(`我讀到了 ${result}`)
})
.catch((err) => {
    console.error(`${err}`)
})
