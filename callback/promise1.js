// Promise 物件代表一個即將完成或失敗的非同步操作，以及它所產生的值

// 1. Promise 是一個object
// new Promise()
// Promise() 是一個建構式，需要一個參數 executor
// 這個參數也是一個function 有兩個參數: resolve, reject

// 2. 即將完成或失敗
// resolve - 成功時呼叫 
// reject - 失敗時呼叫 

// 3. 非同步
// Promise物件會有狀態的移轉
// 剛建立時狀態會是pending

let dt = new Date();
console.log(`Start at ${dt.toISOString()}`);

let doWork = function (job, timer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // callback 設計 第一個是錯誤 第二個是結果
            resolve(`完成工作 ${job}`); //會把這一個物件的狀態變成fulfilled
            // 如果發生錯誤
            // reject(err)
            // 會把這一個 promise 物件的狀態變成 rejected
        }, timer);
    })
};

// 刷牙 -> 吃早餐 -> 寫功課
// Promise Chain,有另一種形式的hell
// .then =>然後的意思
// 使用一個已實現的 promise，'then' 區塊將立即被觸發，但是它的 handlers 將是非同步地被觸發


//.then().then().then()的寫法
doWork("刷牙", 2000)
    .then((result) => {
        let dt = new Date();
        console.log(`${result} at ${dt.toISOString()}`);
    
        // 以promise 物件的形式傳到下一個 .then
    
        return doWork("吃早餐", 3000);
    })

    // 可以取得上一個 .then 中 return 的值
    .then((result) => {
        let dt = new Date();
        console.log(`${result} at ${dt.toISOString()}`);
        return doWork("寫功課", 2000);
    })
    .then((result) => {
        let dt = new Date();
        console.log(`${result} at ${dt.toISOString()}`);
    })
    .catch((err) => {
        // .catch可以抓錯 如果在promise區塊或是then有錯會直接跳到這來處理錯誤
        console.error(err);
    })