var oddArray = function(numarray) {
    var newarray = [];
        for (i=0; i<numarray.length; i++){
            if(numarray[i]%2===1)
            newarray.push(numarray[i]);
        }
        return newarray;
}
