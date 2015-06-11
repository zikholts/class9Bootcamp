/*Andela BootCamp 9 
Course: JavaScript Practice
Programmed By: Sirolad
Email:sirolad@gmail.com
github id:sirolad
Date: June 2015
*/

//This code returns the sum of an array

var sum = function(array){
    var num=0;
    for(i=0;i < array.length; i++){
    
            num += array[i];
    }
    return num;
}

sum([1,2,3,4,5])
