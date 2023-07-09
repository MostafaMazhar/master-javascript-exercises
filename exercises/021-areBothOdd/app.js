// Write your function here
function areBothOdd(a,b){
     if(a % 2 !== 0 && b % 2 !== 0){
      return true;
     }
     return false;
}

const bothOdd = (a,b) => {
  return (a % 2 !== 0) && (b % 2 !== 0)
}
let output = bothOdd(1, 3);
console.log(output); // --> true