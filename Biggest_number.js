//Biggest Number
const num = 231;
function myFunction(num) {
  if(num < 100 || num > 999) {
    return null;
  }
  return +num.toString().split('').sort((a, b)=> b - a).join('');
}
console.log(myFunction(num));