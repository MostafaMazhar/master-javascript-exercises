function isOldEnoughToDrinkAndDrive(age) {
   if(age >= 16) return true;
   else return false;
}

let output = isOldEnoughToDrinkAndDrive(22);
console.log(output); // --> false