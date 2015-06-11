var factorial = function (n) {
	if (n==1) {
		return 1;
	}
	else {
		return n*factorial(n-1); 
	}

}
var x = factorial(5)
console.log(x);