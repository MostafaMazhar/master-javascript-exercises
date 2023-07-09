// Write your function here
function areBothOdd(a,b){
     if(a % 2 !== 0 && b % 2 !== 0){
      return true;
     }
     return false;
}
let output = areBothOdd(1, 3);
console.log(output); // --> true