nos= [123,456,789,4,67,5,22];
Odd = [];
even = [];
var OddNumbers = function(n){
    for (var i=0; i < n.length; i++){
        if (nos[i] % 2 === 1){
        Odd.push(nos[i]);
        } else {
        even.push(nos[i]);
        }
    }
};
OddNumbers(nos);
console.log(Odd);