var largest = function(array) {
    var max = array[0];
        
    var size = array.length;
    for (var i = 0; i < size; i++) {
        if (array[i] > max) {
        max = array[i];
        } 
        
    }
    return max; 
};

var array = [4, 9, 6, 12, 0, 1];
console.log(largest(array));