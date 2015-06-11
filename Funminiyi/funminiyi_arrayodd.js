
/**/
function myOddNo(k){
    var oddNo=[];
    var count=k.length-1;
    
    for(var i=count;i>=0; i--){
        
         if (k[i]%2 !== 0){
             oddNo.push(k[i]);
        }
    }return ("The odd numbers are " + oddNo)
    
}

myOddNo([34,7,8,8,3,100])