//從0開始加到n
function sum(n) {

    let result = 0;
    for (i = 0; i <= Math.abs(n); i++) {
        result = i + result;
    }

    if (n >= 0) {
        return result
    }

    else {
        return -result 
    }
};

console.log(sum(1));
console.log(sum(2));
console.log(sum(5));
console.log(sum(10));
console.log(sum(-50));

console.log(sum(-20) + sum(40));
