var largest = function(numarray) {
    var number = 0;
        for (var i=0; i<numarray.length; i++) {
            if (numarray[i] > number) 
                number = numarray[i];
                
        }
    return number;   
}
