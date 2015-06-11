function sumMyA(arr){
    var total=0;
    var count=arr.length-1
    
    for(var i=count;i>=0; i--){
         total += arr[i]
     }
    return total;
}

sumMyA([34,7,2,-45,9,-67,100])