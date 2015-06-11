var factorial = function(n) {
    if (n>1){
        var calcFact = 1;
        for(var i=n; i>=1; i--) {
            calcFact = calcFact * i;
        }
        return calcFact;
    }
    else {
        return 1;
    }
};
factorial(10);