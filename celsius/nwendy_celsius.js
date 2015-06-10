var convertfahrenheit = function (cels) {

var x= [];

var size = cels.length
for (var i = 0; i < size; i++) {
    var fahrenheit = (9/5) * cels[i] + 32;
   x.push(fahrenheit);
}

 return x;
};
var celsius = [100,150,200,250,300];

console.log(convertfahrenheit(celsius));