function findArrayMax(array) {          //function declearation
  var max = 0;                          //initialize variable max
  for (i = 0; i < array.length; i++) {  //for loop to iterate through the array
    if (array[i] > max) {               //compare each value in array with max
      max = array[i];                   //if condition is through swap
    }
  }
return max;                             //return the largest array element
}
findArrayMax([23, 34, 63, 8, 21]);