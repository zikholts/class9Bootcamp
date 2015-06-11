var factorial = function(number) {
    if (number === 1 || number === 0 )
        return 1;
        
    else {
        var fctrl = 1;
        for(var i = number; i >= 1; i--) {
            fctrl = fctrl * i;
        }
        return fctrl;
    }
}

factorial(6);