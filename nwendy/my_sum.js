var sum = function(num) {
    var add = 0;
    
    for (var i = 0; i < array.length; i++) {
     add = array[i] + add
    }
    return add; 
};

var array = [4, 9, 6, 12, 0, 1];
sum(array)