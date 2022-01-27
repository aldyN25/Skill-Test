const num = 25;

function countMultiples(snumum){
    let res = 0;
    for (let i = 1; i <= num; i++){
    if (i % 3 == 0 || i % 5 == 0){
        res++;
	}
	}
    return res;
}
 
// Driver code
console.log( " Count = " +countMultiples(num));