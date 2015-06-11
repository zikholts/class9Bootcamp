list2 = [45,76,126,92];
var sumOfArray = function(n){
    var sum = 0;
    for (var i=0; i < n.length; i++){
        sum = sum + n[i];
    }
    return sum;
};
sumOfArray(list2);