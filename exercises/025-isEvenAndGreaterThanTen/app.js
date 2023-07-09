// Write your function here
function isEvenAndGreaterThanTen(n){
  if(n % 2 === 0 && n > 10){
     return true
  }
  return false;
}



let output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false