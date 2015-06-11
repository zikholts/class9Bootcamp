function sumArray(array) {
var output = 0;
    for(var i=0; i < array.length; i++){
        output+=array[i];   
        }
        return output;
}
sumArray([1, 2, 5, 7]);