// Map Array Data 

const num = [10,2,4,5,6];
function myFunction(num){
   let product = 1;
   for(let i =0; i< num.length; i++) {
     product *= num[i];
   }
   for(let j=0; j< num.length; j++) {
       console.log(product * Math.pow(num[j], -1) + " ");
   }
return num;
}

console.log(myFunction(num));
