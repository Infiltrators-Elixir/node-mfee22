const axios = require("axios");
const { readFile } = require("fs");

readFile("stock.txt", "utf-8", (err, stockNo) => {
  if (err) {
    console.log(err);
    return;
  }
   console.log(stockNo);
   (async() => {
    let queryDate = '20220115';
    console.log(stockNo);
    //TODO:從stock.txt中讀出代碼
    
    // let response = await axios.get(`https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=${queryDate}&stockNo=2330&_=1641716372516`
    // );
    
    let response = await axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY",{
    params:{
        response:'json',
        date:queryDate,
        stockNo,
    }
    }
    )
    console.log(response.data)
    
    })()
    



  // insert to mysql
});
// console.log(stockNo);

// (async() => {
// let queryDate = '20220115';
// console.log(stockNo);
// //TODO:從stock.txt中讀出代碼

// // let response = await axios.get(`https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=${queryDate}&stockNo=2330&_=1641716372516`
// // );

// let response = await axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY",{
// params:{
//     response:'json',
//     date:queryDate,
//     stockNo,
// }
// }
// )
// console.log(response.data)

// })()
