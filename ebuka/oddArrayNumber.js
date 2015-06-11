//a program to print all the odd numbers in an array

function oddArrayNumber(array) {
    var oddArray = [];
    for(var i = 0; i < array.length; i++) {
        if(array[i] % 2 !== 0) {
            oddArray.push(array[i]);
        }
    }
    return oddArray;
}
oddArrayNumber([25, 13, 4, 63, 65, 34])