function FirstFactorial(num) { 
   // a variable to hold values in loop 
     x = 1;
  // code goes here  
      for (i = num; i > 0; i--) {
      x *=i;
     }
     return x; 
  }
  
FirstFactorial(4);