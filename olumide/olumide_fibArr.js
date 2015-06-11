var fibonacci = function(n) {
    var fibArr = [6,7];
    for (var i=0;i<n;i++) {
        fibArr.push(fibArr[i]+fibArr[i+1]);
    }
    return fibArr;
};
fibonacci(12);