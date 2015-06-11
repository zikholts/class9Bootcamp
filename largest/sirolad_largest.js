/*Andela BootCamp 9 
Course: JavaScript Practice
Programmed By: Sirolad
Email:sirolad@gmail.com
github id:sirolad
Date: June 2015
*/

//This code returns the largest number in an array

function largest(array) {
  return Math.max.apply(null, array);
}

largest([1,2,3,4,9]);