var largest = function (array) {

var l = array.sort();
     
var m = l[l.length-1];
 
return m;
 
}
 
var array = [4, 7, 9, 8, 3]
 
console.log(largest(array));