function sum(n) {
    
    let result = 0;
    for (i= 1 ; i <= n ; i++ ) {
        result= i + result;
    }
      
    return result;
};

console.log(sum(1));
console.log(sum(2));
console.log(sum(5));
console.log(sum(10));