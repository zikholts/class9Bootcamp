var fibonacci = function (n) {
	
	var fibarr = [1,2];
	for (var i=0; i < n; i++) {

		fibarr.push(fibarr[i] + fibarr[i + 1]);
	}
	return fibarr;
}
var x = fibonacci(10)
console.log(x);
