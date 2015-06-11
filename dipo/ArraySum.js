var arraySum = function(numArray) {
    var sum = 0;
    for(var i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    return sum;
};

arraySum([3, 7, 8, 34]);