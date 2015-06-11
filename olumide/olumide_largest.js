var list=[24,6,975,3,100452345,1000000567];
function listNo(){
    list.sort(function(a, b){return a-b});list.reverse();
    return(list[0]);
    }
listNo(list);