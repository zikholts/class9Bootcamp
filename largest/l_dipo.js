var largest = function(numberArray) 
{
    var tempLargest = 0;
    
   
	for(var i = 0; i < numberArray.length; i++) {
     
   
        if (i === 0) {
           
		 tempLargest = numberArray[0]
     
	         }

        
   if (tempLargest < numberArray[i]) {
   
         	tempLargest = numberArray[i];
       
		 }
   
   	}
      
		return tempLargest;

};



largest([6, 7, 46647749, 9855, 1243]);