//AIM:to accept arrays of number and return the largest
function findLargest(name){
    
    var thisIsTheLargest=[]
    
    var count=name.length-1
    
    var sorted =name.sort(function(a, b){
        return a-b
        
    });
    
    //using the sorted array index, this returns the largest number
    return "The largest number is "+ sorted[count]
   
}


//To test what I have written

var a =[12, 17, 4 ,6, 7,-1]
findLargest(a)


/*AURTHOR:Jekoyemi Funminiyi.
@ Andela BootCamp IX*/