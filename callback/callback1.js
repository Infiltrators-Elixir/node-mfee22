let doWork = function(job, timer, callBack){
    setTimeout(() => {
        // callback 設計 第一個是錯誤 第二個是結果
        callBack(null, `完成工作 ${job}`);
    }, timer);
};

// 刷牙 -> 吃早餐 -> 寫功課
let dt = new Date();
console.log(dt);
console.log(`開始刷牙 at ${dt.toISOString()}`);

//settimeout 屬於外包工作的一種 
// 如果分別用 setTimeout 2~5~7來達成2+3+2的效果
//意思就是三個動作|同時|開始 結束時間差2/3/2秒 
// 而不是 A完B  B完C 

doWork("刷牙", 2000, (err, result) => {
    let dt = new Date();
    console.log(`${result} at ${dt.toISOString()}`);
    console.log(`開始吃早餐 at ${dt.toISOString()}`);
    doWork("吃早餐", 3000, (err, result) => {
        let dt = new Date();
        console.log(`${result} at ${dt.toISOString()}`);
        console.log(`開始寫功課 at ${dt.toISOString()}`);
        doWork("寫功課", 2000, (err, result) => {
            let dt = new Date();
            console.log(`${result} at ${dt.toISOString()}`);
        })
    })
})