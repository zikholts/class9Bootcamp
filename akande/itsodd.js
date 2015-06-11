/*Andela BootCamp 9 
Course: JavaScript Practice
Programmed By: Sirolad
Email:sirolad@gmail.com
github id:sirolad
Date: June 2015
*/

//This code returns an array of odd number
var itsodd = function(array){
    var ret=[];
    for(i=0;i < array.length; i++){
    
           if(array[i]%2===1){
               ret.push(array[i]);
           }
    }
    return ret;
};

itsodd([13,1,5,7,9]);