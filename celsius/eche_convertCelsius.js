var fahrenheit = function(celsuis){
    var celarray = [];
    for (var i=0; i<=celsuis.length - 1; i++) {
        fahMeth = ((9/5)*celsuis[i]) + 32;
        celarray.push(fahMeth);
    }
    return celarray;
}
console.log(fahrenheit([5,3,5]));