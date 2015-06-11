//a program to calculate the sum of an array of numbers

function sumOfArray(array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++) { 
        sum += array[i]; 
    }
    return sum;
}
sumOfArray([25, 13, 4, 63, 65, 34])
