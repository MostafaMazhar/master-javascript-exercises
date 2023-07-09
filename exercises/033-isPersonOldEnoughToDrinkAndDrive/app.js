function isPersonOldEnoughToDrinkAndDrive(person) {
   if(person.age >= 21){
    return true;
   }
   else return false;
}

let obj = {
  age: 45
};
let output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output); // --> false