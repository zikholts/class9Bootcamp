var printOdd = function(numArray) {
    var oddArray = [];
    for(var i  = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 !== 0) {
            oddArray.push(numArray[i]);
        }
    }
    return oddArray;
}

printOdd([2, 4, 7, 9, 13, 43, 99, 8, 6, 7]);